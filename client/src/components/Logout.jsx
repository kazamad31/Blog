import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    const navigate = useNavigate();
    const logoutStatus = async()=>{
        try{
        const res= await axios.get('/logout');
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