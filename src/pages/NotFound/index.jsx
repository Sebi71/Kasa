import { Link } from "react-router-dom"

import "./index.scss"

export default function NotFound() {
  return (
    <div className="error-container">
        <h2 className="number-error">404</h2>
        <p className="text-error">Oups ! La page que vous demandez n'existe pas.</p>
        <Link 
        className="link-to-home"
        to="/">
            Retourner sur la page d'accueil
        </Link>
    </div>
  )
}