import { CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICON_LEFT, IconPreviousStage } from '~/assets/icons/left';
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
    key: 1,
    mainCharacter: true,
    content: 'この　へやは、こうじょうみたいだね'
  },
  {
    key: 2,
    content:
      'ここは　ちょう。おへその　したあたりに　ある　へやなんだ。この、むらさきいろの　ところが　しょうちょう。こっちの　ちゃいろの　ところが　だいちょう'
  },
  {
    key: 3,
    mainCharacter: true,
    content: 'どんな　ちがいが　あるの？'
  },
  {
    key: 4,
    content:
      'まず、しょうちょうは、いから　はこばれてきた　たべものの　えいようを、どんどん　とりいれて　いくんだ'
  },
  {
    key: 5,
    mainCharacter: true,
    content: 'へえ〜。<br/>あっ、あそこで　うごいている　ものは　なに？'
  },
  {
    key: 6,
    content:
      'ここで、からだに　ひつような　えいようと　いらない　のこりかすを、さらに　こまかく　わけて　いるんだ'
  },
  {
    key: 7,
    mainCharacter: true,
    content: 'ここで　はんだんして　わけてくれるの？　すご〜い'
  },
  {
    key: 8,
    content: 'ほら！ロボットアームが　えいようを　とっているのがわかるでしょ！'
  },

  {
    key: 10,
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
    mainCharacter: true,
    content: 'ウンチ！？　はずかしい！'
  },
  {
    key: 12,
    content:
      'なに　いってるの。ウンチを　つくって　からだの　そとへ　だすのは、ぼくたちの　からだに　とっても　たいせつな　ことなんだよ'
  },
  {
    key: 13,
    mainCharacter: true,
    content: 'そっか〜…'
  },
  {
    key: 'storyteller-3',
    isStoryteller: true,
    content:
      'すると、タケシくんの　おなかから　「キュルキュル」と　おとが　きこえてきました. '
  },

  {
    key: 15,
    mainCharacter: true,
    content: 'あれれ？おなかから　おとがきこえてきたよ！'
  },
  {
    key: 16,
    content:
      'いまのは、ちょうが　たべものを　はこぶために　うごいている　おと。たべものや　くうきが　そこを　とおる　ときに、おなかが　なるんだよ'
  },
  {
    key: 17,
    mainCharacter: true,
    content: 'じゃあ、おなかが　すく　ときに、グーッて　なるのは？'
  },
  {
    key: 18,
    content:
      'いの　なかに　たべものが　ないから、くうきが　ちょうへと　うごく。その　とき、いの　せまい　でぐちから　ちょうへ　くうきが　うごくため、おなかが　なるんだよ。ふくらませた　ふうせんの　くうきが　ぬけるのと　おなじだね'
  },
  {
    key: 'storyteller-4',
    isStoryteller: true,
    content:
      'えいようとすいぶんを　とりのぞいた　たべものの　のこりかすが、ウンチに　なって　いきます'
  },

  {
    key: 19,
    content:
      'ウンチを　そとに　だす　ための　じゅんびを　しているんだ。あそこに　でぐちが　みえるでしょ？'
  },
  {
    key: 20,
    content:
      'この　でぐちは　こうもん。おしりの　あなだね。ここから　ウンチが　でるんだよ。スッキリするね！'
  },
  {
    key: 'storyteller-5',
    isStoryteller: true,
    content: 'こうもんから、ウンチが　そとへ　でて　いきます。'
  },

  {
    key: 21,
    mainCharacter: true,
    content: 'ウ〜ン、スッキリ！'
  },
  {
    key: 22,
    mainCharacter: true,
    content:
      'たべものを　たべてから、ウンチに　なって　でて　いくまで、からだの　なかで　いろいろな　ことが　おきているんだね'
  },
  {
    key: 23,
    content: 'そう。ぼくたちの　からだは、いつも　がんばって　くれているんだ'
  },
  {
    key: 24,
    mainCharacter: true,
    content:
      'でも、ウンチや　おならを　がまんすると、おなかが　いたくなるのは　なんで？'
  },
  {
    key: 25,
    content:
      'いや　ちょうは、ごはんを　たべた　あと、たべものを　ちょうに　はこんで　ウンチを　つくるために　はたらいているんだ。ちょうに　おならや　くうきが　たくさん　あると、はたらきが　はげしくなって　いたみを　かんじるんだ。おならや　ウンチを　だすと、ちょうが　あんしんして　いたみが　なくなるよ'
  },
  {
    key: 26,
    mainCharacter: true,
    content:
      'だから、おならや　ウンチは　がまんしないで　だしたほうが　いいんだね！'
  },
  {
    key: 27,
    content: 'そのとおり。わかってくれて　うれしいよ。'
  }
];

const ModelIntestine = () => {
  const navigate = useNavigate();
  const [viewFocus, setViewFocus] = useState(0);
  const [indexMessage, setindexMessage] = useState(0);
  const listCamOrbit = [
    '-686.9deg 66.18deg 1.721m',
    '419.7deg 45.51deg 1.204m',
    '78.75deg 58.38deg 1.612m',
    '42.51deg 87.48deg 1.492m'
  ];
  const fieldOfView = ['30deg', '12deg', '23.88deg', '22.98deg'];

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
        id='hotspot-camera-view-demo'
        poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
        src={process.env.PUBLIC_URL + '/models/intestine_06.glb'}
        // scale='0.2 0.2 0.2'
        ar
        ar-modes='webxr scene-viewer quick-look'
        camera-controls
        disable-tap
        interaction-prompt='none'
        autoplay
        // camera-target={cameraTarget[viewFocus]}
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
            <div className='w-full d-flex justify-center p-4  absolute top-5'>
              <div className='storyteller'>{item.content}</div>
            </div>
          ) : (
            <div
              key={idx + 1}
              className={`box-message d-flex absolute ${
                item.mainCharacter ? 'left-0' : 'right-0'
              }  ${
                idx < 6 || (idx >= 13 && idx < 23)
                  ? 'lg:bottom-32 md:bottom-24 bottom-14'
                  : 'lg:top-20 top-12 right-2'
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
            className='cursor-pointer  d-flex items-center  lg:w-20 w-14'
            onClick={() => {
              navigate(ROUTE_PATH.MODEL_STOMACH);
            }}
          >
            <IconPreviousStage />
          </div>

          <div className='d-flex'>
            {indexMessage !== 0 ? (
              <div
                className='cursor-pointer  mr-6 lg:w-20 w-14'
                onClick={() => {
                  setindexMessage(0);
                  setindexMessage(indexMessage - 1);
                  if (
                    indexMessage === 6 ||
                    indexMessage === 13 ||
                    indexMessage === 23
                  )
                    setViewFocus(viewFocus - 1);
                }}
              >
                <ICON_LEFT />
              </div>
            ) : (
              <div className='lg:w-20 w-14 mr-4' />
            )}
            <div className='d-flex items-center w-[110px]'>
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
                className='cursor-pointer  ml-4  lg:w-20 w-14'
                onClick={() => {
                  setindexMessage(indexMessage + 1);
                  if (
                    indexMessage === 5 ||
                    indexMessage === 12 ||
                    indexMessage === 22
                  )
                    setViewFocus(viewFocus + 1);
                }}
              >
                <ICON_RIGHT />
              </div>
            ) : (
              <div className='lg:w-20 w-14 ml-6' />
            )}
          </div>

          <div className=' lg:w-20 w-14' />
        </div>
      </div>
    </ModelIntestineWrapper>
  );
};

export default ModelIntestine;
