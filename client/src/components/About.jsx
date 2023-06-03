import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


const About = () => {
  const navigate = useNavigate();
  const ary = ['mango', 'apple', 'banana', 'orange'];
  const tokenCheck = async()=>{
      try{
      const res= await axios.get('/api/about', {withCredentials:true});
      console.log(res.data);
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
    <h1>Hiii this is About</h1>
    <ul> { 
        ary.map((e)=> {return <li>{`This is my fruits ${e}`}</li>})
    } </ul>
    

    </div>
  )
}

export default About