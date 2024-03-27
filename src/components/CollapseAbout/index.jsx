import { useState } from "react"
import arrow from "../../assets/images/arrow.svg"

import "./index.scss"


export default function Collapse({title, text}) {

    const [invisible, setInvisible] = useState(false)
    
   
    return (
        <div>
            <div 
            className="container-collapse">
                    <div className="collapse-bar">
                        <h3 className="title">{title}</h3>
                        <img 
                        onClick={() => setInvisible(!invisible)}
                        className={`${invisible && "close"} arrow`}
                        src={arrow} 
                        alt="flêche déploiement menu" />
                    </div>    
                    <p className={`${invisible && "text-visible"} content-collapse`}>{text}</p>
                </div>
        </div>
    )
}