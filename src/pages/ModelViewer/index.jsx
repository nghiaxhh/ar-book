import React, { useEffect } from 'react';
import { ModelViewerWrapper } from './styled';

const ModelViewer = () => {
  useEffect(() => {
    const modelViewer2 = document.querySelector('#hotspot-camera-view-demo');
    const annotationClicked = (annotation) => {
      let dataset = annotation.dataset;
      modelViewer2.cameraTarget = dataset.target;
      modelViewer2.cameraOrbit = dataset.orbit;
      modelViewer2.fieldOfView = '45deg';
    };

    modelViewer2.querySelectorAll('button').forEach((hotspot) => {
      hotspot.addEventListener('click', () => annotationClicked(hotspot));
    });
  }, []);

  return (
    <ModelViewerWrapper>
      <model-viewer
        id='hotspot-camera-view-demo'
        poster={process.env.PUBLIC_URL + '/images/loading.gif'}
        // src={process.env.PUBLIC_URL + '/models/Stomach03.glb'}
        // ios-src={process.env.PUBLIC_URL + '/models/Stomach03.usdz'}
        src={process.env.PUBLIC_URL + '/models/comission_230717'}
        // ios-src={process.env.PUBLIC_URL + '/models/comission_230717.usdz'}
        alt='A 3D model of an astronaut'
        shadow-intensity='1'
        camera-controls
        auto-rotate
        ar
      >
        {/* <button slot='ar-button'>👋 Activate AR</button> */}
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
        <button
          class='view-button'
          slot='hotspot-2'
          data-position='0.0608m 0.0566m 0.0605m'
          data-normal='0.2040984m 0.7985359m -0.56629m'
          data-orbit='42.72974deg 84.74043deg 0.07104211m'
          data-target='0.0757959m 0.04128428m 0.07109568m'
        >
          The Encounter
        </button>
        <button
          class='view-button'
          slot='hotspot-4'
          data-position='0.0677m 0.18906m -0.0158m'
          data-normal='-0.008245394m 0.6207898m 0.7839338m'
          data-orbit='-118.8446deg 98.83521deg 0.06m'
          data-target='0.06528695m 0.1753406m -0.01964653m'
        >
          Thunder and Lightning
        </button>
      </model-viewer>
    </ModelViewerWrapper>
  );
};

export default ModelViewer;
