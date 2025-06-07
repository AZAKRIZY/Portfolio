const EarthLight = () => {
  return (
    <>
      {/* Main spotlight for dramatic lighting */}
      <spotLight 
        position={[5, 5, 5]} 
        intensity={3}
        angle={0.8}
        penumbra={0.5}
        castShadow={false}
      />

      {/* Secondary spotlight from opposite side */}
      <spotLight 
        position={[-5, -3, -5]} 
        intensity={2}
        angle={0.8}
        penumbra={0.5}
        castShadow={false}
      />

      {/* Point lights inside the earth area - focused on center */}
      <pointLight 
        position={[0, 0, 0]} 
        intensity={3}
        color="#87ceeb"
        distance={15}
      />

      <pointLight 
        position={[0.5, 0, 0]} 
        intensity={2.5}
        color="#4dd0e1"
        distance={12}
      />

      <pointLight 
        position={[-0.5, 0, 0]} 
        intensity={2.5}
        color="#4dd0e1"
        distance={12}
      />

      <pointLight 
        position={[0, 0.5, 0]} 
        intensity={2.5}
        color="#81d4fa"
        distance={12}
      />

      <pointLight 
        position={[0, -0.5, 0]} 
        intensity={2.5}
        color="#81d4fa"
        distance={12}
      />

      <pointLight 
        position={[0, 0, 0.5]} 
        intensity={2.5}
        color="#b3e5fc"
        distance={12}
      />

      <pointLight 
        position={[0, 0, -0.5]} 
        intensity={2.5}
        color="#b3e5fc"
        distance={12}
      />

      {/* Higher ambient light for inner visibility */}
      <ambientLight intensity={0.6} color="#ffffff" />

      {/* Directional lights from multiple angles */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        color="#87ceeb"
        castShadow={false}
      />

      <directionalLight
        position={[-10, -10, -5]}
        intensity={0.8}
        color="#ffffff"
        castShadow={false}
      />
    </>
  )
}

export default EarthLight