import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Hero3d = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={10} />
       <directionalLight position={[-5, -5, -5]} intensity={10} />
      
      
      <OrbitControls 
      enablePan={false}
      maxDistance={20}
      minDistance={5}
      />
      <mesh>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color="teal" />
      </mesh>
    </Canvas>
  );
};

export default Hero3d;
