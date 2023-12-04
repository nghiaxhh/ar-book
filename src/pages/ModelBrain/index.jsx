import { CloseOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICON_LEFT, IconNextStage } from '~/assets/icons/left';
import { ICON_RIGHT } from '~/assets/icons/right';
import Conversation from '~/components/Conversation';
import { ROUTE_PATH } from '~/routes/route.constant';
import { ModelBrainWrapper } from './styled';

const listConversation = [
  {
    key: 'storyteller-1',
    isStoryteller: true,
    content: 'タケシくんが　きづくと、見たこともない　へや　にいました'
  },

  {
    key: 1,
    mainCharacter: true,
    content: 'あれれ？　ここは　どこ？　ぼくは　ベッドで　ねていた　はずなのに…'
  },
  {
    key: 'storyteller-2',
    isStoryteller: true,
    content: 'すると、どこからか　こえが　きこえて　きました'
  },
  {
    key: 2,
    content: 'ポンばんわ、タケシくん！'
  },
  {
    key: 'storyteller-3',
    isStoryteller: true,
    content: 'とつぜん　あらわれたのは、ふしぎな　いきもの。'
  },

  {
    key: 3,
    mainCharacter: true,
    content: 'きみ、だあれ？'
  },
  {
    key: 4,
    content:
      'ぼくは　のうポン。ぞうきの　ようせい　『からだっポン』の　まとめやく、ものしりな　のうの　ようせいさ'
  },
  {
    key: 5,
    mainCharacter: true,
    content: 'のうの　ようせい？'
  },
  {
    key: 6,
    content:
      'ぼくは、きみが　ゆめを　みている　とき、ゆめの　なかに　あらわれるんだ。きみと　こうして　おはなしすることも　できるんだよ'
  },

  {
    key: 7,
    mainCharacter: true,
    content: 'そうか。ぼくは、ゆめを　みているのか……'
  },
  {
    key: 8,
    content: 'そして　この　へやは、きみの　あたまの　なか！'
  },
  {
    key: 9,
    mainCharacter: true,
    content: 'ええ〜っ！？'
  },
  {
    key: 'storyteller-4',
    isStoryteller: true,
    content: 'へやを　みわたす　のうポン'
  },
  {
    key: 10,
    content:
      'ここは、タケシくんの　からだを　うごかすしれいしつ。かんがえたり　わらったり　ないたり　おこったりすることもね。'
  },
  {
    key: 'storyteller-5',
    isStoryteller: true,
    content: 'かんがえる　たけしくん'
  },
  {
    key: 11,
    mainCharacter: true,
    content: 'う～ん。どういうことか　わかんないよ～。'
  },
  {
    key: 12,
    content:
      'たけしくんには　まだ　ちょっとむずかしいかな。　また　こんど　くわしく　せつめいすることにしよう。'
  },
  {
    key: 13,
    content:
      'そこで　きょうは、いまから　きみの　からだの　なかを　たんけんしようと　おもっているんだけど　どうかな？'
  },
  {
    key: 14,
    mainCharacter: true,
    content: 'ええっ、ぼくの　からだの　なか！？'
  },
  {
    key: 15,
    content:
      'タケシくんが　たべた　ものが　からだの　なかで　どうなっているのか。 <br/>   おなかが　いたく　なったとき、からだの　なかで　なにが　おこっているのか。しりたくない？'
  },
  {
    key: 16,
    mainCharacter: true,
    content:
      'しりたい！　じぶんの　からだの　なかを　たんけんできるなんて、ワクワクしちゃう！'
  },
  {
    key: 17,
    content: 'よーし。それじゃあ、レッツゴー！'
  },
  {
    key: 18,
    mainCharacter: true,
    content: 'ええ〜っ！？もう　しゅっぱつするの～！？'
  }
];

const ModelBrain = () => {
  const navigate = useNavigate();
  const modelViewerRef = useRef(null);
  const [viewFocus, setViewFocus] = useState(0);
  const [indexMessage, setindexMessage] = useState(0);

  const listCamOrbit = [
    '0deg 75deg 3.162m',
    '38.02deg 76.19deg 3.162m',
    '-37.23deg 76.19deg 3.162m',
    '0deg 75deg 3.162m'
  ];
  // const listCamTarget = ['', '-0.14m 0.22m -0.83m', '0.08m 0.06m -0.56m'];
  const fieldOfView = ['30deg', '30deg', '30deg', '30deg'];

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
        style={{
          height: '40rem',
          backgroundImage: `url(${
            process.env.PUBLIC_URL + '/images/viewer.png'
          })`
        }}
        id='model-viewer'
        ref={modelViewerRef}
        poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
        // src={process.env.PUBLIC_URL + '/models/hi.glb'}
        // ios-src={process.env.PUBLIC_URL + '/models/hi.usdz'}
        src={process.env.PUBLIC_URL + '/models/brain.glb'}
        ios-src={process.env.PUBLIC_URL + '/models/brain.usdz'}
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
        // camera-target={listCamTarget[viewFocus]}
        camera-orbit={listCamOrbit[viewFocus]}
        field-of-view={fieldOfView[viewFocus]}
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
                item.mainCharacter ? 'left-0' : 'right-0'
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
          <div className=' lg:w-20 w-10' />

          <div className='d-flex'>
            {indexMessage !== 0 ? (
              <div
                className='cursor-pointer  mr-4 lg:w-20 w-10'
                onClick={() => {
                  // setindexMessage(0)
                  setindexMessage(indexMessage - 1);
                  if (
                    indexMessage === 5 ||
                    indexMessage === 11 ||
                    indexMessage === 18
                  )
                    setViewFocus(viewFocus - 1);
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
                className='cursor-pointer   ml-4  lg:w-20 w-10'
                onClick={() => {
                  setindexMessage(indexMessage + 1);
                  if (
                    indexMessage === 4 ||
                    indexMessage === 10 ||
                    indexMessage === 16
                  )
                    setViewFocus(viewFocus + 1);
                }}
              >
                <ICON_RIGHT />
              </div>
            ) : (
              <div className='lg:w-20 w-10  ml-4' />
            )}
          </div>

          <div
            className='cursor-pointer  d-flex items-center  lg:w-20 w-10'
            onClick={() => {
              navigate(ROUTE_PATH.MODEL_STOMACH);
            }}
          >
            <IconNextStage />
          </div>
        </div>
      </div>
    </ModelBrainWrapper>
  );
};

export default ModelBrain;
