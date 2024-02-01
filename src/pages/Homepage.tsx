import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/homepage.css"

function Homepage() {
  return (
    <div className = "Homepage">
      <div className = "Landing">
          <div className = "Landing-info">
              <div className = "Landing-text">
                  <h1>Welcome To</h1>
                  <h2>IntimaQuiz</h2>
                  <p>Explore <i>Your</i>  Sexual Desires</p>
                  <div className = "Landing-Icons">
                      <i className="fab fa-twitter"></i>
                      <i className="fab fa-facebook-square" ></i>
                      <i className="fab fa-instagram"></i>
                  </div>
              </div>

              <div className = "Landing-About">
                  <h2><i className="fas fa-solid fa-wallet about-icon"></i> Always Free </h2>
                  <h2>|</h2>
                  <h2><i className="fas fa-solid fa-lock about-icon"></i> Secure </h2>
                  <h2>|</h2>
                  <h2><i className="fas fa-solid fa-heart about-icon"></i> Intimate </h2>
              </div>  
              
              <Link className = "Landing-button" to ="About">Take Quiz Now</Link>
          </div>            
      </div>
    </div>
  );
}

export default Homepage;
