import { useRef } from "react";
import mangaddict from "../assets/images/mangaddict.png";
import Mosary from "../assets/images/Mosary.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionref = useRef(null);
  const Mosaryctref = useRef(null);
  const mangaddictctref = useRef(null);
  const project3ref = useRef(null);

  useGSAP(() => {
    const projects = [
      Mosaryctref.current,
      mangaddictctref.current,
      project3ref.current,
    ];

    gsap.fromTo(
      sectionref.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionref.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionref} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          
            <div className="first-project-wrapper" ref={Mosaryctref}>
              <a href="https://mosary.vercel.app/">
              <div className="image-wrapper">
                <img src={Mosary} alt="Mosary" className="" />
              </div>
              <div className="text-content">
                <h2>Mosary is a recipe finder</h2>
                <p className="text-white-50 md:tex-xl">
                  An app built in react ,tailwindcss ,TheMealDB as an api,load
                  times are optimized and and the interface is user friendly
                </p>
              </div>
              </a>
            </div>
          
          
          <div className="first-project-wrapper overflow-hidden">
            <div className="rounded-lg" ref={mangaddictctref}>
              <div className="image-wrapper ">
                <img src={mangaddict} alt="library management platform" />
              </div>
              <div className="text-content">
                <h2 className="">Mangaddict <span className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-3 rounded-lg"> in maintenance</span></h2>
                <p className="text-white-50 md:text-xl">
                  Tracks anime all anime ever produced built upon ReactTS using
                  Jikan API{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
