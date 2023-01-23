import React from "react";
import { ReactDOM } from "react";
import myPic from './myPic.jpg';

export default function TopImg(){
    return(
        <img src={myPic} className="myPic" alt="myPic" />
    );
}