import { Link } from "react-router-dom"

//Assets
import "./NotFound.css"

function NotFound() {
    return (
        <div className="div-404">
            <h1>404 :(</h1>
            <p>This page doesn't exist.</p>
            <br /><br />
            <Link to="/" className="return-to-home">Return to home?</Link>
        </div>
    )
}

export default NotFound