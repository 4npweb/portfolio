function WorkProject({ project }) {
    return (
        <div className="work-project">
            <a href={project.live} target="_blank"><img src={project.image} alt={project.title} /></a>
        </div> 
    )
}

export default WorkProject