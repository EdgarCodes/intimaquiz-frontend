import { Link } from "react-router-dom";
import "../styles/navbar.css"

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar_links">
                <Link to="/"><div>Home</div></Link>

                <Link to="/quiz"><div>Take Quiz</div></Link>

                <Link to="/quiz"><div>Reviews</div></Link>
            </div>
            
            <div className="navbar_logo_container">
                <Link to="/">
                    <div className="navbar_logo">
                        <img alt="logo" src="https://storage.googleapis.com/intima-bucket/logo_4.png" />
                    </div>
                </Link>
            </div>

            <div className="navbar_links navbar_links_right">
                <Link to="/about"><div>About Us</div></Link>
                
                <Link to="/stats"><div>Statistics</div></Link>

                <Link to="/quiz"><div>Contact us</div></Link>
            </div>
        </div>
      );
}


export default Navbar;