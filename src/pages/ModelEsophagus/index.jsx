import { CloseOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ICON_LEFT,
  IconNextStage,
  IconPreviousStage
} from '~/assets/icons/left';
import { ICON_RIGHT } from '~/assets/icons/right';
import { ROUTE_PATH } from '~/routes/route.constant';
import Conversation from '~/components/Conversation';
import { ModelEsophagusWrapper } from './styled';

const listConversation = [
  {
    key: 1,
    mainCharacter: true,
    content: 'わー暗くて怖い！'
  },
  {
    key: 2,
    content: '今食道を通ってるんだよ　等？'
  }
];

const ModelEsophagus = () => {
  const navigate = useNavigate();
  const [indexMessage, setindexMessage] = useState(0);

  useEffect(() => {
    document
      .querySelector('.box-message')
      .addEventListener('beforexrselect', (ev) => {
        // Keep slider interactions from affecting the XR scene.
        ev.preventDefault();
      });

    document
      .querySelector('.slider')
      .addEventListener('beforexrselect', (ev) => {
        // Keep slider interactions from affecting the XR scene.
        ev.preventDefault();
      });

    const modelViewer2 = document.querySelector('#hotspot-camera-view-demo');
    const annotationClicked = (annotation) => {
      console.log(annotation.dataset);
      let dataset = annotation.dataset;
      modelViewer2.cameraTarget = dataset.target;
      modelViewer2.cameraOrbit = dataset.orbit;
      modelViewer2.fieldOfView = '5deg';
    };

    modelViewer2.querySelectorAll('button').forEach((hotspot) => {
      hotspot.addEventListener('click', () => annotationClicked(hotspot));
    });
  }, []);

  return (
    <ModelEsophagusWrapper>
      <div className={'absolute left-5 md:left-auto md:right-5 top-5 z-50'}>
        <div
          className='flex items-center justify-center rounded-full bg-[#dfdfdf33]  sm:bg-[#dfdfdf]  cursor-pointer w-[40px] h-[40px]'
          onClick={() => {
            navigate(ROUTE_PATH.INTRODUCE);
          }}
        >
          <CloseOutlined />
        </div>
      </div>
      <model-viewer
        class='w-full relative !h-[100vh]'
        style={{ height: '40rem' }}
        id='hotspot-camera-view-demo'
        poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
        src={process.env.PUBLIC_URL + '/models/thor.glb'}
        // scale='0.2 0.2 0.2'
        shadow-intensity='1'
        camera-controls
        disable-tap
        disable-pan
        touch-action='none'
        camera-orbit='-8.142746deg 68.967deg 0.6179899m'
        camera-target='-0.003m 0.0722m 0.0391m'
        field-of-view='80deg'
        min-field-of-view='25deg'
        max-field-of-view='45deg'
        interpolation-decay='200'
        // min-camera-orbit='auto auto 5%'
        ar
        autoplay
      >
        <div
          id='lazy-load-poster'
          slot='poster'
          className='h-full w-full relative'
        >
          {/* <div className='text-loading text-2xl	font-bold'>Loading...</div> */}
        </div>

        <button
          className='view-button'
          slot='hotspot-0'
          data-position='-0.0569m 0.0969m -0.1398m'
          data-normal='-0.5829775m 0.2863482m -0.7603565m'
          data-orbit='-50.94862deg 84.56856deg 0.06545582m'
          data-target='-0.04384604m 0.07348397m -0.1213202m'
        >
          The Fighters
        </button>

        <div className='box-message'>
          {listConversation.map((item, idx) => {
            return indexMessage === idx ? (
              <div
                key={idx + 1}
                className={`w-full d-flex ${
                  item.mainCharacter ? 'justify-start' : 'justify-end'
                }`}
              >
                <Conversation
                  content={item.content}
                  type={item.mainCharacter ? 1 : 2}
                />
              </div>
            ) : null;
          })}
        </div>

        <div className='slider'>
          <div className='slides justify-between'>
            <div
              className='cursor-pointer d-flex items-center'
              onClick={() => {
                navigate(-1);
              }}
            >
              <IconPreviousStage />
            </div>
            <div className='d-flex justify-between w-full '>
              {indexMessage !== 0 ? (
                <div
                  className='cursor-pointer  mx-6'
                  onClick={() => {
                    setindexMessage(0);
                    setindexMessage(indexMessage - 1);
                  }}
                >
                  <ICON_LEFT />
                </div>
              ) : (
                <div className='w-[80px] mx-6' />
              )}

              <div className='d-flex items-center w-[110px]'>
                <div
                  className='text-center w-full p-1  opacity-div'
                  style={{
                    borderRadius: '100px',
                    border: '1px solid #FFFFFF'
                  }}
                >
                  {`${indexMessage + 1} of ${listConversation.length}`}
                </div>
              </div>

              {indexMessage + 1 < listConversation.length ? (
                <div
                  className='cursor-pointer  mx-6'
                  onClick={() => {
                    setindexMessage(indexMessage + 1);
                  }}
                >
                  <ICON_RIGHT />
                </div>
              ) : (
                <div className='w-[80px] mx-6' />
              )}
            </div>

            <div
              className='cursor-pointer  d-flex items-center'
              onClick={() => {
                navigate(ROUTE_PATH.MODEL_STOMACH);
              }}
            >
              <IconNextStage />
            </div>
          </div>
        </div>
      </model-viewer>
    </ModelEsophagusWrapper>
  );
};

export default ModelEsophagus;
