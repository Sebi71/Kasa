/******************************/
/***REUSABLE CARD COMPONENT***/
/******************************/

/**This card component generates a link (<Link>) with an image (<img>) and a title (<h3>).*/

/**
* @param {string} location - prop for the destination URL for the link.
* @param {string} source - prop for the source of the image to be displayed in the card.
* @param {string} altText - prop for the alternative text for the image.
* @param {string} title - prop for the title text for the card.
**/

/**import of the Link component from the "react-router-dom" package for managing routes in web applications.*/
import { Link } from "react-router-dom"


import "./index.scss"

export default function Cards({location, source, altText, title}) {

  return (
    <>
        <Link 
            className="card-link"
            //page redirection
            to={location}> 
                <img
                className="card-img" 
                src={source} 
                alt={altText} />
                <div className="darken-container">
                </div>
                <h3 className="card-title">
                    {title}
                </h3>
        </Link>
    </>
  )
}