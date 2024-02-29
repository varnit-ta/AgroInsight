import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import logo from '../assets/logo.png';
import {useLogout} from '../hooks/useLogout';

const Navbar = () => {
    const { user } = useAuthContext();
    const {logout} = useLogout();

    const NavButton = (linkTo, buttonName) => {
        return (
            <Link to={linkTo} className="">
                {buttonName}
            </Link>
        )
    }

    const handleClick = () => {
        logout();
    }

    return (
        <nav className="navbar">
            <img src={logo} height={"50px"} />
            <h1>AgroInsight</h1>

            <div className="navbar-links">
                {user && (<div>
                    <a><button onClick={handleClick}>Logout</button></a>
                </div>)}
            </div>
        </nav>
    )
}

export default Navbar;