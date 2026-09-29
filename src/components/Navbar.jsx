import "./css/Navbar.css"

function Navbar(props){
    console.log(props)
    // props.name = "aarushi"; could not updated

    return (
       <nav className="navbar">
        <div className="navbar-logo">
            MyWebsite
        </div>
        <ul className="navlist">
            <li>
                <a href="/">Home</a>
            </li>
                <li>
                <a href="/">About</a>
            </li>
                <li>
                <a href="/">Services</a>
            </li>
                <li>
                <a href="/">Contact</a>
            </li>
        </ul>

        <button className="navbtn">
            {props.name[0].toUpperCase()}
        </button>
       </nav>
    )
}

export default Navbar;