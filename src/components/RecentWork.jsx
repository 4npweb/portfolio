import projects from "../data/projects"
import ProjectCard from "./ProjectCard"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

//Assets
import "./RecentWork.css"

function RecentWork() {
    const featured = projects.filter(p => p.featured)

    return (
        <section className="recent-work">
            <motion.div
                initial={{ transform: "translateY(100px)", opacity: 0 }}
                whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut"}}
                viewport={{ once: true }}>
                       
                <h2 className="recent-work-heading">Recent Work</h2>
            </motion.div>
             
            <div className="recent-work-card-container">
                {projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>

            <Link to="/work" className="recent-work-btn">See more</Link>
        </section>
    )
}

export default RecentWork