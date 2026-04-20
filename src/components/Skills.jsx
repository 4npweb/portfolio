import { motion } from "framer-motion";

//Assets
import "./Skills.css"

const skills = ['HTML', 'CSS', 'Javascript', 'Git', 'React']

function Skills() {
    return (
        <section className="skills">
            <motion.div
                initial={{ transform: "translateY(50px)", opacity: 0 }}
                whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut"}}
                viewport={{ once: true }}>
                
                <h2 className="skills-heading">My skills</h2>
            </motion.div>

            <div className="skill-container">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: "easeInOut"
                        }}
                        viewport={{ once: true }}>
                        
                        <span>{skill}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Skills;