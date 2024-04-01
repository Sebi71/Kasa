/**********************************/
/***REUSABLE CARROUSEL COMPONENT***/
/**********************************/

/**This component corresponds to a carousel which displays a series of images, with navigation arrows to navigate from one to the other.*/

/**
* @param {Array<string>} images - prop for the array of image URLs to be displayed in the carousel.
* @param {string} altText - prop the alternative text for the images.
**/

/**import of the "useState" hook to declare local state variables.*/
import { useState } from 'react'
import leftArrow from "../../assets/images/arrow_left.svg"
import rightArrow from "../../assets/images/arrow_right.svg"
import "./index.scss"

export default function Carrousel({images, altText}) {
  //State to store the index of the currently displayed image
  const [currentIndex, setCurrentIndex] = useState(0);

  //State to handle fade transition when changing image
  const [fadeOut, setFadeOut] = useState(false);

  //Total number of images in the array
  const slideNumber = images.length

  //Function to move to the next image
  const nextSlide = () => {
    //Change the status to true to trigger the transition
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((index) =>
        index === slideNumber - 1 ? 0 : index + 1
      );
      //Change the status to false to stop the transition
      setFadeOut(false);
    }, 200);
  };

  //Function to move to the previous image
  const prevSlide = () => {
    //Change the status to true to trigger the transition
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((index) =>
        index === 0 ? slideNumber - 1 : index - 1
      );
      //Change the status to false to stop the transition
      setFadeOut(false);
    }, 200); 
  };

  //Checking the number of images to display navigation arrows or not
  let content;
  if (slideNumber > 1) {
      content = 
      <div>
          <div className='arrows'>
              <img 
                  className='arrow'
                  src={leftArrow} 
                  alt="flêche gauche" 
                  onClick={prevSlide}/>
              <img 
                  className='arrow'
                  src={rightArrow} 
                  alt="flêche droite"
                  onClick={nextSlide} />
          </div>
          <div className='slide-number'>
              {currentIndex + 1} / {slideNumber}
          </div>
      </div>
  }

  return (
    <div className="slider">
      {/* Iterates through each pictures element in the array to create the number of matching images */}
      {images.map((picture, index) => {
              return (
                <div
                  key={index}
                >
                  {/* Checks if the index of the image in the "map()" loop is equal to the index of the displayed image and assigns it the appropriate class */}
                  {index === currentIndex && (
                    <img 
                      src={picture} 
                      alt={altText} 
                      className={`img-slider ${fadeOut && 'fade-out'}`} />
                  )}
                </div>
              );
            })}
        {content}
    </div>
  );


}

