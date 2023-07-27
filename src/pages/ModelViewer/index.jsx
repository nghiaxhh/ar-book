import React from 'react';
import { ModelViewerWrapper } from './styled';

const ModelViewer = () => {
  return (
    <ModelViewerWrapper>
      <model-viewer
        id='hotspot-camera-view-demo'
        src='/models/Stomach/Stomach03.glb'
        ios-src='/models/Stomach/Stomach03.usdz'
        alt='A 3D model of an astronaut'
        shadow-intensity='1'
        camera-controls
        auto-rotate
        ar
      >
        <button
          class='view-button'
          slot='hotspot-0'
          data-position='-0.0569m 0.0969m -0.1398m'
          data-normal='-0.5829775m 0.2863482m -0.7603565m'
          data-orbit='-50.94862deg 84.56856deg 0.06545582m'
          data-target='-0.04384604m 0.07348397m -0.1213202m'
        >
          The Fighters
        </button>
      </model-viewer>
    </ModelViewerWrapper>
  );
};

export default ModelViewer;
