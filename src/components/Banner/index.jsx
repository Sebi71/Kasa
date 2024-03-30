


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