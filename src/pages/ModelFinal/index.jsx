import { CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ICON_LEFT,
  IconNextStage,
  IconPreviousStage
} from '~/assets/icons/left';
import { ICON_RIGHT } from '~/assets/icons/right';
import Conversation from '~/components/Conversation';
import { ROUTE_PATH } from '~/routes/route.constant';
import { ModelFinalWrapper } from './styled';

const listConversation = [
  {
    key: 'storyteller-1',
    isStoryteller: true,
    content: 'たけしくんと　のうポンは、のうのへやにもどってきました'
  },

  {
    key: 1,
    mainCharacter: true,
    content:
      'たべものを　たべてから、ウンチに　なって　でて　いくまで、からだの　なかで　いろいろな　ことが　おきているんだね'
  },

  {
    key: 2,
    content: 'そう。ぼくたちの　からだは、いつも　がんばって　くれているんだ。'
  },

  {
    key: 4,
    content:
      'たけしくん。きょうのぼうけんから、あしたから　きをつけなきゃいけないこと　おぼえているかな？'
  },
  {
    key: 5,
    mainCharacter: true,
    content:
      'うん！たべものは、よくかんでたべること。それと、おならやウンチはがまんしないことでしょ！'
  },
  {
    key: 6,
    content:
      'そう！そのとおり！おぼえてくれていて　うれしいよ！<br/>あっ！もう　おきるじかんがちかづいてきたみたい。たけしくん　またあおうね！'
  },

  {
    key: 'storyteller-4',
    isStoryteller: true,
    content: 'のうポンはす～っときえてしまいました。'
  },

  {
    key: 11,
    mainCharacter: true,
    content: 'あれれ？のうポンどこに行ったの！？のうポン！のうポ～ン！…'
  }
];

const ModelFinal = () => {
  const navigate = useNavigate();
  const [indexMessage, setindexMessage] = useState(0);

  return (
    <ModelFinalWrapper>
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
        style={{
          height: '40rem',
          backgroundImage: `url(${
            process.env.PUBLIC_URL + '/images/viewer.png'
          })`
        }}
        id='model-viewer'
        poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
        src={process.env.PUBLIC_URL + '/models/brain.glb'}
        touch-action='pan-y'
        shadow-intensity='1'
        xr-environment
        camera-controls
        ar-modes='webxr scene-viewer quick-look'
        ar
        min-camera-orbit='-50deg 0deg auto'
        max-camera-orbit='50deg 100deg auto'
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
      </model-viewer>
      {listConversation.map((item, idx) => {
        return indexMessage === idx ? (
          item.isStoryteller ? (
            <div className='w-full d-flex justify-center mt-4 px-4 absolute top-5'>
              <div className='storyteller'>{item.content}</div>
            </div>
          ) : (
            <div
              key={idx + 1}
              className={` box-message d-flex absolute bottom-28 ${
                item.mainCharacter ? 'right-0' : 'left-0'
              }`}
            >
              <Conversation
                content={item.content}
                type={item.mainCharacter ? 1 : 2}
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
              navigate(ROUTE_PATH.MODEL_INTESTINE);
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
          <div
            className='cursor-pointer  d-flex items-center  lg:w-20 w-10'
            onClick={() => {
              navigate(ROUTE_PATH.END_OF_SROTY);
            }}
          >
            <IconNextStage />
          </div>
        </div>
      </div>
    </ModelFinalWrapper>
  );
};

export default ModelFinal;
