import bg from "../assets/images/bg.png";
import Button from "../componnents/Button";
import CounterAnimated from "../componnents/counter";
import Hero3d from "../componnents/herocomp/hero3d";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const words = ["Concepts", "Ideas", "Design"];

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.5,
        duration: 1,
        ease: "power2.out",
      }
    );
  });

  useGSAP(() => {
    gsap.fromTo(
      ".hero-3d-layout",
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.inOut" }
    );
  });

  const scroll = () => {
    const section = document.getElementById("work");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="hero-layout ">
        {/* Left Content */}
        <header className="flex flex-col justify-center md:w-1/2 w-full padding-x-lg text-center  md:text-left ">
          <div className="flex flex-col gap-6 ">
            <div className="hero-text">
              <h1 className="flex md:inline flex-col gap-7" >
                Make your{" "}
                <span className="-translate-x-20 -translate-y-5 ">
                  <span className="slide ">
                    <span className="wrapper ">
                      {words.map((word) => (
                        <span
                          key={word}
                          className="flex items-center justify-center md:justify-start"
                        >
                          {word}
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
                <h1>come to life</h1>
              </h1>

            </div>

            <p className="text-white-50 md:text-xl text-base max-w-lg mx-auto md:mx-0 leading-relaxed">
              Hi, I'm Luca, an ambitious React developer based in Madagascar.
            </p>

            <div className="flex justify-center md:justify-start">
              <Button
                handleClick={scroll}
                text="See my Work"
                className="md:w-72 md:h-14 w-60 h-12"
              />
            </div>
          </div>
        </header>

        {/* Right 3D section */}
        <figure className="hero-3d-layout md:w-1/2 w-full flex justify-center items-center">
          <Hero3d />
        </figure>
      </div>

      {/* Animated Counter */}
      <CounterAnimated />
    </section>
  );
};

export default Hero;
