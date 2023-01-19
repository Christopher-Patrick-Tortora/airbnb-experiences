import logo  from "../images/airbnb-logo.png"

const Navbar = () => {
    return(
        <nav className="navbar">
            <img src={logo}></img>
        </nav>
    );
}

export {Navbar};