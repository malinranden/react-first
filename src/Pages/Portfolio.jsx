import {useState} from "react";
import "../index.css";
import Information from "../components/Information.jsx";
import ProjectStructure from "../components/ProjectStructure.jsx";
import Thepopup from "../components/Thepopup.jsx";

function Portfolio () {
    const [showProjects, setShowProjects] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [search, setSearch] = useState("");
 
    return (

        <div className="background-Portfolio"> 
            <button className="btn-showprojects" onClick={() => setShowProjects(!showProjects)}>{showProjects ? "Hide projects" : "Show projects"} </button>
            <h2 className="Portfolio-h2">Portfolio</h2>
            <div>
                <input type="text"
                       placeholder="Search tag..."
                       value={search}
                       onChange={(e) => setSearch(e.target.value)}
                       className="searchform"
                       name="why" // it says that an input field should have a name or ID
                /> 
            </div>

            {showProjects && (
                <div className="">
                    {/* {Information.filter(project => project.title.toLocaleLowerCase().includes(search.toLowerCase()))
            
                    .map((project, index) => (
                        <ProjectStructure 
                            key={index}
                            project={project}
                            onClick={() => setSelectedProject(project)} 
                        />
                    ))} */}

{/* now i can only search for tags, i dont know how to make it work for several options, fex adding the title aboce */}

                    {Information.filter((project => 
                        (project.tags.some((tags) => tags.toLocaleLowerCase().includes(search.toLocaleLowerCase())))))
                        .map((project, index) => (
                            <ProjectStructure 
                                key={index}
                                project={project}
                                onClick={() => setSelectedProject(project)}
                                />
                        ))
                        }
                    
                </div>
            )}

            {selectedProject && (
                <Thepopup 
                    popupContent={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    )
}

export default Portfolio;
