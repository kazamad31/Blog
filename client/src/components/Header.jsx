import React from 'react'
import '../comp-css/Home.css';

const Header = (props) => {

  return (
    <div> 
      <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
    <div className="container">


        <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative"/></a> 

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
                    <a className="nav-link" href="/news">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" role="button" href="/#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">{props.info.name}</a>
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
</div>
  )
}

export default Header;