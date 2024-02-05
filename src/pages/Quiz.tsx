import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';


import "../styles/quiz.css"
import { useParams } from 'react-router-dom';
import { getSessionData, getSessionQuestions } from '../utils/QuizUtils';

// Request session data
// Request questions for specific categories

function Quiz() {
    const { session_id } = useParams();
    const [is_loading, setIsLoading] = useState(true);
    const [current_session_info, setCurrentSessionInfo] = useState();
    const [partner_session_info, setPartnerSessionInfo] = useState();
    const [session_group_id, setSessionGroupID] = useState("");

    const [questions, setQuestions] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await getSessionData(session_id);
                
                if("error" in res) { 
                    console.log("Error occurred: " + res)
                    return;
                }

                const partner_session = res["session_group"]["sessions"][0]
                const current_session:any = {"name": res["name"], "gender": res["gender"], has_finished: res["has_finished"]}
                const ses_group_id = res["session_group_id"]
                setPartnerSessionInfo(partner_session);
                setCurrentSessionInfo(current_session);
                setSessionGroupID(ses_group_id);   

                const new_questions = await getSessionQuestions(session_id,"anal");
                
                if("error" in new_questions) { 
                    console.log("Error occurred: " + res)
                    return;
                }
                
                console.log(current_session)
                console.log(partner_session)
                setQuestions(new_questions);
                setIsLoading(false);
                

            }
            catch(error) {

            }
        }
        // Get questions

        // set questions

        console.log(session_id)
        fetchData();
    }, []);

    if(is_loading) {
        return <div>Loading</div>
    }


  return (
    <Container>
        <div className='quiz-intro' />
        <div>{current_session_info!["name"]}</div>
        <div>{partner_session_info!["name"]}</div>
        <div>{session_group_id}</div>
        <div>
            {questions.map(question => {
                return (<div key={question["question_id"]}>{question["question"]}</div>)
            })}

        </div>
    </Container>

  );
}

export default Quiz;
