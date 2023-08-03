import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
// import ModelViewer from '../ModelViewer';
import Model from './Stomach';

const ModelCharacter = () => {
  return (
    <div>
      <Canvas>
        <Model />
        {/* <ModelViewer /> */}
        <OrbitControls />
        <Environment preset='sunset' background />
      </Canvas>
    </div>
  );
};

export default ModelCharacter;
