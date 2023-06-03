import React from 'react';
import  '../comp-css/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
const navigate = useNavigate();
const notify=(message)=>toast(`${message}`);    
const [login ,signUp]= useState("containers");
const [user, setUser]= useState({
    name:"",
    email:"",
    password:""});
    const handleChange = (e)=>{
        const{name, value} = e.target
        console.log(e.target);
       setUser({...user,[name]:value});
       }
       const tokenCheck = async()=> {
        try{
        const res= await axios.get('/api/home', {withCredentials: true});
        if(res.status===200)
        {
            navigate("/home");
        }
    
        }   
    catch (err){
    console.log(err);
    navigate("/login");
    }
    }
       
       const signup=()=>{
        signUp("containers right-panel-active");  
        navigate("/register");
       }
       const signin=()=>{
        signUp("containers");  
        navigate("/login");
       }
       const registerData = async(e)=>{
        e.preventDefault();
        const res= await axios.post('/api/register', user);
        const resdataResponse =()=> notify(res.data.message);
        resdataResponse();
       }
       const loginData = async(e)=>{
        e.preventDefault();
        const res= await axios.post('/api/login', user);
        
         const loginResponse = ()=> notify(res.data.message);
         loginResponse();
         if(res.status===202)
         {
         navigate("/home");
         setTimeout(loginResponse, 1000);
         }
       }
       useEffect(()=>{
        tokenCheck();
       },[]);

return (
    <>
    <div id="bk">
    <div className={login} id="containers">
        <div className="form-container sign-up-container">
            <form className="frm" method="POST">
                <h1 className="hr">Create Account</h1>
                <div className="social-container">
                    <a href="https://www.facebook.com/" target="_blank"className="social" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.google.com/" target="_blank"className="social" rel="noopener noreferrer"><i className="fab fa-google-plus-g"></i></a>
                    <a href="https://in.linkedin.com/" target="_blank"className="social" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input className="inpt"type="text" autoComplete='off' required name='name' placeholder="Name" value={user.name} onChange={handleChange}/>
                <input className="inpt"type="email" autoComplete='off' required name='email' placeholder="Email" value={user.email} onChange={handleChange}/>
                <input className="inpt"type="password" autoComplete='off' required name='password' placeholder="Password" value={user.password} onChange={handleChange}/>
                <button type="submit" onClick={registerData}>Sign Up </button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form className="frm" method="POST">
                <h1 className="hr">Sign in</h1>
                <div className="social-container">
                    <a href="https://www.facebook.com/" target="_blank"className="social" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.google.com/" target="_blank"className="social" rel="noopener noreferrer"><i className="fab fa-google-plus-g"></i></a>
                    <a href="https://in.linkedin.com/" target="_blank"className="social" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input className="inpt" type="email" autoComplete='off' required name='email' placeholder="Email" value={user.email} onChange={handleChange} />
                <input className="inpt" type="password" autoComplete='off' required name='password' placeholder="Password" value={user.password} onChange={handleChange} />
                <a className="social" href="/#">Forgot your password?</a>
                <button type="submit" onClick={loginData}>Sign In</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1 className="hr">Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="ghost" id="signIn" onClick={signin}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1 className="hr">Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button className="ghost" id="signUp" onClick={signup}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    
    <footer className="ft">
        <p>
            Created with <i className="fa fa-heart"></i> by
            <a className="social" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/manishd31"> Manish Kumar</a>
        </p>
    </footer>
    <ToastContainer />
    </div>
    </>
  )
}

export default Login;