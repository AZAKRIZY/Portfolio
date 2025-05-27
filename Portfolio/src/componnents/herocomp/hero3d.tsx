import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import HeroLight from "./herolight";
import { Room } from "./Room";

const Hero3d = () => {
  const isTablet: boolean = useMediaQuery({ query: "(max-width:1084px)" });
  const isMobile: boolean = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 40 }}>
      <OrbitControls
        enableZoom={!isTablet}
        enablePan={false}
        maxDistance={500}
        minDistance={100}
        target={[0, 0, 0]}
      />
      <HeroLight />
      <group
        scale={isMobile ? 0.05 : 0.1}
        position={isMobile ? [0, -1, 0] : [0, -6, 0]}
        rotation={[0.5, -2.5, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default Hero3d;
