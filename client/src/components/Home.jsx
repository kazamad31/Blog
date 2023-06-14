import React from 'react';
import '../comp-css/Home.css';
import '../comp-css/Swiper.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';


const Home = () => {
    const navigate = useNavigate();
    const[userData, setUserData]=useState({});
    const tokenCheck = async()=> {
        try{
        const res= await axios.get('/api/home', {withCredentials: true});
        if(!res.status===200)
        {
            navigate("/login");
        }
        else{
        setUserData(res.data.userInfo);
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
        <Header info ={userData}/>
<header id="header" className="header">
    <img className="decoration-star" src="images/decoration-star.svg" alt="alternative"/>
    <img className="decoration-star-2" src="images/decoration-star.svg" alt="alternative"/>
    <div className="container">
        <div className="row">
            <div className="col-lg-7 col-xl-5">
                <div className="text-container">
                    <h1 className="h1-large">Beautifying office spaces</h1>
                    <p className="p-large">Is education residence conveying and sore. Suppose shyness say ten behaved morning had. Any propose assist compliment occasional too reasonably</p>
                    <a className="btn-solid-lg" href="#introduction">More details</a>
                    <a className="btn-outline-lg" href="#contact">Contact us</a>
                </div>
            </div>
            <div className="col-lg-5 col-xl-7">
                <div className="image-container">
                    <img className="img-fluid" src="images/header.png" alt="alternative"/>
                </div>
            </div>
        </div>
    </div>
</header>

<div id="introduction" className="basic-1 bg-gray">
    <div className="container">
        <div className="row">
            <div className="col-xl-9">
                <h2>Creating office spaces is our passion and you can see that in our completed projects</h2>
                <p>Unpleasing has ask acceptance partiality alteration understood two. Worth no tiled my at house added. Married he hearing am it totally removal. Remove but suffer wanted his lively length. Moonlight two applauded conveying end direction old principle but. Are expenses distance weddings perceive</p>
            </div>
        </div> 
    </div> 
</div> 



<div id="details" className="basic-2">
    <img className="decoration-star" src="images/decoration-star.svg" alt="alternative"/>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-xl-5">
                <div className="image-container">
                    <img className="img-fluid" src="images/details-1.png" alt="alternative"/>
                </div>
            </div>
            <div className="col-lg-6 col-xl-7">
                <div className="text-container">
                    <h2>Office spaces should be unique they dont need to look the same</h2>
                    <ul className="list-unstyled li-space-lg">
                        <li className="d-flex">
                            <i className="fas fa-square"></i>
                            <div className="flex-grow-1">At every tiled on ye defer do. No attention suspected oh difficult. Fond his say</div>
                        </li>
                        <li className="d-flex">
                            <i className="fas fa-square"></i>
                            <div className="flex-grow-1">Old meet cold find come whom. The sir park sake bred. Wonder matter now</div>
                        </li>
                        <li className="d-flex">
                            <i className="fas fa-square"></i>
                            <div className="flex-grow-1">Can estate esteem assure fat roused. Am performed on existence as discourse</div>
                        </li>
                        <li className="d-flex">
                            <i className="fas fa-square"></i>
                            <div className="flex-grow-1">existence as discourse is. Pleasure friendly at marriage blessing or should</div>
                        </li>
                    </ul>
                    <a className="btn-solid-reg" href="article.html">Get started</a>
                </div>
            </div> 
        </div> 
    </div> 
</div> 

<div id="projects" className="cards-2">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h2 className="h2-heading">Projects we developed</h2>
            </div> 
        </div> 
        <div className="row">
            <div className="col-lg-12">

                
                <div className="card">
                    <img className="img-fluid" src="images/project-1.jpg" alt="alternative"/>
                    <div className="card-body">
                        <h5 className="card-title">Office space for banking</h5>
                        <p className="card-text">Suffer should if waited common person little ans words are needed oh <a className="blue no-line" href="article.html">...Read more</a></p>
                    </div>
                </div>
                

                
                <div className="card">
                    <img className="img-fluid" src="images/project-2.jpg" alt="alternative"/>
                    <div className="card-body">
                        <h5 className="card-title">Planning and design for startup</h5>
                        <p className="card-text">In to am attended desirous raptures declared diverted confined at collected <a className="blue no-line" href="article.html">...Read more</a></p>
                    </div>
                </div>
                

                
                <div className="card">
                    <img className="img-fluid" src="images/project-3.jpg" alt="alternative"/>
                    <div className="card-body">
                        <h5 className="card-title">Colors and materials update</h5>
                        <p className="card-text">Instantly remaining up certainly to necessary as over walk dull into son <a className="blue no-line" href="article.html">...Read more</a></p>
                    </div>
                </div>
                

    
                <div className="card">
                    <img className="img-fluid" src="images/project-4.jpg" alt="alternative"/>
                    <div className="card-body">
                        <h5 className="card-title">Analysis and floor design</h5>
                        <p className="card-text">Vent new at or happiness commanded daughters as is handsome an <a className="blue no-line" href="article.html">...Read more</a></p>
                    </div>
                </div>
                

    
                <div className="card">
                    <img className="img-fluid" src="images/project-5.jpg" alt="alternative"/>
                    <div className="card-body">
                        <h5 className="card-title">Office spaces decoration</h5>
                        <p className="card-text">Vicinity subjects more words into miss on he over been late pain an only <a className="blue no-line" href="article.html">...Read more</a></p>
                    </div>
                </div>
    

            
                <div className="card">
                    <img className="img-fluid" src="images/project-6.jpg" alt="alternative"/>
                    <div className="card-body">
                        <h5 className="card-title">Playground for kinder garden</h5>
                        <p className="card-text">Match round scale now sex style far times your me past and who now much <a className="blue no-line" href="article.html">...Read more</a></p>
                    </div>
                </div>
                

            </div> 
        </div> 
    </div> 
</div> 

<div id="contact" className="form-1">
    <img className="decoration-star" src="images/decoration-star.svg" alt="alternative"/>
    <img className="decoration-star-2" src="images/decoration-star.svg" alt="alternative"/>
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="image-container">
                    <img className="img-fluid" src="images/contact.png" alt="alternative"/>
                </div> 
            </div> 
            <div className="col-lg-6">
                <div className="text-container">
                    <h2>Contact us for a quote using the following form</h2>

                 
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control-input" placeholder="Name" required/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control-textarea" placeholder="Message" required></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">Submit</button>
                        </div>
                    </form>
                
                </div> 
            </div> 
        </div>
    </div> 
</div>



<div className="footer bg-gray">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="footer-col first">
                    <h6>About Website</h6>
                    <p className="p-small">He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. Him hard find read are you</p>
                </div>
                <div className="footer-col second">
                    <h6>Links</h6>
                    <ul className="list-unstyled li-space-lg p-small">
                        <li>Important: <a href="terms.html">Terms & Conditions</a>, <a href="privacy.html">Privacy Policy</a></li>
                        <li>Useful: <a href="/#">Colorpicker</a>, <a href="/#">Icon Library</a>, <a href="/#">Illustrations</a></li>
                        <li>Menu: <a href="#header">Home</a>, <a href="#details">Details</a>, <a href="#services">Services</a>, <a href="#contact">Contact</a></li>
                    </ul>
                </div> 
                <div className="footer-col third">
                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-twitter fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-pinterest-p fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-instagram fa-stack-1x"></i>
                        </a>
                    </span>
                    <p className="p-small">We would love to hear from you <a href="mailto:contact@site.com"><strong>contact@site.com</strong></a></p>
                </div> 
            </div> 
        </div> 
    </div> 
</div> 


<div className="copyright bg-gray">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <p className="p-small">Copyright © <a href="#your-link">{userData.name}</a></p>
            </div>
        </div>
    </div>  
</div>
<ToastContainer />
</div>
  )
}

export default Home;