import Brhomaon from "../assets/brhomaon.png"; // ./ eller ../ ? 
import genesis from "../assets/genesis.png";
import groupAssignment from "../assets/group-assignment.png";

const Information = [ 
    {
        title: "BRHOMAON",
        img: Brhomaon,
        tags: ["#Javascript", " ", "#CSS"],
        popupInfo: {
            shortWriteUp: "A short write up :)",
            info: "info",
            link: "https://github.com/malinranden/test-your-skills.git",
        }
    },
    {
        title: "Genesis", 
        img: genesis,
        tags: ["#Javascript", " ", "#CSS", " ", "#test"],
        popupInfo: {
            shortWriteUp: "A short write up =)",
            info: "Info",
            link: "https://github.com/malinranden/Assignment-lesson-11-Sass.git",
        }
    },
    {
        title: "Group Assignment",
        img: groupAssignment,
        tags: ["#Javascript", " ", "#CSS"],
        popupInfo: {
            shortWriteUp: "A short write up :D",
            info: "Info",
            link: "#",
        }
    }
]

export default Information;
 


{/* <div>
    <h2>{information.title}</h2>
    <img src={information.img} alt={information.title} />
    <p>{information.popupinfo.shortWriteUp}</p>
</div> */}