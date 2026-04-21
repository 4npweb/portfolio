//Assets
import "./ProjectCard.css"

function Project({ project }) {
    return (
        <article className="project-card">
            <img src={project.image} alt="" />
            <div className="project-info">
                <h3>{project.title}</h3>
                <p><time datetime={project.date}>{project.date}</time></p>
            </div>
        </article>
    )
}

export default Project