import React from "react";
import { ReactDOM } from "react";
import linkdin from './linkdin.jpg';
import email from './emailfinal.png';

export default function Buttons(){
    return(
        <div id="buttons">
            <a href="https://www.linkedin.com/in/tanmay-agrawal-4034681b1/"><img src={linkdin} id="linkdin" alt="linkdin" /></a>
            <a href="https://mail.google.com/mail/u/0/#inbox"><img src={email} id="email" alt="email" /></a>
        </div>
    );
}