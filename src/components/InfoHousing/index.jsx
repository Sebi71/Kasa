import "./index.scss"

export default function InformationHousing({title, location, tags}) {
  return (
    
    <div className="container-information">
        <div className="header-content">
            <h1 className="title">
              {title}
            </h1>
            <p className="location">
              {location}
            </p>
        </div>
        <div className="tags">
            {tags}
        </div>
    </div>
    
  )
}