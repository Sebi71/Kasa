/*******************************/
/***REUSABLE NAVBAR COMPONENT***/
/*******************************/

/**This component represents the navigation bar located in the application header. It allows, thanks to NavLink, to access the different pages */

/**import of the NavLink component from the "react-router-dom" package for managing routes in web applications.*/
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg"

import "./index.scss"

export default function NavBar() {
  return (
    <nav className="nav-bar">
        <img 
        className="logo"
        src={logo} 
        alt="logo su site Kasa" />
        <div className="link">
            <NavLink
            //redirect to home page
            to="/"
            //apply the class when the link is active
            className={({isActive}) => `${isActive && "menu-link"}`}>
                ACCUEIL
            </NavLink>
            <NavLink
            // redirect to about page
            to="/about"
            //apply the class when the link is active
            className={({isActive}) => `${isActive && "menu-link"}`}>
                A PROPOS
            </NavLink>
        </div>
    </nav>
  )
}