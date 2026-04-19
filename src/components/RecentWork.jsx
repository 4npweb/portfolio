import projects from "../data/projects"
import ProjectCard from "./ProjectCard"
import { Link } from "react-router-dom"

//Assets
import "./RecentWork.css"

function RecentWork() {
    const featured = projects.filter(p => p.featured)

    return (
        <section className="recent-work">
            <h2 className="recent-work-heading">Recent Work</h2>
            
            <div className="recent-work-card-container">
                {featured.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <Link to="/work" className="recent-work-btn-main">See more</Link>
        </section>
    )
}

export default RecentWork