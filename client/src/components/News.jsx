import React from 'react'
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import axios from 'axios';
import Header from './Header';
import Image from '../Image/metaverse6.jpg';

const News = () => {
const BASE_URL= process.env.REACT_APP_API_URL;
const[userData, setUserData]=useState({});
const [posts,setPost]= useState([]);
const [search, setSearch]= useState({squery:"india"});
const navigate = useNavigate();
const notify=(message)=>toast(`${message}`); 
const tokenCheck = async()=> {
  try{
  const res= await axios.get(`${BASE_URL}/api/token_check`, {withCredentials: true});
  if(res.status===200)
  {
  setUserData(res.data.userInfo);
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

    const onChangeHandler=(e)=>{
    e.preventDefault();
    setSearch({...posts, squery:`${e.target.value}`});
    }
    const fetchApi =async()=>{
        try{   
          console.log(search.squery);  
    const res = await axios.post(`${BASE_URL}/api/news`,search, {withCredentials:true});
    if(res.status!== 200){
        notify(res.data.message);
    }
    else{
    const newsData = res.data.query;
    const filterNews= newsData.map((val, ind)=>{
      if(val.image!== undefined){
        return val;
      }
          else{
          return {...val, image:{contentUrl:"https://www.printasia.in/media/catalog/product/c/-/c-p-6_news_paper_howker_.jpg"}};
         }
      });
    setPost(filterNews);
    }
     }
   catch(error){
   console.log(error);

     }
         }

          
      
    useEffect(()=>{
       tokenCheck();
       },[]); 
      
    return (
      <div>
        <Header info={userData}/>
    <div style={{ position: 'relative', top: '100px', left: '50%', transform: 'translate(-50%,-50%)', background: '#2f3640', color: '#e84118', height: '45px', borderRadius: '40px', padding: '10px',margin:'20px',width:'300px',display:'flex',justifyContent:'center',alignItems:'center' }} className="inputData">
      <input type="search" style={{ border: 'none', outline: 'none', float: 'left', background: 'none', padding: '0', color: 'white', fontSize: '16px', transition: '0.4s', width: '240px' }} placeholder=" Type the news keyword" className="inputField" onChange={onChangeHandler} />
      <a href="#" style={{ color: '#e84118', float: 'right', width: '40px', height: '40px', textAlign: 'center', borderRadius: '50%', background: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', bottom: '0',left:'22px' }} className="searchButton" onClick={fetchApi} value="Submit" />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  
    {posts.length!==12 ? <p style={{position:'relative',fontSize:'20px', display:'flex',justifyContent:'center',alignItems:'center',top:'140px'}}>Invalid keyword!</p> : (<div style={{position:'relative', top:'140px'}}>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              {
                posts.map((val, ind) => {
                  return <Card key={ind} imgsrc={(val.image)!=="undefined"? val.image.contentUrl : Image} title={val.name} description={val.description} url={val.url} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>)}
    <ToastContainer/>
  </div>
    )
  };
  
  export default News;