import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  Bounds,
  useAnimations,
} from "@react-three/drei";
import * as THREE from "three";

function Model({ filePath, rotationSpeed }) {
  const { scene, animations } = useGLTF(filePath); // Load animations
  const modelRef = useRef();
  const { actions } = useAnimations(animations, modelRef); // Hook for animations

  useEffect(() => {
    if (animations.length > 0) {
      // If the model has animations, play the first one
      actions[Object.keys(actions)[0]]?.play();
    }
  }, [actions, animations]);

  useFrame(() => {
    if (!animations.length && modelRef.current) {
      // Rotate the model if it has no animations
      modelRef.current.rotation.y -= rotationSpeed;
    }
  });

  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      if (child.material.map) {
        child.material.map.encoding = THREE.sRGBEncoding;
      }
      child.material.needsUpdate = true;
    }
  });

  return <primitive ref={modelRef} object={scene} />;
}

export default function ThreeDModel({
  path,
  speed,
  position,
  camera,
  setmargin = 1.3,
}) {
  const rotationSpeed = speed;
  const margin = setmargin ? setmargin : 1.3;

  return (
    <div>
      <Canvas camera={{ position: camera, fov: 45 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <hemisphereLight intensity={0.1} />
        <Environment preset="sunset" />
        <group position={position}>
          <Bounds fit clip margin={margin}>
            <Model filePath={path} rotationSpeed={rotationSpeed} />
          </Bounds>
        </group>

        <OrbitControls />
      </Canvas>
    </div>
  );
}
