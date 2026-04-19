import { useState } from "react"
import { Link } from "react-router-dom"

//Assets
import logo from "../assets/4np_nobg.png"
import "./Navbar.css"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header>
                <a href="#hero"><img className="logo" src={logo} alt="" /></a>
                
                <ul className="desktop-ul">
                    <li><a className="nav-links" href="#about">About</a></li>
                    <li><Link className="nav-links" to="/work">Work</Link></li>
                    <li><a className="nav-links" href="#services">Services</a></li>
                </ul>

                <a className="contact-link" href="#">Contact me</a>
                
                <button className="menu-btn" onClick={() => setIsOpen(true)}>Menu</button>
            </header>

            {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
            
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={() => setIsOpen(false)}>Close</button>

                <ul className="mobile-ul">
                    <li><a onClick={() => setIsOpen(false)} className="menu-links" href="#hero">Home</a></li>
                    <li><a onClick={() => setIsOpen(false)} className="menu-links" href="#about">About</a></li>
                    <li><Link onClick={() => setIsOpen(false)} className="menu-links" to="/work">Work</Link></li>
                    <li><a onClick={() => setIsOpen(false)} className="menu-links" href="#services">Services</a></li>
                </ul>

                <a onClick={() => setIsOpen(false)} className="menu-contact-link" href="#">Contact me</a>
            </div>
        </>
    )
}

export default Navbar