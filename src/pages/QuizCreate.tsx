import React from 'react';
import { Container } from 'react-bootstrap';
import UserFormContainer from '../components/quiz/UserFormContainer';

import "../styles/quiz.css"

function QuizCreate() {
  return (
    <Container>
      <div className='quiz-intro' />
      <UserFormContainer/>
    </Container>
  );
}

export default QuizCreate;
