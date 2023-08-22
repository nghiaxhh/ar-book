import { CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';
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
  return (
    <ModelEsophagusWrapper>
      <div className={'absolute right-5 top-5 z-50'}>
        <div
          className='flex items-center justify-center rounded-full bg-slate-300 cursor-pointer w-[44px] h-[44px]'
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
        ar
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

      <div className='box-message'>
        {listConversation.map((item, idx) => {
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
                className='cursor-pointer  mx-10'
                onClick={() => {
                  setindexMessage(0);
                  setindexMessage(indexMessage - 1);
                }}
              >
                <ICON_LEFT />
              </div>
            ) : (
              <div style={{ width: '50px' }} />
            )}

            {indexMessage + 1 < listConversation.length ? (
              <div
                className='cursor-pointer  mx-10'
                onClick={() => {
                  setindexMessage(indexMessage + 1);
                }}
              >
                <ICON_RIGHT />
              </div>
            ) : (
              <div style={{ width: '50px' }} />
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
    </ModelEsophagusWrapper>
  );
};

export default ModelEsophagus;
