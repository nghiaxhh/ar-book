const ModelsCommon = (props) => {
  const { src, iosSrc, action } = props;

  return (
    <model-viewer
      class='w-full'
      style={{ height: '40rem' }}
      id='hotspot-camera-view-demo'
      poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
      src={src}
      ios-src={iosSrc}
      // scale='0.2 0.2 0.2'
      shadow-intensity='1'
      camera-controls
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
    </model-viewer>
  );
};

export default ModelsCommon;
