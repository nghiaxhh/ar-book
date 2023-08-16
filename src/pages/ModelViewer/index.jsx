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

const ModelViewer = () => {
  const navigate = useNavigate();
  const [itemSelected, setItemSelected] = useState(1);
  const [indexMessage, setindexMessage] = useState(0);
  const listPathSrc = [
    process.env.PUBLIC_URL + '/models/comission_230717',
    process.env.PUBLIC_URL + '/models/Stomach03.glb',
    process.env.PUBLIC_URL + '/models/intestine.glb'
  ];

  const listPathIOS = [
    null,
    process.env.PUBLIC_URL + '/models/Stomach03.usdz',
    null
  ];

  const messageCount = ConversationList[itemSelected].length;

  return (
    <ModelViewerWrapper
    // style={{
    //   backgroundImage: `url(${process.env.PUBLIC_URL}/images/HomeImg.png)`
    // }}
    >
      <ModelsCommon
        src={listPathSrc[itemSelected]}
        iosSrc={listPathIOS[itemSelected]}
        action={null}
        indexMessage={indexMessage}
        arrayMessage={ConversationList[1]}
      />

      <div className='slider'>
        <div className='slides justify-between'>
          {itemSelected !== 1 ? (
            <div
              className='cursor-pointer'
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
          <div className='d-flex justify-between'>
            {indexMessage !== 0 ? (
              <div
                className='arrow cursor-pointer'
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

            {indexMessage + 1 < messageCount ? (
              <div
                className='arrow cursor-pointer'
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
          {itemSelected !== listPathSrc.length ? (
            <div
              className='cursor-pointer'
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
