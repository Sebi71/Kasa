import { Link } from "react-router-dom"

import "./index.scss"

export default function Cards({location, source, altText, title}) {

  return (
    <>
        <Link 
            className="card-link"
            to={location}>
                <img
                className="card-img" 
                src={source} 
                alt={altText} />
                <div className="darken-container"></div>
                <h3 className="card-title">
                    {title}
                </h3>
        </Link>
    </>
  )
}