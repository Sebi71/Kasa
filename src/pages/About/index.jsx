/****************/
/***ABOUT PAGE***/
/****************/

/**
*Banner :
* @param {string} classDiv - Class for container.
* @param {string} classImg - Class for img.
* @param {string} img - Image URL import.
* @param {string} altText - Alt text for image.
*Collapse :
* @param {string} key - A unique key for each collapsible.
* @param {string} title - Collapse title retrieved in datacollapse.
* @param {string} text - Collapse text retrieved in datacollapse.
*/

/**import the necessary components, data, img to display the page */
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import datacollapse from "../../datas/collapses.json"
import imgBanner from "../../assets/images/banner-for-about.png"

import "./index.scss"
export default function About() {
  return (
    <>
      <Banner
        classDiv={"banner-about"}
        classImg={"banner-img-about"}
        img={imgBanner}
        altText={"photo de montagnes"}
      />

      <section className="container-collapse-about">
        {/* loop through the datacollapse and 
        create a Collapse component for each element */}
        {datacollapse.map((collapse) => (
          <div 
            key={collapse.id}
            className="collapse-about">
          <Collapse
            title={collapse.title}
            text={collapse.text}
          />
          </div>
        ))}
      </section>
    </>
  )
}