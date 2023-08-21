import React from 'react';

const ModelCharacter = () => {
  return (
    <model-viewer
      style={{ height: '600px ', width: '600px' }}
      // class={'w-full'}
      id='hotspot-camera-view-demo'
      poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
      src={process.env.PUBLIC_URL + '/models/comission_230717'}
      ios-src={null}
      // scale='0.2 0.2 0.2'
      // shadow-intensity='1'
      // camera-controls
      // ar
      autoplay
    >
      <div
        id='lazy-load-poster'
        slot='poster'
        className='h-full w-full relative'
      >
        <div className='text-loading text-2xl	font-bold'>Loading...</div>
      </div>
    </model-viewer>
  );
};

export default ModelCharacter;
