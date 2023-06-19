import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    const BASE_URL= process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const logoutStatus = async()=>{
        try{
        const res= await axios.get(`${BASE_URL}/logout`, {withCredentials:true});
            if(res.status===200)
            {
                navigate('/login');
            }
        }
        catch(err){
         console.log(err);
        }
    }
        useEffect(()=>{
            logoutStatus();
        }, []);

  return (
    <div>This is Logout</div>
  )
}

export default Logout;