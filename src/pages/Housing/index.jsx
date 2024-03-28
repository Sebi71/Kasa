import Carrousel from "../../components/Carrousel";
import Collapse from "../../components/CollapseAbout"
import InformationHousing from "../../components/InfoHousing";
import Rating from "../../components/Rating";
import data from "../../datas/housing.json"
import "./index.scss"


export default function Housing () {
    const id = window.location.pathname.split('/').pop();
  
    const housing = data.find(app => app.id === id);
  
    if (!housing) {
      return <div>Appartement non trouvé</div>;
    }
  
    return (
      <>
        <Carrousel 
            images={housing.pictures} 
            altText={housing.title}
        />

        <div className="principal-content">
            <InformationHousing 
                title={housing.title}
                rating={housing.rating}
                location={housing.location}
                tags={housing.tags.map((tags, id) => (
                    <span 
                        key={id}
                        className="tag">
                            {tags}
                    </span>
                ))}
                />
            
            <div className="rating-profil">
                <Rating />
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
            <Collapse
                title={'Description'}
                text={housing.description}
            />
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
      </>
    );

  
};

