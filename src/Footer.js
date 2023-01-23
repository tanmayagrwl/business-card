import React from "react";
import { ReactDOM } from "react";
import twitter from './twitter.png';
import insta from './instagram.png';
import github from './github.png';

export default function Footer(){
    return(
        <footer id="footer">
            <a href="https://twitter.com/wordy_journeys"><img src={twitter} id="twitter" alt="twitter" /></a>
            <a href="https://www.instagram.com/tanmay_agr/"><img src={insta} id="insta" alt="insta" /></a>
            <a href="https://github.com/tanmayagrwl"><img src={github} id="github" alt="github" /></a>
        </footer>
    );
}