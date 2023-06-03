import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Jwt = () => {
    const navigate = useNavigate();
    const tokenCheck = async()=>{
        try{
        const res= await axios.post('/home', {withCredentials:true});
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
    <div>Jwt</div>
  )
}

export default Jwt;