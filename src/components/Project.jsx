import "./Project.css"; // both with and without semicolon works
// here u import f.ex images 
function Project(props) {
    return (
        <div className="projectDiv">
            <h2 className="projectTitle">{props.title}</h2>
            <img src="" alt="" />
            <p className="projectText">{props.link}</p>
            <p className="projectText">{props.techUsed}</p>
            <p className="projectText">{props.shortWriteUp}
                <ul>
                    <li>What the project does</li>
                    <li>What you learned</li>
                    <li>Your role (if it was collaborative)</li>
                    <li>Challenges you solved</li>
                </ul>
            </p>
        </div>
    )
}
export default Project;