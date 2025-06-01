import bg from "../assets/images/bg.png";
import Button from "../componnents/Button";
import CounterAnimated from "../componnents/counter";
import Hero3d from "../componnents/herocomp/hero3d";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



const word = ["Concepts", "Ideas", "Design"];
const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(".hero-text h1",
      {
        x:-20 ,
        opacity:0

      },
      {
        x:0 ,
        opacity:1,
        stagger:0.5,
        duration:1,
        ease:'power2.out'

      }
    );
  });
   useGSAP(() => {
    gsap.fromTo(".hero-3d-layout ",
      {
        
        opacity:0

      },
      {
       
        opacity:2,
       
        duration:1,
        ease:'power2.in'

      }
    );
  });
  const scroll = () => {
  const section = document.getElementById("counter");
  section?.scrollIntoView({ behavior: "smooth" });
};
  return (
    <>
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
          <img src={bg} alt="" />
        </div>
        <div className="hero-layout ">
          {/*left herocontent */}
          <header className=" flex flex-col  justify-center md:w-full w-screen  md:px-20 px-5">
            <div className=" flex flex-col gap-7">
              <div className="hero-text">
                <h1>
                  Make your
                  <span className="slide">
                    <span className="wrapper">
                      {word.map((word) => (
                        <span
                          key={word}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          {word}
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
                <h1>come to life</h1>
              </div>
              <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                Hi, I'm Luca, an ambitious React developer based in Madgascar
              </p>
              <Button
                handleClick={scroll}
                text="See my Work "
                className="md:w-80 md:h-16 w-60 h-12"
              />
            </div>
          </header>
          {/*right 3d */}
          <figure className="hero-3d-layout ">
            <Hero3d />
          </figure>
          
        </div>
        <CounterAnimated/>
      </section>
    </>
  );
};

export default Hero;
