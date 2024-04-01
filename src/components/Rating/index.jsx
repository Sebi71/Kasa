/*******************************/
/***REUSABLE RATING COMPONENT***/
/*******************************/

/**This component displays a rating out of 5 in a star shape */

/**
 * @param {number} rating - The rating given.
 */

/**import of the star icon from the "react-icons/fa" */
import { FaStar } from "react-icons/fa";
import "./index.scss"

export default function Rating({rating}) {
  return (
    <div className="container-star">
      {/* creation of an array of length 5, 
      which uses map to traverse each element of it, 
      and associates the appropriate class based on the rating value */}
      {[...Array(5)].map((_, index) => (
          <FaStar 
            key={index}
            className={index < rating ? 'star star-full' : 'star'}
          />
      ))}
    </div>
  )
}