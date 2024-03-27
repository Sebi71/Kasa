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
            to="/"
            className={({isActive}) => `${isActive && "menu-link"}`}>
                ACCUEIL
            </NavLink>
            <NavLink
            to="/about"
            className={({isActive}) => `${isActive && "menu-link"}`}>
                A PROPOS
            </NavLink>
        </div>
    </nav>
  )
}