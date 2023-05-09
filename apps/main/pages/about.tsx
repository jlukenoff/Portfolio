import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { NextPage } from "next";

const MyScene = () => {
  const meshRef = useRef<any>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  const onModelLoad = (gltf: any) => {
    console.warn("Loaded model:", gltf);
    meshRef.current = gltf.scene.children[0];
  };

  const loader = new GLTFLoader();

  loader.load("san_francisco_city.glb", onModelLoad);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <group>
        <primitive object={meshRef} />
      </group>
    </>
  );
};

const About: NextPage = () => {
  return (
    <Canvas>
      <MyScene />
    </Canvas>
  );
};

export default About;
