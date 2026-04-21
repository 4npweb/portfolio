import { Link } from "react-router-dom"

//Assets
import logo from "../assets/4np_nobg.png"
import "./WorkNavbar.css"

function WorkNavbar() {
    return (
        <header className="work-navbar">
            <Link to="/"><img className="logo" src={logo} alt="4NP Logo" /></Link>
        </header>
    )
}

export default WorkNavbar