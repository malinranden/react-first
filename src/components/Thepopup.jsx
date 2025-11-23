import Project from "./Project.jsx";
import "../index.css";
import Portfolio from "../Pages/Portfolio.jsx";
// import "./Project.css";
import { useState } from "react";






function Thepopup({popupContent, onClose}) {
    
    return (
        <div className="Thepopup">
            <button onClick={onClose}>Stäng</button>
            {popupContent}
        </div>           
    )
}


export default Thepopup;

// bara stäng knapp i den här filen 
// öppnings knapp i portfolio 