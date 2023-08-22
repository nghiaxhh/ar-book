import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ICON_LEFT,
  IconNextStage,
  IconPreviousStage
} from '~/assets/icons/left';
import { ICON_RIGHT } from '~/assets/icons/right';
import { ROUTE_PATH } from '~/routes/route.constant';
import { ConversationList } from './Conversation';
import ModelsCommon from './components/ModelCommon';
import { ModelViewerWrapper } from './styled';
import { CloseOutlined } from '@ant-design/icons';

const ModelViewer = () => {
  const navigate = useNavigate();
  const [itemSelected, setItemSelected] = useState(0);
  const [indexMessage, setindexMessage] = useState(0);
  const listPathSrc = [
    process.env.PUBLIC_URL + '/models/Stomach.glb',
    process.env.PUBLIC_URL + '/models/intestine.glb',
    process.env.PUBLIC_URL + '/models/LittlestTokyo.glb',
    process.env.PUBLIC_URL + '/models/comission_230717'
  ];

  const listPathIOS = [
    // process.env.PUBLIC_URL + '/models/Stomach03.usdz',
    null,
    null,
    null,
    null
  ];

  const messageCount = ConversationList[itemSelected].length;

  return (
    <ModelViewerWrapper

      <div className={'absolute left-5 md:left-auto md:right-5 top-5 z-50'}>
        <div
          className='flex items-center justify-center rounded-full bg-slate-300 cursor-pointer w-[40px] h-[40px]'
          onClick={() => {
            navigate(ROUTE_PATH.INTRODUCE);
          }}
        >
          <CloseOutlined />
        </div>
      </div>
      <ModelsCommon
        src={listPathSrc[itemSelected]}
        iosSrc={listPathIOS[itemSelected]}
        action={null}
        indexMessage={indexMessage}
        arrayMessage={ConversationList[itemSelected]}
      />

      <div className='slider'>
        <div className='slides justify-between'>
          {itemSelected !== 0 ? (
            <div
              className='cursor-pointer d-flex items-center'
              onClick={() => {
                if (itemSelected === 1) {
                  navigate(ROUTE_PATH.INTRODUCE);
                } else {
                  setItemSelected(1);
                }
              }}
            >
              <IconPreviousStage />
            </div>
          ) : (
            <div style={{ width: '50px' }} />
          )}

          <div className='d-flex justify-between w-full '>
            {indexMessage !== 0 ? (
              <div
                className='cursor-pointer mx-6'
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
            <div className='d-flex items-center w-[100px]'>
              <div
                className='text-center w-full p-1 shadow-lg'
                style={{
                  borderRadius: '100px',
                  border: '1px solid #FFFFFF',
                  background: '#dfdfdf'
                }}
              >
                {`${indexMessage + 1} of ${listConversation.length}`}
              </div>
            </div>
            {indexMessage + 1 < listConversation.length ? (
              <div
                className='cursor-pointer mx-6'
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

          {itemSelected !== listPathSrc.length - 1 ? (
            <div
              className='cursor-pointer  d-flex items-center'
              onClick={() => {
                setindexMessage(0);
                setItemSelected(itemSelected + 1);
              }}
            >
              <IconNextStage />
            </div>
          ) : (
            <div style={{ width: '50px' }} />
          )}
        </div>
      </div>
    </ModelViewerWrapper>
  );
};

export default ModelViewer;
