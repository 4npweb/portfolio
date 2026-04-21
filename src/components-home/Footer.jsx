import "./Footer.css"
import { Link } from "react-router-dom"

function Footer({ page = 'home' }) {
    return (
        <footer>
            <div className="footer-top">
                    <h2>4np.dev</h2>
                    <span className="email-text">4np.dev@gmail.com</span>
            </div>
            <div className="footer-main">
                <div className="footer-left">
                    <ul>
                        {page === 'home' ? (
                            <>
                                <li><a href="#about">About</a></li>
                                <li><Link to="/work">Work</Link></li>
                                <li><a href="#services">Services</a></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/work">Work</Link></li>
                            </>
                        )}
                    </ul>
                </div>
                <div className="footer-right">
                    <ul>
                        <li><a href="https://www.instagram.com/4np.dev/">Instagram</a></li>
                        <li><a href="https://github.com/4npweb">Github</a></li>
                        <li><a href="https://www.tiktok.com/@4np.dev?is_from_webapp=1&sender_device=pc">TikTok</a></li>
                    </ul>
                </div>
            </div>

            <p className="footer-bottom">&copy; 2025 4NP Web <br /> All rights reserved</p>
        </footer>
    )
}

export default Footer