import { Link } from "react-router-dom";
import Carrousel from "../../components/Carrousel";
import Collapse from "../../components/CollapseAbout"
import Rating from "../../components/Rating";
import data from "../../datas/housing.json"
import ErrorLogo from "../../assets/images/logo-oups.jpg"
import "./index.scss"


export default function Housing () {
    const id = window.location.pathname.split('/').pop();
  
    const housing = data.find(app => app.id === id);
  
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
                <div className="header-content">
                    <h1 className="title">
                        {housing.title}
                    </h1>
                    <p className="location">
                        {housing.location}
                    </p>
                </div>
                <div className="tags">
                    {housing.tags.map((tags, id) => (
                    <span 
                        key={id}
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
                <div className="profil">
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

        <div className="container">
            <div className="collapse">
            <Collapse
                title={'Description'}
                text={housing.description}
            />
            </div>
            <div className="collapse">
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

