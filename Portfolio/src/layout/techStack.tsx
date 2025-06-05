
import TechStackicons from "../componnents/constants";

import TitleHeader from "../componnents/TItleHeader";
import {gsap} from"gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
const TechStack = () => {


  return (
    <div id="technology" className="flex-center section-padding">
      <div className="w-full h-full m:px-10 px-5">
        <TitleHeader
          title="My preferred techstack"
          sub="what Im an expert in"
        />
        <div className="tech-grid">
          {TechStackicons.map((icon) => (
            <div
             
              key={icon.name}
              className="card-border tech-card overflow-hidden  group xl:rounded-full rounded-lg"
            >
              
              <div className="tech-card-content ">
                <div className="tech-icon-wrapper">
                  <div >
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
