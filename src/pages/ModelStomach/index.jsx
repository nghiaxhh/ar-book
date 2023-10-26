import { CloseOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ICON_LEFT,
  IconNextStage,
  IconPreviousStage
} from '~/assets/icons/left';
import { ICON_RIGHT } from '~/assets/icons/right';
import { ROUTE_PATH } from '~/routes/route.constant';
import { ModalStomachWrapper } from './styled';
import Conversation from '~/components/Conversation';

const listConversation = [
  {
    key: 1,
    mainCharacter: true,
    content: 'うわ～、なんかプールみたい！<br />泳いじゃってもいい？？'
  },
  {
    key: 2,
    content:
      'だめだめ！それはやめたほうがいいよ！<br />ここは「胃」というところで、元気くんの体の中にあるんだけどおへその上くらいかな？'
  },
  {
    key: 3,
    mainCharacter: true,
    content:
      '僕の体の中に胃ってあるんだ？見たことないからわからないや<br />胃ってどういう所なの？'
  },
  {
    key: 4,
    content: '元気くんは、お肉やおさかなやリンゴとかモリモリ食べてるよね？'
  },
  {
    key: 5,
    mainCharacter: true,
    content:
      'うん、ご飯大好き！お父さん、お母さんからもたくさん食べると大きくなれるって言われているからね'
  },
  {
    key: 6,
    content:
      'えらいえらい！<br />元気くんが食べたものが口から食道というところを通ってここ、胃に届くんだ'
  },
  {
    key: 7,
    mainCharacter: true,
    content: 'あの入り口のきれいなシャワーはなに？'
  },

  {
    key: 9,
    content:
      'シャワーから出ているのは胃液と言うんだ。胃液は胃に入ってきたものをどんどん溶かしていくよ。'
  },

  {
    key: 10,
    mainCharacter: true,
    content: '溶かしてどうするの？'
  },

  {
    key: 11,
    content: '食べ物から栄養を取り出すためだよ。'
  },

  {
    key: 12,
    mainCharacter: true,
    content:
      'ふーん。あのプールの中でグルグル回っているの（プロペラが回る）、あれで食べ物と胃液がグルグル混ぜられているね。'
  },

  {
    key: 13,

    content:
      'その通り！　胃液と混ざった食べ物をプロペラがかき混ぜてドロドロにするんだ。あれ？　胃の中にりんごがぷかぷか浮いているね。'
  },

  {
    key: 14,
    mainCharacter: true,
    content: 'さっき食べたんだよ！'
  },
  {
    key: 15,

    content: 'しっかり噛んでいないでしょ。わかっちゃうよ。'
  },
  {
    key: 16,
    mainCharacter: true,
    content:
      'うーん。ごめんなさい。でも、なんでちゃんと噛まなきゃいけないの？　胃液とプロペラがあったら大丈夫じゃない？'
  },
  {
    key: 17,

    content:
      'しっかり噛まずに飲み込まれた食べ物を細かくするために、プロペラはいつもよりたくさん動かないといけないよね。そうすると胃が疲れちゃうでしょ？'
  },
  {
    key: 18,
    mainCharacter: true,
    content:
      'そっか。ちゃんともぐもぐ噛むと、美味しいなーってずっと思えるもんね。やっぱりちゃんと噛むよ！'
  },
  {
    key: 19,
    content:
      'そうそう。美味しいなって思えると、食べ過ぎないから体にいいんだ。それに、よく噛むと歯が健康になるし、噛むことで頭の中にある脳に血がめぐりやすくなって脳が元気になるんだ（脳くんぐるぐる回る）'
  }
];

const ModalStomach = () => {
  const navigate = useNavigate();
  const [indexMessage, setindexMessage] = useState(0);
  const [viewFocus, setViewFocus] = useState(0);
  const ModelViewerElement = customElements.get('model-viewer');
  ModelViewerElement.minimumRenderScale = 1;

  const listCamOrbit = [
    '0deg 75deg 2.617m',
    '7.886deg 82.49deg 1.46m',
    '-28.78deg 22.5deg 1.732m'
  ];
  const fieldOfView = ['35.43deg', '12.19deg', '15.92deg'];

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
    <ModalStomachWrapper>
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
        id='hotspot-camera-view-demo'
        poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
        src={process.env.PUBLIC_URL + '/models/Stmach_06_2.glb'}
        // scale='0.2 0.2 0.2'
        shadow-intensity='1'
        ar-modes='webxr scene-viewer quick-look'
        camera-controls
        ar
        disable-tap
        interaction-prompt='none'
        autoplay
        camera-orbit={listCamOrbit[viewFocus]}
        field-of-view={fieldOfView[viewFocus]}
      >
        <div
          id='lazy-load-poster'
          slot='poster'
          className='h-full w-full relative'
        >
          {/* <div className='text-loading text-sm	font-bold'>Loading...</div> */}
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
            <div
              className='cursor-pointer d-flex items-center'
              onClick={() => {
                navigate(ROUTE_PATH.MODEL_ESOPHAGUS);
              }}
            >
              <IconPreviousStage />
            </div>

            <div className='d-flex justify-between w-full '>
              {indexMessage !== 0 ? (
                <div
                  className='cursor-pointer mx-6'
                  onClick={() => {
                    setindexMessage(0);
                    setindexMessage(indexMessage - 1);
                    if (indexMessage === 7 || indexMessage === 10)
                      setViewFocus(viewFocus - 1);
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
                  className='cursor-pointer mx-6'
                  onClick={() => {
                    setindexMessage(indexMessage + 1);
                    if (indexMessage === 6 || indexMessage === 9)
                      setViewFocus(viewFocus + 1);
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
                navigate(ROUTE_PATH.MODEL_INTESTINE);
              }}
            >
              <IconNextStage />
            </div>
          </div>
        </div>
      </model-viewer>
    </ModalStomachWrapper>
  );
};

export default ModalStomach;
