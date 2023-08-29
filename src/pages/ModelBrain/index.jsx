import { CloseOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICON_LEFT, IconNextStage } from '~/assets/icons/left';
import { ICON_RIGHT } from '~/assets/icons/right';
import Conversation from '~/components/Conversation';
import { ROUTE_PATH } from '~/routes/route.constant';
import { ModelBrainWrapper } from './styled';

const listConversation = [
  {
    key: 1,
    mainCharacter: true,
    content:
      'これって夢？<br/>見たこともない部屋に迷い込んじゃったみたい<br/>ここはどこだろう'
  },
  {
    key: 2,
    content: 'ここは元気くんの頭の中ですよ'
  },
  {
    key: 3,
    mainCharacter: true,
    content: 'あなたは誰？'
  },
  {
    key: 4,
    content:
      '僕は脳の妖精「のうポン」だよみんなの頭の中にいるんだけど、夢の中だけに出てこれるんだよ'
  },
  {
    key: 5,
    mainCharacter: true,
    content: 'やっぱり夢の中だったんだ'
  },
  {
    key: 6,
    content:
      '僕は、元気くんをいつも見てるんだけど、元気に勉強して遊んでるね<br/>これからも元気に大きくなってほしいから、体の中を案内したいんだ'
  },
  {
    key: 7,

    content:
      '今日は 食べることが大好きな 元気くん が食べたものが体の中でどうなっていくのか案内しマス！'
  },
  {
    key: 8,
    mainCharacter: true,
    content: 'えーそんなことできるの？'
  },
  {
    key: 9,
    content: '夢の中なら何でも ありデス'
  }
];

const ModelBrain = () => {
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
  }, []);

  return (
    <ModelBrainWrapper>
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
        src={process.env.PUBLIC_URL + '/models/brain.glb'}
        // scale='0.2 0.2 0.2'
        shadow-intensity='1'
        camera-controls
        ar-modes='webxr scene-viewer quick-look'
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
            <div className='w-[80px]' />
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
                  className='text-center w-full p-1 opacity-div'
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
                navigate(ROUTE_PATH.MODEL_ESOPHAGUS);
              }}
            >
              <IconNextStage />
            </div>
          </div>
        </div>
      </model-viewer>
    </ModelBrainWrapper>
  );
};

export default ModelBrain;
