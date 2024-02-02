import { NavLink as Link } from "react-router-dom";
import "../styles/components/navbar.css"
import { useRef, useState } from "react";

function Navbar() {
    const [isOffScreen, setIsOffScreen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () =>{
        if(isOpen != null){setIsOpen(!isOpen);}
        else{setIsOpen(true)}
    }

    const getIsOpen = () =>{
        if(isOpen === null)
        {
            return "close";
        }
        else if(isOpen === true)
        {
            return "nav-sidebar";
        }

        return "nav-sidebar close";
    }

    window.onscroll = () =>{
      if(document.body.scrollTop > 95 || document.documentElement.scrollTop > 95)
      {
          setIsOffScreen(true);
      }
      else
      {
          setIsOffScreen(false);
      }
      
    };

    return (
        <div className= {isOffScreen? "navbar-container scroll":"navbar-container"}>
            <div className="navbar-links">
                <Link to="/" className={({ isActive }) => (isActive? 'active':'')}><div>Home</div></Link>

                <Link to="/quiz" className={({ isActive }) => (isActive? 'active':'')}><div>Take Quiz</div></Link>

                <Link to="/reviews" className={({ isActive }) => (isActive? 'active':'')}><div>Reviews</div></Link>
            </div>
            
            <div className="navbar-logo-container">
                <Link to="/">
                    <div className="navbar-logo">
                        <img alt="logo" src="https://storage.googleapis.com/intima-bucket/logo_4.png" />
                    </div>
                </Link>
            </div>

            <div className="navbar-links">
                <Link to="/about" className={({ isActive }) => (isActive? 'active':'')}><div>About Us</div></Link>
                
                <Link to="/stats" className={({ isActive }) => (isActive? 'active':'')}><div>Statistics</div></Link>

                <Link to="/contact" className={({ isActive }) => (isActive? 'active':'')}><div>Contact Us</div></Link>
            </div>


            

            {/* For smaller screens */}

            <button className = "navbar-drop-down" onClick={toggleIsOpen}>
                <i className="fas fa-bars"/>
            </button>

            <div className = {getIsOpen()}>

                <Link to ="/"  onClick = {() => {setIsOpen(false)}}>Home <div className = "underline"/></Link>

                <Link to ="/quiz" onClick = {() => {setIsOpen(false)}}>Take Quiz<div className = "underline"/></Link>


                <Link to ="/stats" onClick = {() => {setIsOpen(false)}}>Statistics<div className = "underline"/></Link>
                
                <Link to ="/about" onClick = {() => {setIsOpen(false)}}>About Us<div className = "underline"/></Link>

            </div>
        </div>
      );
}


export default Navbar;