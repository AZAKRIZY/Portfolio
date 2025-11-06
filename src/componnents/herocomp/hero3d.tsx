import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import HeroLight from "../contactexp/herolight";

import { Earth } from "./Earth";

const Hero3d = () => {
  const isMobile: boolean = useMediaQuery({ query: "(max-width:768px)" });
  
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      {!isMobile?<OrbitControls
        enableZoom={false}
        enablePan={false}
        maxDistance={15}
        minDistance={3}
        target={[0, 0, 0]}
      />:""}
      <HeroLight />
      <group
        scale={isMobile ? 1.5 : 2.5}
        position={isMobile? [0, -1, 0]: [0, 0, 0]}
        rotation={[0.2, 0, 0]}
      >
        <Earth />
      </group>
    </Canvas>
  );
};

export default Hero3d;