import Conversation from '~/components/Conversation';
import { BoxMessageWrapper } from './styled';

const ModalStomach = ({ indexMessage, action }) => {
  const listMessage = new Array(8).fill(1).map((_, idx) => idx + 1);

  return (
    <BoxMessageWrapper>
      <model-viewer
        class='w-full relative'
        style={{ height: '40rem' }}
        id='hotspot-camera-view-demo'
        poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
        src={process.env.PUBLIC_URL + '/models/Stomach03.glb'}
        ios-src={process.env.PUBLIC_URL + '/models/Stomach03.usdz'}
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
      <div className='box-message'>
        {listMessage.map((item, idx) => {
          return indexMessage === idx ? (
            <div
              key={idx + 1}
              className={`w-full d-flex ${
                idx % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <Conversation
                content={`うわ～、なんかプールみたい！ 泳いじゃってもいい？ message${item}`}
              />
            </div>
          ) : null;
        })}
      </div>
    </BoxMessageWrapper>
  );
};

export default ModalStomach;
