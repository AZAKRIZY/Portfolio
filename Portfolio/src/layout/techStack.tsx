import TechStackicons from "../componnents/constants";
import TitleHeader from "../componnents/TItleHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const grid = gridRef.current;

    
    if (!section || !title || !grid) return;

    const cards = grid.querySelectorAll('.tech-card');

    
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    
    if (mediaQuery.matches) {
      
      gsap.set([title, ...cards], {
        x: -100,
        opacity: 0
      });


      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate title first
      tl.to(title, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      })
      // Then animate cards with stagger
      .to(cards, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.4"); 
    } else {
      
      gsap.set([title, ...cards], {
        x: 0,
        opacity: 1
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      id="technology" 
      className="flex-center section-padding"
      ref={sectionRef}
    >
      <div className="w-full h-full m:px-10 px-5">
        <div ref={titleRef}>
          <TitleHeader
            title="My preferred techstack"
            sub="what Im an expert in"
          />
        </div>
        <div className="tech-grid" ref={gridRef}>
          {TechStackicons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <div>
                    <img src={icon.image} alt="" />
                  </div>
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;