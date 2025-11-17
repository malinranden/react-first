import {Link} from "react-router-dom";
// import './index.css' // not needed :)

function Navbar () {
    return (
        <>
            <nav className="Navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;