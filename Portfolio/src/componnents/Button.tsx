interface props{
    text:string
    className:string
}

const Button = ({text,className}:props) => {
  return (
    <a className={ `${className ?? "" } cta-wrapper`}>
        <div className="cta-button group">
            <div className="bg-circle"/>
            <p className="text">{text}</p>

        </div>

    </a>
  )
}

export default Button