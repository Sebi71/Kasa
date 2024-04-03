/*********************************/
/***REUSABLE COLLAPSE COMPONENT***/
/*********************************/

/**This collapse component allows you to show/hide content, by unfolding the content window*/

/**
* @param {string} title - prop for the title of the collapsible section.
* @param {string} text - prop for the content text of the collapsible section.
**/

/**import of the "useState" hook to declare local state variables.*/
import { useState } from "react"
import arrow from "../../assets/images/arrow.svg"

import "./index.scss"


export default function Collapse({title, text}) {
    //Declares a state variable and a function to update the state variable. Defaults to false.
    const [visible, setVisible] = useState(false)
    
   
    return (
        <>
            <div className="collapse-bar">
                <h3 className="title-collapse">
                    {title}
                </h3>
                <img 
                // Allows you to change the status of the variable on click
                onClick={() => setVisible(!visible)}
                className={`${visible && "close-collapse"} arrow-collapse`}
                src={arrow} 
                alt="flêche déploiement menu" />
            </div>    
            <span className={visible ? "content-collapse text-visible" : "content-collapse text-invisible"}>
                <div>{text}</div>
            </span>
        </>
    )
}