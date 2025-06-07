import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import * as THREE from "three";

import HeroLight from "./herolight";
import { Room } from "./Room";

const FloatingRoom = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Floating animation - smooth up and down movement
      groupRef.current.position.y = -10 + Math.sin(state.clock.elapsedTime * 1) * 0.5;
      
      // Optional: Add gentle rotation
      groupRef.current.rotation.y = -2.5 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group
      ref={groupRef}
      scale={0.1}
      position={[0, -6, 0]}
      rotation={[0.5, -2.5, 0]}
    >
      <Room />
    </group>
  );
};

const ContactExperience = () => {
  const isMobile: boolean = useMediaQuery({ query: "(max-width:768px)" });
  
 
  
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
      <OrbitControls
        enableZoom={isMobile?false:true}
        enablePan={false}
        maxDistance={500}
        minDistance={100}
        target={[0, 0, 0]}
      />
      <HeroLight />
      <FloatingRoom />
    </Canvas>
  );
};

export default ContactExperience;