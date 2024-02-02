import React, { useState, useEffect } from 'react';
import "../../styles/components/question_preview.css"

function QuestionPreviews() {
    const sample_questions = 
    [
        "Go Bowling with Partner?",
        "Snuggle Together?",
        "Go to A Fancy Restaurant?",
        "Watch A Movie Together?",
        "Hookup on the Date?"
    ];

    const [current, setCurrent] = useState(0);

    const changeReview = (next: number) =>{

        let newCurrent = current + next;   
        if(newCurrent < 0){newCurrent = sample_questions.length-1;}
        else if(newCurrent === sample_questions.length){ newCurrent = 0;}

        setCurrent(newCurrent);
    }

    useEffect(() => {
        const moveForward = () =>{
            setCurrent(current => {
                if(current === sample_questions.length-1)
                {
                    return 0;
                }

                return current+1;
            });
        }

        const interval = setInterval(() => {moveForward()}, 4000);
        return () => clearInterval(interval);
    }, [sample_questions.length])

    return (
        <div className = "preview">
            <button className = "preview-next"
            onClick = {() => {changeReview(-1)}}
            ><i className="fas fa-chevron-left"></i></button>

            <div className = "preview-info-container">
                <div className = "preview-img-container">
                    <img src = "https://storage.googleapis.com/intima-bucket/Tinder.png" alt = "Tinder"/>
                    <img src = "https://storage.googleapis.com/intima-bucket/Bumble.png" alt = "Bumble"/>
                    <img src = "https://storage.googleapis.com/intima-bucket/Hinge_2.png" alt = "Hinge"/>
                </div>

                <div className = "preview-content">
                    <h1>Send the Quiz to Your Next Match On These Apps</h1>
                    <h2>{sample_questions[current]}</h2>
                </div>  
            </div>

            <button
            onClick = {() => {changeReview(1)}}
            className = "preview-next"><i className="fas fa-chevron-right"></i></button>
        </div>
    )
}


export default  QuestionPreviews;