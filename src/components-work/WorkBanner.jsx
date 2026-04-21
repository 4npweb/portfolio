import { Link } from "react-router-dom"
import Project from "./ProjectCard"

//Assets
import "./WorkBanner.css"
import work_banner_bg from "../assets/work_bg.png"

function WorkBanner() {
    return (
        <section className="work-banner">
            <div className="page-heading">
                <h1>My work</h1>
            </div>
            <div className="work-banner-controls">
                <Link to="/">← Back to home</Link>
            </div>
        </section>
    )
}

export default WorkBanner