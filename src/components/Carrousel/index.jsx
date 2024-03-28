import { useState } from 'react'
import leftArrow from "../../assets/images/arrow_left.svg"
import rightArrow from "../../assets/images/arrow_right.svg"
import "./index.scss"

export default function Carrousel({images, altText}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    const slideNumber = images.length

    const nextSlide = () => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentIndex((index) =>
          index === slideNumber - 1 ? 0 : index + 1
        );
        setFadeOut(false);
      }, 200);
    };
  
    const prevSlide = () => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentIndex((index) =>
          index === 0 ? slideNumber - 1 : index - 1
        );
        setFadeOut(false);
      }, 200); 
    };

  
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
        {content}
        <img 
            className={`img-slider ${fadeOut && 'fade-out'}`}
            src={images[currentIndex]} 
            alt={altText} />
      </div>
    );
}
