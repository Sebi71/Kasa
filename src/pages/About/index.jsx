import Banner from "../../components/Banner";
import Collapse from "../../components/CollapseAbout";
import collapseData from "../../datas/collapses.json"

import imgBanner from "../../assets/images/banner-for-about.png"


export default function About() {
  return (
    <>
      <Banner
        classDiv={"banner-about"}
        classImg={"banner-img-about"}
        img={imgBanner}
        altText={"photo de montagnes"}
      />

      {collapseData.map((collapse) => (
        <Collapse
          key={collapse.id}
          title={collapse.title}
          text={collapse.text}
        />
      ))}
    </>
  )
}