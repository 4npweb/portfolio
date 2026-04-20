import { motion } from "framer-motion"

//Assets
import "./Services.css"

function Service({service, index}) {
    return (
        <motion.div
                initial={{ transform: "translateY(100px)", opacity: 0 }}
                whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3, ease: "easeInOut"}}
                viewport={{ once: true }}>
                
                <div className="service">
                    <h3 className="service-heading">{service.title}</h3>
                    <p className="service-desc">{service.desc}</p>
                    <a className="service-btn" href="#">See examples</a>
                </div>
        </motion.div>
        
    )
}

export default Service