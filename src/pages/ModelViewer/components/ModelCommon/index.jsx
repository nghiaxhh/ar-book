import Conversation from '~/components/Conversation';
import { BoxMessageWrapper } from '~/pages/ModelStomach/styled';

const ModelsCommon = (props) => {
  const { src, iosSrc, action, indexMessage, arrayMessage } = props;

  return (
    <BoxMessageWrapper>
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
      <div className='box-message'>
        {arrayMessage.map((item, idx) => {
          return indexMessage === idx ? (
            <div
              key={idx + 1}
              className={`w-full d-flex ${
                idx % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <Conversation content={item.content} />
            </div>
          ) : null;
        })}
      </div>
    </BoxMessageWrapper>
  );
};

export default ModelsCommon;
