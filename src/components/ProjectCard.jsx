function ProjectCard({ project }) {
    return (
        <div className="recent-work-project-card">
            <a href={project.live} target="_blank"><img src={project.image} alt={project.title} /></a>
        </div>
    )
}

export default ProjectCard