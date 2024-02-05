import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import "../styles/homepage.css"
import Paragraph from '../components/Paragraph';
import QuestionPreviews from '../components/single-use/QuestionPreview';
import Informational from '../components/Informational';
import SessionForm from '../components/SessionForm';

function Homepage() {
  return (
    <div className = "Homepage">
      
      <Helmet>
        <title>IntimaQuiz | Homepage</title>
      </Helmet>


      <div className = "Landing">
          <div className = "Landing-info">
              <div className = "Landing-text">
                  <h1>Welcome To</h1>
                  <h2>IntimaQuiz</h2>
                  <p>Explore <i>Your</i>  Intimate Desires</p>
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
              
              <Link className = "Landing-button" to ="/quiz-create">Take Quiz Now</Link>
          </div>            
      </div>


      <div className='info-container'>
        <Paragraph title="What Is IntimaQuiz?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>

        <Informational title="How Does it Work?">
            <div className='informational-list-item'>
              <h2>1. Start the Quiz</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>

            <div className='informational-list-item'>
              <h2>2. Take Quizzes Seperately</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>

            <div className='informational-list-item'>
              <h2>2. Share Common Results</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
        </Informational>
      </div>
      

      <QuestionPreviews/>

      <div className='info-container'>
        <Paragraph title="Available Quizzes">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>

        <Informational title="Have a Code?" optional_class="fit">
          <SessionForm/>
        </Informational>
      </div>



    </div>
    

    // What is Intima quiz
    // How does it work 
    // Safe quiz vs nsfw quiz spicy
    // Join with ID. (This should be a form ) maybe on the right of intima quiz what is
    // Available questions
    // QandA
    // Footer
  );
}

export default Homepage;
