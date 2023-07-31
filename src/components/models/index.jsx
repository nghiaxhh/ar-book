import React, { useEffect } from 'react';
import PropTypes from 'prop-types'; // ES6

const ModelPreViewer = (props) => {
  const { src, iosSrc } = props;
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
    <model-viewer
      class='w-full'
      style={{ height: '40rem' }}
      id='hotspot-camera-view-demo'
      poster={process.env.PUBLIC_URL + '/images/loading.gif'}
      // src={process.env.PUBLIC_URL + '/models/Stomach03.glb'}
      // ios-src={process.env.PUBLIC_URL + '/models/Stomach03.usdz'}
      src={src}
      ios-src={iosSrc}
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
    </model-viewer>
  );
};
ModelPreViewer.propTypes = {
  src: PropTypes.string,
  iosSrc: PropTypes.string
};

export default ModelPreViewer;