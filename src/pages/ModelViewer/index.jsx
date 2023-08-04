import React, { useState } from 'react';
import { ModelViewerWrapper } from './styled';

const ModelViewer = () => {
  const [itemSelected, setItemSelected] = useState(0);
  const listPathSrc = [
    process.env.PUBLIC_URL + '/models/comission_230717',
    process.env.PUBLIC_URL + '/models/Stomach03.glb'
  ];
  const listPathIOS = [null, process.env.PUBLIC_URL + '/models/Stomach03.usdz'];

  return (
    <ModelViewerWrapper>
      <model-viewer
        class='w-full'
        style={{ height: '40rem' }}
        id='hotspot-camera-view-demo'
        poster={process.env.PUBLIC_URL + '/images/loading.gif'}
        src={listPathSrc[itemSelected]}
        ios-src={listPathIOS[itemSelected]}
        scale='0.5 0.5 0.5'
        shadow-intensity='1'
        camera-controls
        auto-rotate
        ar
      >
        <div
          id='lazy-load-poster'
          slot='poster'
          className='h-full w-full relative'
        >
          <div className='text-loading text-2xl	font-bold'>Loading...</div>
        </div>
        {/* <button slot='ar-button'>👋 Activate AR</button> */}

        <div className='slider'>
          <div className='slides'>
            <button
              onClick={() => setItemSelected(0)}
              className={`slide ${itemSelected === 0 && 'selected'}`}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/Game.png`
              }}
            ></button>
            <button
              onClick={() => setItemSelected(1)}
              className={`slide ${itemSelected === 1 && 'selected'}`}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/Game.png`
              }}
            />
          </div>
        </div>
      </model-viewer>
    </ModelViewerWrapper>
  );
};

export default ModelViewer;
