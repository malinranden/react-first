import "./Project.css"; // both with and without semicolon works
// here u import f.ex images 

function Project(props) {
    return (
        <div className="projectDiv" id="projectDiv">
            <h2 className="projectTitle">{props.title}</h2>
            <img src={props.img} alt="" className="img"/>
            <a href={props.link} className="projectText">Repository at GitHub</a>
            {/* i could put in a new linkName at the links */}
            <p className="projectText">{props.techUsed}</p>
            {/* <p className="projectText">{props.shortWriteUp} */}
                <ul className="projectText">{props.shortWriteUp}
                    <li>What the project does</li>
                    <li>What you learned</li>
                    <li>Your role (if it was collaborative)</li>
                    <li>Challenges you solved</li>
                    <li>{props.info}</li>
                </ul>
            {/* </p> */}
        </div>
    )
}
export default Project;