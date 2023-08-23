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
import { ModelCharacterWrapper } from './styled';
import Conversation from '~/components/Conversation';

const listConversation = [
  {
    key: 1,
    content: 'うわ～、なんかプールみたい！泳いじゃってもいい？？'
  },
  {
    key: 2,
    content:
      'だめだめ！それはやめたほうがいいよ！ここは「胃」というところで、元気くんの体の中にあるんだけどおへその上くらいかな？'
  },
  {
    key: 3,
    content:
      '僕の体の中に胃ってあるんだ？見たことないからわからないや胃ってどういう所なの？'
  },
  {
    key: 4,
    content: '元気くんは、お肉やおさかなやリンゴとかモリモリ食べてるよね？'
  },
  {
    key: 5,
    content:
      'うん、ご飯大好き！お父さん、お母さんからもたくさん食べると大きくなれるって言われているからね'
  },
  {
    key: 6,
    content:
      'えらいえらい！元気くんが食べたものが口から食道というところを通ってここ、胃に届くんだ'
  },
  {
    key: 7,
    content: 'あの入り口のきれいなシャワーはなに？'
  },
  {
    key: 8,
    content:
      'えらいえらい！元気くんが食べたものが口から食道というところを通ってここ、胃に届くんだ'
  },
  {
    key: 9,
    content:
      'シャワーから出ているのは胃液と言うんだ。胃液は胃に入ってきたものをどんどん溶かしていくよ。'
  },

  {
    key: 10,
    content: '溶かしてどうするの？'
  },

  {
    key: 11,
    content: '食べ物から栄養を取り出すためだよ。'
  },

  {
    key: 12,
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
    content: 'さっき食べたんだよ！'
  },
  {
    key: 15,
    content: 'しっかり噛んでいないでしょ。わかっちゃうよ。'
  },
  {
    key: 16,
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
    content:
      'そっか。ちゃんともぐもぐ噛むと、美味しいなーってずっと思えるもんね。やっぱりちゃんと噛むよ！'
  },
  {
    key: 19,
    content:
      'そうそう。美味しいなって思えると、食べ過ぎないから体にいいんだ。それに、よく噛むと歯が健康になるし、噛むことで頭の中にある脳に血がめぐりやすくなって脳が元気になるんだ（脳くんぐるぐる回る）'
  }
];

const ModelCharacter = () => {
  const navigate = useNavigate();
  const [indexMessage, setindexMessage] = useState(0);
  return (
    <ModelCharacterWrapper>
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
      <model-viewer
        class='w-full relative !h-[100vh]'
        id='hotspot-camera-view-demo'
        poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
        src={process.env.PUBLIC_URL + '/models/comission_230717'}
        // scale='0.2 0.2 0.2'
        shadow-intensity='1'
        camera-controls
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
              navigate(ROUTE_PATH.MODEL_TOKYO);
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
                }}
              >
                <ICON_LEFT />
              </div>
            ) : (
              <div style={{ width: '50px' }} />
            )}
            <div className='d-flex items-center w-[80px]'>
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

          <div
            className='cursor-pointer  d-flex items-center'
            onClick={() => {
              navigate(ROUTE_PATH.MODEL_BRAIN);
            }}
          >
            <IconNextStage />
          </div>
        </div>
      </div>
    </ModelCharacterWrapper>
  );
};

export default ModelCharacter;
