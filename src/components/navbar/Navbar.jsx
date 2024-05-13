import { ArrowDropDown, Notifications, Search } from "@mui/icons-material"
import "./Navbar.css"
import { useState } from "react"
import { Link } from "react-router-dom";

const Navbar = () => {

const[isScrolled, setIsScrolled] = useState(false);

window.onscroll=()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);      // ""=== 0"  --> on the Top
    return () => (window.onscroll = null);
};
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
            <img src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png" alt="" />
            <Link to = "/" className="link">
            <span>HomePage</span>
            </Link>
            <Link to = "/series" className="link">
              <span>Series</span>
            </Link>
            <Link to = "/movies" className="link">
              <span>Movies</span>
            </Link>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>

        <div className="right">
            <Search className="icon"/>
            <span>KID</span>
            <Notifications className="icon"/>
            <img src="https://i.pinimg.com/originals/17/77/0b/17770b394b486a7ea972995e8d3f898d.jpg" alt="" />

            <div className="profile">
            <ArrowDropDown className="icon"/>

            <div className="options">
                <span>Settings</span>
                <span>LogOut</span>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
