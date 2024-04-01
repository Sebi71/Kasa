/*******************************/
/***REUSABLE FOOTER COMPONENT***/
/*******************************/

import logo from "../../assets/images/logo-footer.svg"

import "./index.scss"

export default function Footer() {
  return (
    <footer className="footer">
        {/* adding the imported logo */}
        <img 
        className="logo-footer" 
        src={logo} 
        alt="logo de Kasa" />
        
        <p className="text-footer">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}