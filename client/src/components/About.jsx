import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Header from './Header';
import axios from 'axios';


const About = () => {
  const [userData, setUserData]= useState({});
  const navigate = useNavigate();
  const ary = ['mango', 'apple', 'banana', 'orange'];
  const tokenCheck = async()=>{
      try{
      const res= await axios.get('/api/about', {withCredentials:true});
      setUserData(res.data);
      if(!res.status===200)
      {
          navigate("/login");
      }

      }   
  catch (err){
console.log(err);
navigate("/login");
  }
}
useEffect(() => {
tokenCheck();
}, []);
  return (
    <div>
    <Header info={userData}/> 
    <div>
    <h1>Hiii this is About</h1>
    <h2>{userData.name}</h2>
    <ul> { 
        ary.map((e)=> {return <li>{`This is my fruits ${e}`}</li>})
    } </ul>
   </div>
   </div>
  )
}

export default About;