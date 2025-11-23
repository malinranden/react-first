import "./Project.css"; // both with and without semicolon works
import "../index.css";
// here u import f.ex images 
// import "../Pages/Portfolio";
import { useState } from "react";  
import Thepopup from "./Thepopup.jsx";

function Project(props) {
    // const [isOpen, setIsOpen] = useState(false);
    return (
        <div onClick={() => props.onSelect(props.popupContent)} className="projectDiv">
            <button onClick={() => props.onSelect(props.popupContent)}>hello</button>
            <h2 className="projectTitle">{props.title}</h2>
            <img src={props.img} alt="" className="img"/>
            <a href={props.link} className="projectText">Repository at GitHub</a>
            {/* i could put in a new linkName at the links */}
            <p className="projectText">{props.techUsed}</p>
            <ul className="projectText">{props.shortWriteUp}
                <li>What the project does</li>
                <li>What you learned</li>
                <li>Your role (if it was collaborative)</li>
                <li>Challenges you solved</li>
                <li>{props.info}</li>
            </ul>
        </div>
    )
}
export default Project;




// className={popup ? "project-Div-Big"  : "projectDiv" } onClick={() => setPopup(!popup)}



// function Project(props) {
//     const [popup, setPopup] = useState(false);

//     return (
//         <div className={popup ? "project-Div-Big"  : "projectDiv" } onClick={() => setPopup(!popup)}>
//             <h2 className="projectTitle">{props.title}</h2>
//             <img src={props.img} alt="" className="img"/>
//             <a href={props.link} className="projectText">Repository at GitHub</a>
//             {/* i could put in a new linkName at the links */}
//             <p className="projectText">{props.techUsed}</p>
//             <ul className="projectText">{props.shortWriteUp}
//                 <li>What the project does</li>
//                 <li>What you learned</li>
//                 <li>Your role (if it was collaborative)</li>
//                 <li>Challenges you solved</li>
//                 <li>{props.info}</li>
//             </ul> 
//         </div>
//     )
// }
// export default Project;