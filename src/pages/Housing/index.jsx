/***********************/
/***NOT HOOUSING PAGE***/
/***********************/

/**
*If housing not found :
* @param {string} src - Recovery of the imported image.
* @param {string} to - URL that links to the home page.
*Carrousel:
* @param {Array} images - Images to display in carousel, retrieved from housingData.
* @param {string} altText - Alt text, defined by title in housingData. 
*Rating:
* @param {number} ratting - Retrieving the rating in housingData. 
*Collapse:
* @param {string} title - Description and equipments title retrieved in housingData.
* @param {string} text - Description displayed, retrieved from housingData. 
* @param {Array} text - List of different equipment to display, retrieved from housinData. 
*/

/**import of the Link component from the "react-router-dom" package for managing routes in web applications.*/
import { Link } from "react-router-dom";
/**import the necessary components, housingData, img to display the page */
import Carrousel from "../../components/Carrousel";
import Collapse from "../../components/Collapse"
import Rating from "../../components/Rating";
import housingData from "../../datas/housing.json"
import ErrorLogo from "../../assets/images/logo-oups.jpg"
import "./index.scss"


export default function Housing () {
    //retrieving housing ID from current url
    const id = window.location.pathname.split('/').pop();
    //searches housingData for the ID that matches the one extracted from the URL
    const housing = housingData.find(app => app.id === id);
  
    //if no housing is found, displays an error message with a link to return to the home page
    if (!housing) {
      return  <section className="housing-not-found">
                <img 
                    className="logo-error"
                    src={ErrorLogo} 
                    alt="logo oups !" />
                <div>
                    <p className="error-title">Page non trouvé !</p>
                    <p className="error-text">Le logemement que vous cherchez n'existe pas ou a été déplacé !</p>
                    <Link
                    className="link-to-home"
                        to="/"
                    >
                    Revenir à la page d'accueil !
                    </Link>
                </div>
            </section>;
    }
  
    return (
      <>
        <Carrousel 
            images={housing.pictures} 
            altText={housing.title}
        />

        <div className="principal-content">
            <div className="container-information">
                <div className="header-information">
                    {/* retrieving title and location from housinData */}
                    <h1 className="title">
                        {housing.title}
                    </h1>
                    <p className="location">
                        {housing.location}
                    </p>
                </div>
                <div className="tags">
                    {/* browse the tags in housingData and 
                    create a span with the content of each tag */}
                    {housing.tags.map((tags, id) => (
                    <span 
                        key={id} // unique key
                        className="tag">
                            {tags}
                    </span>
                ))}
                </div>
            </div>
            
            <div className="rating-profil">
                <Rating 
                    rating={housing.rating}
                />
                <div className="profil-content">
                    {/* retrieving the name and photo 
                    in the host part of housingData */}
                    <h3 className="name">
                        {housing.host.name}
                    </h3>
                    <img 
                        className="photo" 
                        src={housing.host.picture} 
                        alt={housing.host.name} 
                    />
                </div>
            </div>
        </div>

        <div className="container-collapse-housing">
            <div className="collapse-item">
            <Collapse
                title={'Description'}
                text={housing.description}
            />
            </div>
            <div className="collapse-item">
            <Collapse
                title={'Équipements'}
                text={housing.equipments.map((equipment, id) => (
                    <ul 
                        className="list-equipments"
                        key={id}> 
                            <li>{equipment}</li>
                    </ul>
                ))}
            />
            </div>
        </div>
      </>
    );

  
};

