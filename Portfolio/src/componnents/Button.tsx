import arrowd from "../assets/images/arrowdown.svg"


interface props{
  className:string
  text:string
  
}



const Button = ({className,text}:props) => {
  return (
    <>
    <a className={`${className??''} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle"/>
        <p className="text">
          {text}
        </p>
        <div className="arrow-wrapper">
          <img src={arrowd} alt="arrow"  />

        </div>
      </div>
    </a>
    </>
    
  )
}

export default Button