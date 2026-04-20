import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
  	return (
    	<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.6, delay: index * 0.30, ease: "easeOut"}}
			viewport={{ once: true }}>
		
			<div className="recent-work-project-card">
				<a href={project.live} target="_blank" rel="noreferrer">
				<img src={project.image} alt={project.title} />
				</a>
			</div>
    	</motion.div>
  	);
}

export default ProjectCard