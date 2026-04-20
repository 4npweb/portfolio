import projects from "../data/projects"
import WorkProject from "./WorkProject"

//Assets
import "./WorkProjects.css"

function WorkProjects() {
    return (
        <div className="projects-container">
            {projects.map((project) => (
                <WorkProject  key={project.id} project={project}/>
            ))}
        </div>
    )
}

export default WorkProjects