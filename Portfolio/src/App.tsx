
import "./App.css";

import Navbar from "./componnents/Navbar";
import Contact from "./layout/Contact";
import FeatureCards from "./layout/featureCards";
import Hero from "./layout/Hero";
import Showcase from "./layout/Showcase";
import TechStack from "./layout/techStack";




function App() {
  return (
    <>
    <Navbar />
    <Hero/>
    <Showcase/>
    <FeatureCards/>
    <TechStack />
    <Contact />
    </>
  );
}

export default App;
