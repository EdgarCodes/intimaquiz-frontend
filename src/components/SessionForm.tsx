import React, { useRef, useState } from 'react'
import "../styles/components/sessionform.css"
import UseFormState from "../Hooks/UseFormState";

function SessionForm(props: any) {
    const [name, handleNameChange, resetName] = UseFormState("");
    const [warning, setWarning] = useState("");
    const warningText = useRef<HTMLDivElement>(null);

    return (
        <div className='sessionform'>
            <h1>Enter Code Below.</h1>
            <p>You can code to view old results!</p>

            <div className='sessionform-input'>
                <input
                    type="text"
                    value={name}
                    placeholder="Session Code"
                    className = "sessionform-textbox"
                    aria-label = "Session Code"
                    onChange={handleNameChange}
                    minLength= {4}
                    />

                
                <button className = "sessionform-btn">Submit</button>    
            </div>

            <div style = {{paddingBottom: "1rem"}} ref = {warningText}>{warning}</div>
        </div>
    )
}

export default SessionForm;