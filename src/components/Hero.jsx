import { Link } from "react-router-dom";

//Assets
import herobg from "../assets/hero_bg.png"
import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="hero">
            <h1 className="hero-heading">Hello, <br /><span className="hero-heading-cyan">I am 4NP.</span> </h1>
            
            <p className="hero-paragraph">A front end web developer dedicated to making you stand out.</p>
            
            <Link className="hero-btn-main" to="/work">See my work</Link>
        </section>
    )
}

export default Hero