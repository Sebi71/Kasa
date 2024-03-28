import Carrousel from "../../components/Carrousel";
import data from "../../datas/housing.json"


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
      </>
    );

  
};

