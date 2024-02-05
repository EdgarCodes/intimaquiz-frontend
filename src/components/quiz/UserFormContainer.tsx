import React, { useState } from 'react';
import UserForm from './UserForm';
import { Container } from 'react-bootstrap';
import { SendUserData } from '../../utils/QuizUtils';
import "../../styles/components/user_form.css";
import { useNavigate } from 'react-router-dom';

function UserFormContainer() {
  const [partner_1, setPartner_1] = useState();
  const [partner_2, setPartner_2] = useState();
  const [quiz_type, setQuizType] = useState("F"); // FirstDate - F, M - Moderate, S - Spicy
  const [quiz_length, setQuizLength] = useState("Q");// Q - Quick , M- Moderate, L - Long

  const navigate = useNavigate();

  const submitUserData = async () => {
    // TODO do validations

    // Send data to the backend. 
    const response = await SendUserData(partner_1, partner_2);

    if('error' in response) {
      console.log("issue: " + response);
    }
    else {
      // move to quiz with link. 
      navigate("/quiz/" + response["session_1"])
    }

    console.log(partner_1);
    console.log(partner_2);

    // Use code to create link to /quiz/uuid
  }

  return (
    <div className="user-form-container">
      <div className="user-forms">
        <UserForm title="Enter Your Information" onUpdateData={setPartner_1}/>
        <UserForm title="Enter Your Partners Information" onUpdateData={setPartner_2}/>
      </div>

      <div className="options-form">
        <div className='form-header'>Quiz Options</div>
        <Container className = "optionsform-container">

          <h1 className = "userform-textbox-title">Choose Quiz Type: </h1>
          <div className = "optionsform-btn-container">
            <button className = {quiz_type==="F"? "optionsform-btn optionsform-btn-active": "optionsform-btn"} onClick={() => setQuizType("F")}><i className="fa fa-solid fa-comments userform-btn-icon"/>First Date Quiz</button>        
            <button className = {quiz_type==="M"? "optionsform-btn optionsform-btn-active": "optionsform-btn"} onClick={() => setQuizType("M")}><i className="fa fa-solid fa-heart userform-btn-icon"/>Moderate (SFW)</button>        
            <button className = {quiz_type==="S"? "optionsform-btn optionsform-btn-active": "optionsform-btn"} onClick={() => setQuizType("S")}><i className="fa fa-solid fa-fire userform-btn-icon"/>Spicy (NSFW)</button>      
          </div>

          <h1 className = "userform-textbox-title">Quiz Length: </h1>
          <div className = "optionsform-btn-container">
            <button className = {quiz_length==="Q"? "optionsform-btn optionsform-btn-active": "optionsform-btn"} onClick={() => setQuizLength("Q")}><i className="fa fa-solid fa-stopwatch userform-btn-icon"/>Quick</button>        
            <button className = {quiz_length==="M"? "optionsform-btn optionsform-btn-active": "optionsform-btn"} onClick={() => setQuizLength("M")}><i className="fa fa-solid fa-water userform-btn-icon"/>Moderate</button>        
            <button className = {quiz_length==="L"? "optionsform-btn optionsform-btn-active": "optionsform-btn"} onClick={() => setQuizLength("L")}><i className="fa fa-solid fa-hourglass userform-btn-icon"/>In-depth (Long)</button>      
          </div>
        </Container>
        <div className="optionsform-footer">
          <button className='optionsform-footer-btn' onClick={submitUserData}>Start Quiz</button>  
          <div className='optionsform-footer-text'>* By starting the quiz you agree that you are over 18 years old and you understand our terms and agreements.</div>
          <div className='optionsform-footer-text'>* We will never sell your data. Everything is stored anonymously only used for statistics.</div>
        </div>
      </div>  
    </div>
  );
}

export default UserFormContainer;