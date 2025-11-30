import "./Project.css"; // both with and without semicolon works
// here u import f.ex images 

function ProjectStructure({project, onClick}) {
    return (
        <div className="projectDiv" onClick={onClick}>
            <h2 className="projectTitle">{project.title}</h2>
            <img src={project.img} alt={project.title} className="img"/>
            <p className="projectText">{project.tags}</p>
        </div>
    )
}
export default ProjectStructure;






// onClick={() => Information.setOpenPopup(Information.popupContent)}
// onClick={() => Information.setOpenPopup(Information.popupContent)}


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