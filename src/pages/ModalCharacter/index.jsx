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
        <Environment
          preset='forest'
          // files={[process.env.PUBLIC_URL + '/images/Fallguys.png']}
          background
        />
      </Canvas>
    </div>
  );
};

export default ModelCharacter;
