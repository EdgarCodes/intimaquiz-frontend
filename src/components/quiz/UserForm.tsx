import React, { useEffect, useState } from 'react';
import "../../styles/components/user_form.css";
import { Container } from 'react-bootstrap';

function UserForm(props:any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");

  useEffect(() => {
    props.onUpdateData({name, email, gender});
  }, [name, email, gender]);


  return (
    <div className='user-form'>
        <div className='form-header'>{props.title}</div>
        <Container className='user-form-content'>

          <h1 className = "userform-textbox-title">Name</h1>
          <input
              type="text"
              placeholder="John Doe"
              className = "userform-textbox"
              aria-label = "Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              minLength= {4}
          />

          <h1 className = "userform-textbox-title">Email (Optional)</h1>
          <input
              type="email"
              placeholder="email@gmail.com"
              className = "userform-textbox"
              aria-label = "Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              minLength= {4}
          />
        </Container>

        <Container className='userform-btn-container'>             
          <button className = {gender==="male"? "userform-btn userform-btn-active": "userform-btn"} onClick={() => setGender("male")}><i className="fa fa-solid fa-mars userform-btn-icon"/>Male</button>               
          <button className = {gender==="female"? "userform-btn userform-btn-active": "userform-btn"}  onClick={() => setGender("female")}><i className="fa fa-solid fa-venus userform-btn-icon"/>Female</button>    
        </Container>
    </div>
  );
}

export default UserForm;