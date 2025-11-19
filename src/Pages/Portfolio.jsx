import Project from "../components/Project.jsx";
import Brhomaon from "../assets/brhomaon.png"; // ./ eller ../ ? 
import genesis from "../assets/genesis.png";
import groupAssignment from "../assets/group-assignment.png";
import {useState} from "react";

function Portfolio () {
    const [showProjects, setShowProjects] = useState(false);
    const buttonClick = () => {
        setShowProjects(!showProjects);
    }
    return (
        <div>
            <button onClick= {buttonClick}>{showProjects ? "Hide projects" : "Show projects"}</button>
            <h2 className="Portfolio-h2">Portfolio</h2>
            {showProjects && 
            <div className="Portfolio" id="Portfolio">    
                    <Project 
                        title = "BRHOMAON"
                        img = {Brhomaon}
                        link = "https://github.com/malinranden/test-your-skills.git"
                        techUsed = "Tech used: HTML, CSS"
                        shortWriteUp = "A short write up :)"
                        info = "Hej hallå här kommer de stå info om testet"
                    ></Project>
                    <Project 
                        title = "Genesis" 
                        img = {genesis}
                        link = "https://github.com/malinranden/Assignment-lesson-11-Sass.git"
                        techUsed = "Tech used: HTML, CSS"
                        shortWriteUp = "A short write up =)"
                        info = "Denna är nästa som står ANNAN info i"
                    />
                    <Project 
                        title = "Group Assignment" 
                        img = {groupAssignment}
                        link = "#"
                        techUsed = "Tech used: HTML, CSS"
                        shortWriteUp = "A short write up :D"
                        info = "O här kommer den tredje!"
                    />
                </div>}
                
        </div>
    )
}

export default Portfolio;