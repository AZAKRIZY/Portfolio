import {  OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from 'react-responsive';




const Hero3d = () => {
  const isTablet:boolean= useMediaQuery({query:'(max-width:768px)'})
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={10} />
       <directionalLight position={[-5, -5, -5]} intensity={10} />
      
      
      <OrbitControls 
      enableZoom={!isTablet}
      enablePan={false}
      maxDistance={20}
      minDistance={5}
      />
      
   </Canvas>
  );
};

export default Hero3d;
