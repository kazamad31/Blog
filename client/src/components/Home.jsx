import React from 'react';
import '../comp-css/Home.css';
import '../comp-css/Swiper.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Home = () => {
    const navigate = useNavigate();
    const[userData, setUserData]=useState({});
    const tokenCheck = async()=> {
        try{
        const res= await axios.get('/api/home', {withCredentials: true});
        //console.log(res.data);
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
      <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
    <div className="container">


        <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative"/></a> 

       
       {/*<a className="navbar-brand logo-text" href="index.html">Yavin</a>*/}

        <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ms-auto navbar-nav-scroll">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#details">Details</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" role="button" href="/#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">{userData.name}</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown01">
                        <li><a className="dropdown-item" href="/profile">Profile</a></li>
                        <li><div className="dropdown-divider"></div></li>
                        <li><a className="dropdown-item" href="terms.html">Help & Support</a></li>
                        <li><div className="dropdown-divider"></div></li>
                        <li><a className="dropdown-item"  href="/logout">Logout</a></li>
                    </ul>
                </li>
            </ul>
            <span className="nav-item">
                <a className="btn-outline-sm" href="#contact">Contact us</a>
            </span>
        </div>
    </div>
</nav>


  

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


{/*<div className="counter">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                
            
                <div className="counter-container">
                    <div className="counter-cell">
                        <div data-purecounter-start="0" data-purecounter-end="231" data-purecounter-duration="3" className="purecounter">1</div>
                        <div className="counter-info">Happy Customers</div>
                    </div>
                    <div className="counter-cell">
                        <div data-purecounter-start="0" data-purecounter-end="385" data-purecounter-duration="1.5" className="purecounter">1</div>
                        <div className="counter-info">Issues Solved</div>
                    </div>
                    <div className="counter-cell">
                        <div data-purecounter-start="0" data-purecounter-end="159" data-purecounter-duration="3" className="purecounter">1</div>
                        <div className="counter-info">Good Reviews</div>
                    </div>
                    <div className="counter-cell">
                        <div data-purecounter-start="0" data-purecounter-end="128" data-purecounter-duration="3" className="purecounter">1</div>
                        <div className="counter-info">Case Studies</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  </div>*/}


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

<div id="services" className="cards-1 bg-gray">
    <div className="container">
        <div className="row">
            <div className="col-lg-5">
                <div className="text-container">
                    <h2>Services that we offer</h2>
                    <p>Greatly hearted has who believe. Drift allow green son walls years for blush. Sir margaret drawings repeated recurred exercise laughing may you</p>
                    <p>Do repeated whatever to welcomed absolute no. Fat surprise although more words outlived</p>
                    <ul className="list-unstyled li-space-lg">
                        <li className="d-flex">
                            <i className="fas fa-square"></i>
                            <div className="flex-grow-1">And informed shy dissuade property. Musical by</div>
                        </li>
                        <li className="d-flex">
                            <i className="fas fa-square"></i>
                            <div className="flex-grow-1">He drawing savings an. No we stand avoid</div>
                        </li>
                        <li className="d-flex">
                            <i className="fas fa-square"></i>
                            <div className="flex-grow-1">Announcing of invita mrore wo tion principle</div>
                        </li>
                    </ul>
                </div>
            </div> 
            <div className="col-lg-7">
                <div className="card-container">

                
                    <div className="card">
                        <div className="card-icon">
                            <span className="fas fa-rocket"></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Space analysis and planning</h5>
                        </div>
                    </div>

                    
                    <div className="card">
                        <div className="card-icon">
                            <span className="far fa-clock"></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Design and color choosing</h5>
                        </div>
                    </div>
                   

                    
                    <div className="card">
                        <div className="card-icon">
                            <span className="far fa-comments"></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Materials and delivery</h5>
                        </div>
                    </div>
                    

                    
                    <div className="card">
                        <div className="card-icon">
                            <span className="fas fa-tools"></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Execute the concept</h5>
                        </div>
                    </div>
                    

                    
                    <div className="card">
                        <div className="card-icon">
                            <span className="fas fa-chart-pie"></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Creating great atmosphere</h5>
                        </div>
                    </div>
                   

                   
                    <div className="card">
                        <div className="card-icon">
                            <span className="far fa-chart-bar"></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Evaluation and reporting</h5>
                        </div>
                    </div>
                    

                </div> 
            </div> 
        </div> 
    </div> 
</div> 




<div className="basic-3">
    <img className="decoration-star" src="images/decoration-star.svg" alt="alternative"/>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-xl-7">
                <div className="text-container">
                    <h2>A beautiful and well organized office space increases productivity</h2>
                    <p>On it differed repeated wandered required in. Then girl neat why yet knew rose spot. Moreover property we he kindness greatest be oh striking laughter. In me he at collecting affronting principles apartments. Has visitor law attacks pretend you calling own excited painted. Contented attending</p>
                    <a className="btn-solid-reg" href="article.html">Get started</a>
                </div> 
            </div> 
            <div className="col-lg-6 col-xl-5">
                <div className="image-container">
                    <img className="img-fluid" src="images/details-2.png" alt="alternative"/>
                </div> 
            </div> 
        </div> 
    </div> 
</div> 




<div className="basic-4 bg-gray">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h4>Our team of highly skilled designers and interior construction workers can deliver above your level of expections</h4>
                <a className="btn-solid-lg" href="#contact">Get quote</a>
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




<div className="slider-1 bg-gray">
    <img className="quotes-decoration" src="images/quotes.svg" alt="alternative"/>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">

            
                <div className="slider-container">
                    <div className="swiper-container card-slider">
                        <div className="swiper-wrapper">
                            

                            <div className="swiper-slide">
                                <img className="testimonial-image" src="images/testimonial-1.jpg" alt="alternative"/>
                                <p className="testimonial-text">“Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it how about some words here done”</p>
                                <div className="testimonial-author">Marlene Visconte</div>
                                <div className="testimonial-position">General Manager - Scouter</div>
                            </div>
    
                            <div className="swiper-slide">
                                <img className="testimonial-image" src="images/testimonial-2.jpg" alt="alternative"/>
                                <p className="testimonial-text">“Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it how about some words here done”</p>
                                <div className="testimonial-author">John Spiker</div>
                                <div className="testimonial-position">Team Leader - Vanquish</div>
                            </div>
                            
    
                           
                            <div className="swiper-slide">
                                <img className="testimonial-image" src="images/testimonial-3.jpg" alt="alternative"/>
                                <p className="testimonial-text">“Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it how about some words here done”</p>
                                <div className="testimonial-author">Stella Virtuoso</div>
                                <div className="testimonial-position">Design Chief - Bikegirl</div>
                            </div>
                            
    
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                        
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
                <p className="p-small">Copyright © <a href="#your-link">Your name</a></p>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12">
                <p className="p-small">Distributed By <a href="https://themewagon.com/">Themewagon</a></p>
            </div>
       
        </div>
    </div>  
</div>
<ToastContainer />
</div>
  )
}

export default Home;