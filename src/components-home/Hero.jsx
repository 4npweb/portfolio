import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//Assets
import herobg from "../assets/hero_bg.png"
import "./Hero.css";

function Hero() {
    return (    
        <section className="hero" id="hero">
            <motion.div
                initial={{ transform: "translateY(100px)", opacity: 0 }}
                whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut"}}
                viewport={{ once: true }}>
                
                <h1 className="hero-heading">Hello, <br /><span className="hero-heading-cyan">I am 4NP.</span> </h1>
            </motion.div>

            <motion.div
                initial={{ transform: "translateY(100px)", opacity: 0 }}
                whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut"}}
                viewport={{ once: true }}>
                
                <p className="hero-paragraph">A front-end web developer based in Bosnia & Herzegovina.</p>
            </motion.div>

            <motion.div
                initial={{ transform: "translateY(100px)", opacity: 0 }}
                whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut"}}
                viewport={{ once: true }}>
                
                <Link className="hero-btn" to="/work">See my work</Link>
            </motion.div>
            <div className="hero-social-links">
                <a href="https://www.instagram.com/4np.dev/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/4npweb" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.tiktok.com/@4np.dev?is_from_webapp=1&sender_device=pc" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
            </div>
        </section>
    )
}

export default Hero