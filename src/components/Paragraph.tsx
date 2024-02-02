import React from 'react'
import "../styles/components/paragraph.css"

function Paragraph(props: any) {
    return (
        <div className =  "Paragraph">
            <div className = "Paragraph-container">
                <div className = "Paragraph-title">
                    <h1>{props.title}</h1>
                    <div className = "Paragraph-Underline"/>
                </div>
                <p>{props.children}</p>
            </div>
        </div>
    )
}

export default Paragraph;