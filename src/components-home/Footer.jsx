import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <h2>4np.dev</h2>

                <ul>
                    <li>
                        <a
                            href="https://www.instagram.com/4np.dev/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://github.com/4npweb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.tiktok.com/@4np.dev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            TikTok
                        </a>
                    </li>
                </ul>
            </div>

            <div className="footer-right">
                <span className="email-text">4np.dev@gmail.com</span>
            </div>

            <p className="footer-bottom">
                © 2026 4NP <br />
                All rights reserved
            </p>
        </footer>
    );
}

export default Footer;