import Project from "./ProjectCard"
import { Link } from "react-router-dom"

//Assets
import "./WorkResults.css"
import projects from "../data/projects"

function WorkResults() {
    return (
        <div className="work-results">
            {projects.map((project) =>
                <Link key={project.id} to={`/work/project/${project.id}`}>
                    <Project key={project.id} project={project}/>
                </Link>
            )}
        </div>
    )
}

export default WorkResults