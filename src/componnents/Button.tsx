interface props {
  text: string;
  className: string;
  handleClick?: () => void;
}
import arrowd from "../assets/images/arrowd.svg";

const Button = ({ text, className, handleClick }: props) => {
  return (
    <a className={`${className ?? ""} cta-wrapper`}>
      <div onClick={handleClick} className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src={arrowd} alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
