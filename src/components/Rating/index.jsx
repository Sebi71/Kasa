import "./index.scss"
import { FaStar } from "react-icons/fa";

export default function Rating({rating}) {
  return (
    <div className="container-star">
      {[...Array(5)].map((_, index) => (
          <FaStar 
            key={index}
            className={index < rating ? 'star star-full' : 'star'}
          />
      ))}
    </div>
  )
}