import React from "react";
import {Jumbotron} from "react-bootstrap";
import "../style/JumboIntro.css"


export function JumboIntro({aboutMeTitle,aboutMeText}){
    return(

           <Jumbotron className="shadow rounded w-100 align-content-center mt-5 bg-dark text-white">
               <h1 className="font-weight-bold text-danger title">{aboutMeTitle}</h1>
               <p className="text-center text-intro">{aboutMeText}</p>
           </Jumbotron>

    )

}