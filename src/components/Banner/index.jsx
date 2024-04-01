/*******************************/
/***REUSABLE BANNER COMPONENT***/
/*******************************/

/**This component creates a banner with an image and text*/

/** 
 * @param {string} classDiv - prop for CSS class for the enclosing div of the banner.
 * @param {string} classImg - prop CSS class for the img element of the banner.
 * @param {string} img - prop for Source of the image to be displayed in the banner.
 * @param {string} altText -  prop for Alternative text for the image.
 * @param {string} title - prop for Text for the banner title.
**/

import "./index.scss"

export default function Banner({classDiv, classImg, img, altText, title}) {
  return (
    <div className={classDiv}>
        
        <img 
        className={classImg}
        src={img} 
        alt={altText} />

        <h1>{title}</h1>
    </div>
  )
}