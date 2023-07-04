import React from 'react';
import '../comp-css/Profile.css';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Profile = () => {
  const BASE_URL= process.env.REACT_APP_API_URL;
  const[userData, setUserData]=useState({});
  const[updatedUser, setupdatedUser]=useState({});
  const[files, setFiles]=useState(null);
  const navigate=useNavigate();
  const notify=(message)=>toast(`${message}`);
  const handleChange=(e)=>{
    const {name, value} = e.target
    setupdatedUser(userData);
    setupdatedUser({...updatedUser,profile:{...updatedUser.profile,[name]:value}});
  }
  
  const tokenCheck = async()=> {
    try{
    const res= await axios.get(`${BASE_URL}/api/profile`, {withCredentials: true});
    if(res.status===200)
    {
      localStorage.setItem('mypro',JSON.stringify(res.data.userInfo));
      const myLocalStorage = JSON.parse(localStorage.getItem('mypro'));
    setUserData(myLocalStorage);
    }
    else{
    navigate("/login");
    }
    }   
catch (err){
console.log(err);
navigate("/login");
}
}
  const myFile = (e)=>{
   setFiles(e.target.files[0]);
  };
  const fileUpload= async(e)=>{
    e.preventDefault();
    try{
  const image= files.name.substring(files.name.lastIndexOf('.')+1).toLowerCase();
  
  if (image==='jpg' || image==='png' || image==='jpeg'){
    
  const formData =new FormData();
  formData.append("file", files);
  formData.append("fileName", files.name);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
    withCredentials: true
  };
  const sendFile= await axios.post(`${BASE_URL}/api/profile/file-upload`, formData, config);
  const myData = await sendFile.data;
  (()=> notify(myData.message))();
  if (sendFile.status===200){
    localStorage.setItem('mypro',JSON.stringify(myData.userInfo));
    const myLocalStorage = JSON.parse(localStorage.getItem('mypro'));
   setUserData(myLocalStorage);
  }
  }
  else {
    (()=>notify("Please select valid file type"))();
  }
  
 }
 catch(error)
 {
  console.log(error);
 }
}
const dp= userData?.profile?.avtar;
const img= (dp!==undefined)? `${BASE_URL}/${userData?.profile?.avtar}` : `${BASE_URL}/profile_pic.jpg`;

const proUpdate =async()=>{
  if (!(updatedUser?.profile?.profession) && !(updatedUser?.profile?.phone) && !(updatedUser?.profile?.address)){
    notify("Please fill the details first");
  }
  else{
    const res = await axios.post(`${BASE_URL}/api/profile/profile-update`, updatedUser, {withCredentials:true});
    const updatedData =await res.data;
    notify(updatedData.message);
    if(res.status===200){
      localStorage.setItem('mypro',JSON.stringify(updatedData.userInfo));
    const myLocalStorage = JSON.parse(localStorage.getItem('mypro'));
      setUserData(myLocalStorage);
    }
  }
  
  
}

useEffect(() => {
tokenCheck();
}, []);
  return (
    <div className="mybody">
      <Header info={userData}/> 
      <div>
        <div className="container">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img src= {img} alt="Admin" className="rounded-circle" width={150} />
                      <div className="mt-3">
                      <div className="file-upload">
                       <label htmlFor="file"> <i className="fa fa-camera upload-button"></i></label>
                      <input type="file" id ="file" className="avtar" name="avtar" onChange={myFile} accept="image/png image/jpeg"/>
                      <button type="submit" className="pro-button" onClick={fileUpload}>Update</button> 
                      </div>
                        <h4>{userData?.name}</h4>
                        <p className="text-secondary mb-1">{userData?.profile?.profession}</p>
                        <p className="text-muted font-size-sm">{userData?.profile?.address}</p>
                        <button className="btn btn-primary">Follow</button>
                        <button className="btn btn-outline-primary">Message</button>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>Website</h6>
                      <span className="text-secondary">https://bootdey.com</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>Github</h6>
                      <span className="text-secondary">bootdey</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>Twitter</h6>
                      <span className="text-secondary">@bootdey</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>Facebook</h6>
                      <span className="text-secondary">bootdey</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                      <label htmlFor="fname">Name</label>
                      </div>
                      <div className="col-sm-9 text-secondary">
                      <input type="text" id="fname" name="fname" readOnly defaultValue={userData?.name} onChange={handleChange}/>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                      <label htmlFor="email">Email</label>
                      </div>
                      <div className="col-sm-9 text-secondary">
                      <input type="email" id="email" name="email" readOnly defaultValue={userData?.email} />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <label htmlFor="profession">Profession</label>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input type ="text" id="profession" name="profession" required defaultValue={userData?.profile?.profession} onChange={handleChange}/>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <label htmlFor="mob">Mobile</label>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input type="tel" id="phone" name="phone" required defaultValue={userData?.profile?.phone}  onChange={handleChange}/>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                       <label htmlFor="address">Address</label>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input type="text" id="address" name="address" required defaultValue={userData?.profile?.address} onChange={handleChange}/>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div style={{display:'flex', justifyContent:'center'}} className="col-sm-12">
                        <button type="submit" onClick={proUpdate}>Update</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutters-sm">
                  <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                        <small>Web Design</small>
                        <div className="progress mb-3" style={{height: '5px'}}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <small>Website Markup</small>
                        <div className="progress mb-3" style={{height: '5px'}}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <small>One Page</small>
                        <div className="progress mb-3" style={{height: '5px'}}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <small>Mobile Template</small>
                        <div className="progress mb-3" style={{height: '5px'}}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <small>Backend API</small>
                        <div className="progress mb-3" style={{height: '5px'}}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                        <small>Web Design</small>
                        <div className="progress mb-3" style={{height: '5px'}}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <small>Website Markup</small>
                        <div className="progress mb-3" style={{height: '5px'}}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <small>One Page</small>
                        <div className="progress mb-3" style={{height: '5px'}}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <small>Mobile Template</small>
                        <div className="progress mb-3" style={{height: '5px'}}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <small>Backend API</small>
                        <div className="progress mb-3" style={{height: '5px'}}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <ToastContainer/>
      
      </div>
  )
}

export default Profile;