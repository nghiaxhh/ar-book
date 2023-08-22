import { CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICON_LEFT, IconNextStage } from '~/assets/icons/left';
import { ICON_RIGHT } from '~/assets/icons/right';
import Conversation from '~/components/Conversation';
import { ROUTE_PATH } from '~/routes/route.constant';
import { ModelLifeTokyoWrapper } from './styled';

const listConversation = [
  {
    key: 1,
    content:
      'これって夢見たこともない部屋に迷い込んじゃったみたいここはどこだろう'
  },
  {
    key: 2,
    content: 'ここは元気くんの頭の中ですよ'
  },
  {
    key: 3,
    content: 'あなたは誰？'
  },
  {
    key: 4,
    content:
      '僕は脳の妖精「のうポン」だよみんなの頭の中にいるんだけど、夢の中だけに出てこれるんだよ'
  },
  {
    key: 5,
    content: 'やっぱり夢の中だったんだ'
  },
  {
    key: 6,
    content:
      '僕は、元気くんをいつも見てるんだけど、元気に勉強して遊んでるねこれからも元気に大きくなってほしいから、体の中を案内したいんだ'
  },
  {
    key: 7,
    content:
      '今日は 食べることが大好きな 元気くん が食べたものが体の中でどうなっていくのか案内しマス！'
  },
  {
    key: 8,
    content: 'えーそんなことできるの？'
  },
  {
    key: 9,
    content: '夢の中なら何でも ありデス'
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

const ModelLifeTokyo = () => {
  const navigate = useNavigate();
  const [indexMessage, setindexMessage] = useState(0);

  return (
    <ModelLifeTokyoWrapper>
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
        style={{ height: '40rem' }}
        id='hotspot-camera-view-demo'
        poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
        src={process.env.PUBLIC_URL + '/models/LittlestTokyo.glb'}
        // scale='0.2 0.2 0.2'
        // shadow-intensity='1'
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
          <div className='text-loading text-2xl	font-bold'>Loading...</div>
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

            <div className='d-flex items-center w-[100px]'>
              <div
                className='text-center w-full p-1 '
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
    </ModelLifeTokyoWrapper>
  );
};

export default ModelLifeTokyo;
