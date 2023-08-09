import React, { useState } from 'react';
import { ModelViewerWrapper } from './styled';
import { ICON_LEFT } from '~/assets/icons/left';
import { ICON_RIGHT } from '~/assets/icons/right';
import { useGLTF } from '@react-three/drei';
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const ModelViewer = () => {
  const [itemSelected, setItemSelected] = useState(1);
  const listPathSrc = [
    process.env.PUBLIC_URL + '/models/comission_230717',
    process.env.PUBLIC_URL + '/models/Stomach03.glb'
  ];

  const [action, setAction] = useState('stomach41Action');
  const { animations } = useGLTF(
    process.env.PUBLIC_URL + '/models/Stomach03.glb'
  );

  const listPathIOS = [null, process.env.PUBLIC_URL + '/models/Stomach03.usdz'];

  return (
    <ModelViewerWrapper>
      {console.log(getRandomInt(animations?.length))}

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
        autoplay
        animation-name={action}
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
          <div className='slides justify-between'>
            {/* <button
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
            /> */}
            <div
              className='box-arrow cursor-pointer'
              onClick={() => {
                setAction('stomach41Action');
              }}
            >
              <div className='arrow'>
                <ICON_LEFT />
              </div>
            </div>

            <div
              className='box-arrow cursor-pointer'
              onClick={() => {
                setAction(animations[getRandomInt(animations?.length)]?.name);
              }}
            >
              <div className='arrow'>
                <ICON_RIGHT />
              </div>
            </div>
          </div>
        </div>
      </model-viewer>
    </ModelViewerWrapper>
  );
};

export default ModelViewer;
