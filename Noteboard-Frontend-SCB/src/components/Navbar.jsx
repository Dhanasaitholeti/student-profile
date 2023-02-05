import { Link } from "react-router-dom"
import "../styles/navbar.css";

const Navbar = () => {

    return (
        <>
        <header className="navibar">
            
            <Link to="/"><h1 className="nav-heading">Student-Profile</h1></Link>
        </header>
        
    </>
     );
}

export default Navbar;