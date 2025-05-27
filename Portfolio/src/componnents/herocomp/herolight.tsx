function HeroLight() {
  return (
    <>
      <spotLight 
      position={[2, 38, 8]} 
      intensity={1000} 
      penumbra={0.5}/>

      <ambientLight intensity={0.15} />
    </>
  );
}

export default HeroLight;
