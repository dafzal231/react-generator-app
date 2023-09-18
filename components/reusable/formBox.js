import React from 'react';
import { useState } from "react";
import "./globals.css";

function Form () {
    const [input, setInput ] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        setInput("");
    };

    return (
        <div className = "form-box">
            <form onSubmit = {submit}
                value = {input}
                type = "text"
                onChange = {(event) => 
                    setInput(event.target.value)
                }
                placeholder='title'
            >
            </form>
        </div>
    )
}

export default Form;
