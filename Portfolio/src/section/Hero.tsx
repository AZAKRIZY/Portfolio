import bg from "../assets/images/bg.png";
import "../index.css";

const word = ["Ideas", "Design", "Concept"];
const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden   ">
        <div className=" absolute top-0  left-0 z-10">
          <img src={bg} alt="background" />
        </div>
        <div className="hero-layout">
          {/*Left:Hero Content */}
          <header className="flex flex-col justify-center md:w-full w-screen md px-5">
            <div className="flex flex-col gap-7">
              <div className="hero-text">
                <h1>
                  make your
                  <span className="slide">
                    <span className="wrapper">
                      {word.map((word)=>(
                        <span 
                        key={word}
                        className="flex titems-center md:gap-3 gap-1 pb-2">
                          {word}
                        </span>
                      ))}

                    </span>
                  </span>
                  
                </h1>
                <h1>come to life</h1>
                
              </div>
              <p>Hi, I'm Luca , an ambitious React Develloper </p> 
            </div>
          </header>
        </div>
      </section>
    </>
  );
};

export default Hero;
