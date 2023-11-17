import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICON_LEFT, IconPreviousStage } from '~/assets/icons/left';
import { ICON_RIGHT } from '~/assets/icons/right';
import Conversation from '~/components/Conversation';
import { ROUTE_PATH } from '~/routes/route.constant';
import { EndOfStoryWrapper, Wrapper } from './styled';
import { CloseOutlined } from '@ant-design/icons';

const listConversation = [
  {
    key: 1,
    mainCharacter: true,
    content:
      'ぼくが　みた　ゆめの　はなしは　これで　おしまい。でも、のうポンが　おしえてくれた　からだの　なかで　おきている　できごとは、ほんとうの　ことなんだ！'
  },
  {
    key: 'storyteller-1',
    isStoryteller: true,
    content:
      'いまも、みんなの　からだの　なかでは、のう、い、ちょう…いろいろな　ぞうきが　がんばって　うごいてくれて　いるのです'
  },

  {
    key: 2,
    mainCharacter: true,
    content:
      'きみも、じぶんの　からだを　たいせつにして、げんきに　すごしてね！'
  },
  {
    key: 'storyteller-2',
    isStoryteller: true,
    content: 'おしまい'
  }
];

const EndOfStory = () => {
  const navigate = useNavigate();
  const [indexMessage, setindexMessage] = useState(0);

  return (
    <Wrapper>
      <video autoPlay muted loop className='video' playsInline>
        <source src='/images/skyStar.mp4' type='video/mp4' />
      </video>

      <EndOfStoryWrapper>
        {listConversation.map((item, idx) => {
          return indexMessage === idx ? (
            item.isStoryteller ? (
              <div className='storyteller h-fit'>{item.content}</div>
            ) : (
              <div key={idx + 1} className='relative'>
                <div className='w-full'>
                  <model-viewer
                    class='h-[50vh]'
                    id='hotspot-camera-view-demo'
                    poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
                    src={process.env.PUBLIC_URL + '/models/comission_230717'}
                    shadow-intensity='1'
                    autoplay
                    disable-tap
                    interaction-prompt='none'
                    camera-controls
                    disable-zoom
                  ></model-viewer>
                </div>

                <div
                  className={`content absolute left-1/2 -translate-x-1/2 top-[47vh] `}
                  dangerouslySetInnerHTML={{
                    __html: item.content
                  }}
                />
              </div>
            )
          ) : null;
        })}
        <div className='slider'>
          <div className='slides justify-between'>
            <div
              className='cursor-pointer  d-flex items-center  lg:w-20 w-10'
              onClick={() => {
                navigate(ROUTE_PATH.FINAL_CHAPTER);
              }}
            >
              <IconPreviousStage />
            </div>

            <div className='d-flex'>
              {indexMessage !== 0 ? (
                <div
                  className='cursor-pointer  mr-4 lg:w-20 w-10'
                  onClick={() => {
                    setindexMessage(0);
                    setindexMessage(indexMessage - 1);
                  }}
                >
                  <ICON_LEFT />
                </div>
              ) : (
                <div className='lg:w-20 w-10  mr-4' />
              )}

              <div className='d-flex items-center w-[80px]'>
                <div
                  className='text-center w-full p-1 opacity-div lg:text-[16px] text-[14px]'
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
                  className='cursor-pointer  ml-4 lg:w-20 w-10'
                  onClick={() => {
                    setindexMessage(indexMessage + 1);
                  }}
                >
                  <ICON_RIGHT />
                </div>
              ) : (
                <div className='lg:w-20 w-10 ml-4' />
              )}
            </div>
            <div className='cursor-pointer  d-flex items-center  lg:w-20 w-10' />
          </div>
        </div>
        <div className='absolute top-[1rem] right-[1rem]'>
          <div
            className='flex items-center justify-center rounded-full bg-white cursor-pointer w-[44px] h-[44px]'
            onClick={() => {
              navigate(ROUTE_PATH.HOME);
            }}
          >
            <CloseOutlined />
          </div>
        </div>
      </EndOfStoryWrapper>
    </Wrapper>
  );
};

export default EndOfStory;
