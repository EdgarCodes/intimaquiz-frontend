import React, { useState, useRef } from 'react';
import UseFormState from "../Hooks/UseFormState";
import "../styles/components/footer.css"

//If form doesnt work then remove the html in index and delete encode and fetch
const encode = (data:any) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}


function ContactForm() {
    const [name, handleNameChange, resetName] = UseFormState("");
    const [email, handleEmailChange, resetEmail] = UseFormState("");
    const [message, handleMessageChange, resetMessage] = UseFormState("");
    const [warning, setWarning] = useState("");

    const warningText = useRef<HTMLDivElement>(null);

    const handleSubmit = (e:any) =>{
        e.preventDefault();
        console.log(name, email, message);

        if((name === "" || email === "" || message === ""))
        {
            
            warningText.current!.style.color = "red";
            setWarning("Please Enter All Fields")
            return;
        }

        if(!isNaN(name))
        {
            warningText.current!.style.color = "red";
            setWarning("Please enter a valid name");
            return;
        }

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message })
          })
        .then(() => {
            setWarning("Thank you for your submission!");
            warningText.current!.style.color = "white";
        })
        .catch(error => alert(error));

        resetName();
        resetMessage();
        resetEmail();
        setWarning("");
    }


    return (
        <div className = "Form">
            <div className = "info-1-title" style = {{paddingTop: "0", textAlign: "center"}}>
                <h1 style = {{color:"white", fontWeight: 400}}>Contact Us!</h1>
            </div>
            <form onSubmit = {handleSubmit} 
            className = "ContactForm"
            name="contact">
                <input
                type="text"
                value={name}
                placeholder="Name"
                className = "ContactForm-input"
                aria-label = "Name"
                onChange={handleNameChange}
                minLength= {4}
                ></input>

                <input
                type="email"
                value={email}
                placeholder="Email"
                className = "ContactForm-input"
                aria-label = "Email"
                onChange={handleEmailChange}
                minLength= {5}
                ></input>

                <textarea
                value={message}
                placeholder="Message"
                className = "ContactForm-input large"
                aria-label = "Message"
                onChange={handleMessageChange}
                minLength= {10}
                ></textarea>


                <button className = "ContactForm-btn">Submit</button>    
            </form>
            <div style = {{paddingBottom: "1rem"}} ref = {warningText}>{warning}</div>
        </div>
    )
}


export default ContactForm