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
import { ModelIntestineWrapper } from './styled';

const listConversation = [
  {
    key: 'storyteller-1',
    isStoryteller: true,
    content: 'タケシくんと　のうポンは、ちょうの　へやへ　やってきました'
  },

  {
    key: 2,
    indexAction: 2,
    mainCharacter: true,
    content: 'この　へやは、こうじょうみたいだね'
  },
  {
    key: 3,
    indexAction: 2,
    content:
      'ここは　ちょう。おへその　したあたりに　ある　へやなんだ。この、むらさきいろの　ところが　しょうちょう。こっちの　ちゃいろの　ところが　だいちょう'
  },
  {
    key: 4,
    indexAction: 3,
    mainCharacter: true,
    content: 'どんな　ちがいが　あるの？'
  },
  {
    key: 5,
    indexAction: 2,
    content:
      'まず、しょうちょうは、いから　はこばれてきた　たべものの　えいようを、どんどん　とりいれて　いくんだ'
  },
  {
    key: 6,
    indexAction: 2,
    mainCharacter: true,
    content: 'へえ〜。<br/>あっ、あそこで　うごいている　ものは　なに？'
  },
  {
    key: 7,
    indexAction: 2,
    content:
      'ここで、からだに　ひつような　えいようと　いらない　のこりかすを、さらに　こまかく　わけて　いるんだ'
  },
  {
    key: 8,
    indexAction: 3,
    mainCharacter: true,
    content: 'ここで　はんだんして　わけてくれるの？　すご〜い'
  },
  {
    key: 9,
    indexAction: 3,
    content: 'ほら！ロボットアームが　えいようを　とっているのがわかるでしょ！'
  },

  {
    key: 10,
    indexAction: 2,
    content:
      'しょうちょうで　ひつような　えいようを　とったあとの　のこりかすが　はこばれるのが、だいちょうなんだ。のこりかすから　みずを　からだの　なかに　とりいれた　あと、ウンチを　つくるんだ'
  },
  {
    key: 'storyteller-2',
    isStoryteller: true,
    content: 'ウンチと　きいて、タケシくんは　まっかに　なりました。'
  },

  {
    key: 11,
    indexAction: 4,
    mainCharacter: true,
    content: 'ウンチ！？　はずかしい！'
  },
  {
    key: 12,
    indexAction: 3,
    content:
      'なに　いってるの。ウンチを　つくって　からだの　そとへ　だすのは、ぼくたちの　からだに　とっても　たいせつな　ことなんだよ'
  },
  {
    key: 13,
    indexAction: 4,
    mainCharacter: true,
    content: 'そっか〜…'
  },
  {
    key: 'storyteller-3',
    isStoryteller: true,
    content:
      'すると、タケシくんの　おなかから　「キュルキュル」と　おとが　きこえてきました。'
  },

  {
    key: 15,
    indexAction: 2,
    mainCharacter: true,
    content: 'あれれ？おなかから　おとがきこえてきたよ！'
  },
  {
    key: 16,
    indexAction: 2,
    content:
      'いまのは、ちょうが　たべものを　はこぶために　うごいている　おと。たべものや　くうきが　そこを　とおる　ときに、おなかが　なるんだよ'
  },
  {
    key: 17,
    indexAction: 2,
    mainCharacter: true,
    content: 'じゃあ、おなかが　すく　ときに、グーッて　なるのは？'
  },
  {
    key: 18,
    indexAction: 2,
    content:
      'いの　なかに　たべものが　ないから、くうきが　ちょうへと　うごく。<br/>その　とき、いの　せまい　でぐちから　ちょうへ　くうきが　うごくため、おなかが　なるんだよ。ふくらませた　ふうせんの　くうきが　ぬけるのと　おなじだね'
  },
  {
    key: 'storyteller-4',
    isStoryteller: true,
    content:
      'えいようとすいぶんを　とりのぞいた　たべものの　のこりかすが、ウンチに　なって　いきます'
  },

  {
    key: 19,
    indexAction: 2,
    content:
      'ウンチを　そとに　だす　ための　じゅんびを　しているんだ。<br/> あそこに　でぐちが　みえるでしょ？'
  },
  {
    key: 20,
    indexAction: 3,
    content:
      'この　でぐちは　こうもん。おしりの　あなだね。<br/>ここから　ウンチが　でるんだよ。スッキリするね！'
  },
  {
    key: 'storyteller-5',
    isStoryteller: true,
    content: 'こうもんから、ウンチが　そとへ　でて　いきます。'
  },

  {
    key: 21,
    indexAction: 3,
    mainCharacter: true,
    content: 'ウ〜ン、スッキリ！'
  },
  {
    key: 22,
    indexAction: 2,
    mainCharacter: true,
    content:
      'たべものを　たべてから、ウンチに　なって　でて　いくまで、からだの　なかで　いろいろな　ことが　おきているんだね'
  },
  {
    key: 23,
    indexAction: 3,
    content: 'そう。ぼくたちの　からだは、いつも　がんばって　くれているんだ'
  },
  {
    key: 24,
    indexAction: 2,
    mainCharacter: true,
    content:
      'でも、ウンチや　おならを　がまんすると、おなかが　いたくなるのは　なんで？'
  },
  {
    key: 25,
    indexAction: 2,
    content:
      'いや　ちょうは、ごはんを　たべた　あと、たべものを　ちょうに　はこんで　ウンチを　つくるために　はたらいているんだ。'
  },
  {
    key: 26,
    indexAction: 2,
    content:
      'ちょうに　おならや　くうきが　たくさん　あると、はたらきが　はげしくなって　いたみを　かんじるんだ。'
  },
  {
    key: 27,
    indexAction: 2,
    content:
      'おならや　ウンチを　だすと、ちょうが　あんしんして　いたみが　なくなるよ'
  },
  {
    key: 28,
    indexAction: 3,
    mainCharacter: true,
    content:
      'だから、おならや　ウンチは　がまんしないで　だしたほうが　いいんだね！'
  },
  {
    key: 29,
    indexAction: 3,
    content: 'そのとおり。わかってくれて　うれしいよ。'
  }
];

const ModelIntestine = () => {
  const navigate = useNavigate();
  const [viewFocus, setViewFocus] = useState(0);
  const [indexMessage, setindexMessage] = useState(0);
  const listCamOrbit = [
    '40.79deg 69.85deg 1.721m',
    '50.34deg 56.52deg 1.399m',
    '49.51deg 64.7deg 1.199m',
    '45.94deg 59.95deg 1.2m',
    '43.57deg 53.22deg 1.385m'
  ];
  const listCamTarget = [
    '',
    '-0.17m 0.25m 0.05m',
    '0.17m 0.16m 0.39m',
    '-0.11m 0.09m 0.32m',
    '0.16m 0.04m 0.21m'
  ];
  const fieldOfView = [
    '35.5deg',
    '18.27deg',
    '22.98deg',
    '18.12deg',
    '20.11deg'
  ];

  return (
    <ModelIntestineWrapper>
      <div className={'absolute left-5 md:left-auto md:right-5 top-5 z-50'}>
        <div
          className='flex items-center justify-center rounded-full bg-[#dfdfdf33]  sm:bg-[#dfdfdf] cursor-pointer w-[40px] h-[40px]'
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
        id='hotspot-camera-view-demo'
        poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
        src={process.env.PUBLIC_URL + '/models/intestine_06.glb'}
        ios-src={process.env.PUBLIC_URL + '/models/intestine_06.usdz'}
        ar
        ar-modes='webxr scene-viewer quick-look'
        camera-controls
        disable-tap
        interaction-prompt='none'
        autoplay
        camera-orbit={listCamOrbit[viewFocus]}
        camera-target={listCamTarget[viewFocus]}
        field-of-view={fieldOfView[viewFocus]}
        min-camera-orbit='-10deg 0deg auto'
        max-camera-orbit='100deg 100deg auto'
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
            <div className='w-full d-flex justify-center  mt-4 px-4   absolute top-5'>
              <div className='storyteller'>{item.content}</div>
            </div>
          ) : (
            <div
              key={idx + 1}
              className={`box-message d-flex absolute ${
                item.mainCharacter ? 'left-0' : 'right-0'
              }  ${
                idx < 6 || (idx >= 9 && idx < 14) || idx >= 19
                  ? 'lg:bottom-32 md:bottom-24 bottom-14'
                  : 'lg:top-20 top-12 right-2'
              }`}
            >
              <Conversation
                indexAction={item?.indexAction}
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
              navigate(ROUTE_PATH.MODEL_STOMACH);
            }}
          >
            <IconPreviousStage />
          </div>

          <div className='d-flex'>
            {indexMessage !== 0 ? (
              <div
                className='cursor-pointer  mr-6 lg:w-20 w-10'
                onClick={() => {
                  setindexMessage(indexMessage - 1);
                  if (
                    indexMessage === 6 ||
                    indexMessage === 9 ||
                    indexMessage === 14 ||
                    indexMessage === 19
                  )
                    setViewFocus(viewFocus - 1);
                }}
              >
                <ICON_LEFT />
              </div>
            ) : (
              <div className='lg:w-20 w-10 mr-4' />
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
                className='cursor-pointer  ml-4  lg:w-20 w-10'
                onClick={() => {
                  setindexMessage(indexMessage + 1);
                  if (
                    indexMessage === 5 ||
                    indexMessage === 8 ||
                    indexMessage === 13 ||
                    indexMessage === 18
                  )
                    setViewFocus(viewFocus + 1);
                }}
              >
                <ICON_RIGHT />
              </div>
            ) : (
              <div className='lg:w-20 w-10 ml-6' />
            )}
          </div>

          <div
            className='cursor-pointer  d-flex items-center  lg:w-20 w-10'
            onClick={() => {
              navigate(ROUTE_PATH.FINAL_CHAPTER);
            }}
          >
            <IconNextStage />
          </div>
        </div>
      </div>
    </ModelIntestineWrapper>
  );
};

export default ModelIntestine;
