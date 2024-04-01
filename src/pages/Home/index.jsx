/***************/
/***HOME PAGE***/
/***************/

/**
*Banner :
* @param {string} classDiv - Class for container.
* @param {string} classImg - Class for img.
* @param {string} img - Image URL import.
* @param {string} altText - Alt text for image.
* @param {string} title - Banner title.
*Cards:
* @param {string} key - A unique key for each collapsible.
* @param {string} location - Location of the card ID retrieved from housingData. 
* @param {string} source - Image URL imported from housingData. 
* @param {string} altText - Alt text for card image, defined by title in housingData. 
* @param {string} title - Housing title retrieved in housingData.
*/

/**import the necessary components, housingData, img to display the page */
import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import housingData from "../../datas/housing.json"
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
      <article className="card-container-home">
        {/* parse the housingData and 
        create a Cards component for each retrieved housing */}
        {housingData.map((housing) => 
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