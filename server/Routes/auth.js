import  express, { application }  from 'express';
import User from '../Model/userSchema.js'
import jwt from 'jsonwebtoken';
import authenticate from '../Middleware/authentication.js';
//import upload from '../Multer/multer.js'
import multer, { diskStorage } from 'multer';


const router = express.Router();
const storage= multer.diskStorage({destination: (req,file,cb)=>{
    cb(null, 'uploads/')
}, filename:(req,file,cb)=>{
    cb(null,file.originalname)
}});
const upload=multer({storage:storage}).single('file');
router.get('/', (req, res)=>{
    res.send(`hello message from router`);
    
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
            //console.log(userExist);
            if(userExist){
                return res.status(409).json({message:"User already existed"});
            }
            else{
                const user = new User(req.body);
               await user.save();
                    res.status(201).json({message:"Successfully Registered on database"});
            }
        }
    }
    catch{
                    res.status(500).json({message:"Failed to registered"});
                }
            });
            router.post('/api/login',async (req, res)=> {
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
                            //console.log(token);
                            res.cookie("jwttoken",token, {expires: new Date(Date.now() + 86400000), httpOnly:true});
                          res.status(202).json({message:"User suceessfully login" });
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
                     router.get('/api/home',authenticate, (req, res)=>{
                        console.log(`Hello this is my home`);
                         res.status(200).json(req.rootUser);
                     });
                     router.get('/api/about',authenticate, (req, res)=>
                     {
                        console.log(`Hello this is my about`);
                        
                     });
                     router.get('/api/profile',authenticate, (req, res)=>{
                       res.status(200).json(req.rootUser);
                     });
                     router.get('/logout', (req, res)=>
                     {
                        console.log("I am going to logout");
                     res.clearCookie('jwttoken');
                     return res.status(200).json({message:"Successfully Logout"});
                     });
                     router.post('/api/profile/file-upload',authenticate,upload,async(req, res)=>{
                    try{
                        if(req.body!==null)
                        {
                        //const fileinfo=req.file;
                        const fileName= req.body.fileName;
                        const myuser=req.rootUser;  
                        const updatedUser= await(User.findOneAndUpdate({_id:myuser._id},{$set:{'profile.avtar':fileName}},{new:true}));
                        await updatedUser.save(); 
                        res.status(200).json({message:`Profile avtar ${fileName} has been updated`});
                        }
                        else{
                            res.status(203).json({message:`There is no such file`});
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
                                res.status(202).json({message:"User profile has been successfully updated"});
                             });

            
export default router;