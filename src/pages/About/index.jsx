import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import collapseData from "../../datas/collapses.json"
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

      <section className="container-collapse">
        {collapseData.map((collapse) => (
          <div className="collapse-about">
          <Collapse
            key={collapse.id}
            title={collapse.title}
            text={collapse.text}
          />
          </div>
        ))}
      </section>
    </>
  )
}