import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import data from "../../datas/housing.json"
import "./index.scss"
import imgBanner from "../../assets/images/banner-for-home.png"


export default function Home() {
  return (
    <>
      <Banner
        classDiv={"banner-home"}
        classImg={"banner-img-home"}
        img={imgBanner}
        altText={"photo de montagnes"}
        title={"Chez vous, partout et ailleurs"}
      />
      <article className="card-container">
        {data.map((housing) => 
          <Cards 
            key={housing.id}
            location={"/housing/" + housing.id}
            source={housing.cover}
            altText={"photo représentant " + housing.title}
            title={housing.title}

          />
        )}
      </article>
    </>
  )
}