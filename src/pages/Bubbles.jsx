import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";

const BubblesModel = () => {
  const headRef = useRef();
  const [isWinking, setIsWinking] = useState(false);

  // Blinking effect using useFrame within Canvas context
  useFrame(() => {
    if (Math.random() < 0.01) {
      setIsWinking(true);
      setTimeout(() => setIsWinking(false), 200);
    }
  });

  return (
    <>
      {/* Body */}
      <motion.mesh
        position={[0, -1, 0]}
        animate={{
          y: [0, -0.1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#90CDF4" />
      </motion.mesh>

      {/* Head */}
      <motion.mesh
        ref={headRef}
        position={[0, 0.2, 0]}
        animate={{
          y: [0, 0.05, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#63B3ED" />

        {/* Left Eye */}
        <mesh position={[-0.12, 0.1, 0.26]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#2C5282" />
        </mesh>

        {/* Right Eye */}
        <mesh position={[0.12, 0.1, 0.26]}>
          {isWinking ? (
            <mesh>
              {/* Winking Eye */}
              <planeGeometry args={[0.06, 0.005]} />
              <meshStandardMaterial color="#2C5282" />
            </mesh>
          ) : (
            <mesh>
              {/* Open Eye */}
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshStandardMaterial color="#2C5282" />
            </mesh>
          )}
        </mesh>

        {/* Smile */}
        <mesh position={[0, -0.08, 0.28]}>
          <torusGeometry args={[0.05, 0.01, 16, 16, Math.PI]} />
          <meshStandardMaterial color="#2C5282" />
        </mesh>

        {/* Blush */}
        <mesh position={[-0.16, -0.02, 0.25]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#FC8181" />
        </mesh>
        <mesh position={[0.16, -0.02, 0.25]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#FC8181" />
        </mesh>
      </motion.mesh>
    </>
  );
};

const Bubbles = () => {
  return (
    <Canvas style={{ height: "400px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <OrbitControls enableZoom={false} />
      <BubblesModel />
    </Canvas>
  );
};

export default Bubbles;
