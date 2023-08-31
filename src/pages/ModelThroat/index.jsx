import { CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { IconNextStage, IconPreviousStage } from '~/assets/icons/left';
import { ROUTE_PATH } from '~/routes/route.constant';
import { ModelThroatWrapper } from './styled';

const ModelThroat = () => {
  const navigate = useNavigate();

  return (
    <ModelThroatWrapper>
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
        ar-modes='webxr scene-viewer quick-look'
        camera-controls
        ar
        disable-tap
        interaction-prompt='none'
        autoplay
      >
        <div
          id='lazy-load-poster'
          slot='poster'
          className='h-full w-full relative'
        >
          {/* <div className='text-loading text-2xl	font-bold'>Loading...</div> */}
        </div>

        {/* <div className='box-message'>
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
        </div> */}

        <div className='slider'>
          <div className='slides justify-between'>
            <div
              className='cursor-pointer d-flex items-center'
              onClick={() => {
                navigate(ROUTE_PATH.MODEL_BRAIN);
              }}
            >
              <IconPreviousStage />
            </div>
            {/* <div className='d-flex justify-between w-full '>
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
            </div> */}

            <div
              className='cursor-pointer  d-flex items-center'
              onClick={() => {
                navigate(ROUTE_PATH.MODEL_ESOPHAGUS);
              }}
            >
              <IconNextStage />
            </div>
          </div>
        </div>
      </model-viewer>
    </ModelThroatWrapper>
  );
};

export default ModelThroat;
