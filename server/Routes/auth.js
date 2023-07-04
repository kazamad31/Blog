import  express, { application }  from 'express';
import User from '../Model/userSchema.js'
import jwt from 'jsonwebtoken';
import authenticate from '../Middleware/authentication.js';
import uploadMiddleware from '../Multer/multer.js'
import axios from 'axios';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path'
import {promises as fsPromises} from 'fs';
import {run} from '../Mailchimp/mailchimp.js';
const key=process.env.API_KEY;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const router = express.Router();
router.get('/', (req, res)=>{
    res.send({
        "status": false,"message": "invalid json data"});
});
router.post('/api/register',async (req, res)=>{
    try{
    const {name, email, password}= req.body
    if(!name || !email || !password)
    {
        res.json({message:"Fill the details"});
    }
    else{
        const userExist= await (User.findOne({email: email}));
            if(userExist){
                return res.status(409).json({message:"User already existed"});
            }
            else{
                const user = new User(req.body);
               await user.save();
                    res.status(201).json({message:"Successfully Registered"});
            }
        }
    }
    catch{
                    res.status(500).json({message:"Failed to registered"});
                }
            });
            router.post('/api/login',async(req, res)=> {
                try{
                
                    const {email,password} = req.body;
                    if(!email || !password)
                    {
                     return res.status(203).json({message:"Fill the details first"});
                    }
                    else{
                        const userLogin= await (User.findOne({email:email}));
                        if(userLogin && userLogin.password === password)
                        {
                            const token= await userLogin.generateAuthToken();
                            //const cookieParams = {httpOnly:true, sameSite:'none',secure:true, overwrite:true}
                            res.cookie("jwttoken",token,{expires: new Date(Date.now() + 86400000), httpOnly:true});
                          res.status(202).json({message:"Login Successfully"});
                           }
                            
                        else{
                            res.status(203).json({message:"Invalid Credential"});
                        }
                    }
                     }
                     catch(err){
                         console.log(err);
                     }

                     });
                     router.get('/api/token_check', authenticate, (req, res)=>{
                        res.status(200).json({userInfo:req.rootUser,message:"authorized"});
                     });
                     router.get('/api/home',authenticate, (req, res)=>{
                         res.status(200).json({userInfo:req.rootUser});
                     });
                     router.get('/api/about',authenticate, (req, res)=>
                     {
                        console.log(`Hello this is my about`);
                        res.status(200).json({userInfo:req.rootUser});
                        
                     });
                     router.get('/api/profile',authenticate, (req, res)=>{
                       res.status(200).json({userInfo:req.rootUser});
                     });
                     router.get('/logout', (req, res)=>
                     {
                     res.clearCookie('jwttoken');
                     return res.status(200).json({message:"Successfully Logout"});
                     });
                     router.post('/api/profile/file-upload',authenticate,uploadMiddleware,async(req, res)=>{
                    try{
                        if(req.body!==null)
                        {
                        const fileName = req.uploadedFile;
                        const myUser=req.rootUser;
                        const oldPic =`${req.rootUser.profile.avtar}`;
                        const dp =oldPic.substring(oldPic.lastIndexOf('.')+1).toLowerCase();
                        const updatedUser= await(User.findOneAndUpdate({_id:myUser._id},{$set:{'profile.avtar':fileName}},{new:true}));
                        await updatedUser.save(); 
                        const filePath=join(__dirname,'..','uploads', oldPic);
                        if(dp==="jpg" || dp==="png" || dp==="jpeg")
                        {   
                            await fsPromises.unlink(filePath);
                            res.status(200).json({message:`Profile avtar ${fileName} has been updated`, userInfo:updatedUser});  
                        }
                        else{
                        
                           res.status(200).json({message:`Profile avtar ${fileName} has been updated`, userInfo:updatedUser});
                        }
                        
                        }
                        else{
                            res.status(203).json({message:"There is no such file"});
                        }
                    }
                    catch(error){
                        res.send(`Something went wrong ${error}`);
                    }      
    
                                }
                        
                             );
                             router.post('/api/profile/profile-update', authenticate, async(req,res)=>{
                                const myuser= req.rootUser;
                                const userInfo= req.body;
                                const updatedUser = await(User.findOneAndUpdate({_id:myuser._id},{$set:{'profile.profession':userInfo.profile.profession, 'profile.phone':userInfo.profile.phone, 'profile.address':userInfo.profile.address}}, {new:true}));
                                updatedUser.save();
                                res.status(200).json({message:"User profile has been successfully updated", userInfo:updatedUser});
                             });
                             router.post('/api/news', authenticate, async(req, res)=>{

                                try{
                                   const {squery}=req.body;
                                    const options = {
                                        method: 'GET',
                                        url: 'https://bing-news-search1.p.rapidapi.com/news/search',
                                        params: {
                                          q: `${squery}`,
                                          freshness: 'Day',
                                          textFormat: 'Raw',
                                          safeSearch: 'Off',
                                          originalImg: true,
                                          count:12,
                                          offset:0
                                        },
                                        headers: {
                                          'X-BingApis-SDK': 'true',
                                          'X-RapidAPI-Key': `${key}`,
                                          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
                                        }
                                    }
                                    const news= await axios.request(options);
                                    const newsArticle =news.data.value;
        
                                    if(newsArticle.length!==12){
                                       return res.status(401).json({message:"Invalid Request"});
                                    }
                                    else{
                                       return res.status(200).json({query:newsArticle});
                                    }
                                }
                                catch(error){
                                  console.log(error);
                                }
                             });
                             router.put('/api/home/subscriber', async(req, res)=>{
                                try{ 
                                    const {name,email,message}=req.body;
                                    const subscribingUser = {
                                    name: name,
                                    message: message,
                                    email: email
                                  };
                               const sUser = await run(subscribingUser);
                               if(!sUser){

                               return res.status(202).json({message:"User already existed"});
                               }
                               else{
                               return res.status(200).json({message:"Successfully subscribed"});
                             }
                            }
                            catch(error){
                                console.log(error);
                            }
                             });

            
export default router;