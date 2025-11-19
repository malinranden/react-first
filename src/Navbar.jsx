import {Link} from "react-router-dom";

function Navbar () {
    return (
        <>
            <nav className="Navbar">
                <ul className="Navbar-Ul">
                    <li className="Navbar-Li"><Link className="Navbar-Li" to="/">Home</Link></li>
                    <li className="Navbar-Li"><Link className="Navbar-Li" to="/about">About</Link></li>
                    <li className="Navbar-Li"><Link className="Navbar-Li" to="/portfolio">Portfolio</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
