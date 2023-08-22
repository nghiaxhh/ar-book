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
import Conversation from '~/components/Conversation';
import { ModalBrainWrapper } from './styled';

const listConversation = [
  {
    key: 1,
    content: 'ここはどこなの？なんか工場みたいだけど'
  },
  {
    key: 2,
    content: 'ここは腸だよ？'
  },
  {
    key: 3,
    content: '腸？'
  },
  {
    key: 4,
    content:
      'さっき胃で食べ物がドロドロになっていたでしょ？そのドロドロのなかから体に必要なものを体に戻して（柔毛アームが動く）、余った要らないものをぎゅっと（ウンチプレス機が動く）まとめてウンチにして体に送り出す（肛門が開いてウンチがポンと飛び出す）のが腸の役目なんだ'
  },
  {
    key: 5,
    content: 'ウンチ…　言うのは恥ずかしいし、僕の体の中で作ってるなんて…'
  },
  {
    key: 6,
    content:
      'はずかしくもなんともないよ！ウンチが出るってとっても大事なこと。余ったいらないものが体の中に溜まり続けたら？'
  },
  {
    key: 7,
    content:
      'そうかもしれない。ところで、入り口の近くにる、ロボットの腕みたいなのは何だろう？？（柔毛アームが動く）'
  },
  {
    key: 8,
    content:
      'それは、体に必要なものを選び出して、からだの中に戻しているんだよ（柔毛アームと、アームの向こうのベルトコンベアが動く）。'
  },
  {
    key: 9,
    content: '必要なもの？？'
  },
  {
    key: 10,
    content:
      'うん、それはおもにブドウ糖やアミノ酸だね。ブドウ糖はからだを動かすもと、アミノ酸は筋肉などのもとなんだ。'
  },
  {
    key: 11,
    content: 'ふーん。元気のもとってことだね！'
  },
  {
    key: 12,
    content:
      'そうそう。それから、体にとっていらないもの、たとえば悪いバイ菌は体の中にあると元気がなくなっちゃうから入り口のヤリと剣（ヤリと剣が動く）でやっつけているんだよ。'
  },
  {
    key: 13,
    content: 'すごい大事なところだね！'
  },
  {
    key: 14,
    content:
      'そうだよ。それから、体には、栄養以外にもとっても大事なものがあるよね。わかるかな。'
  },
  {
    key: 15,
    content: 'うーん。'
  },
  {
    key: 16,
    content:
      'それはお水だよ。腸は、栄養のほかにお水も体のなかに入れる大事な働きがあるんだ。'
  },
  {
    key: 17,
    content:
      '知らなかった！　飲んだらすぐに体の中に水が染み込んでいくんだと思ってたよ！'
  },
  {
    key: 18,
    content: 'その仕組みは、また後で説明しようかな？'
  },
  {
    key: 19,
    content: 'ところで元気くんはお腹の音って聞いたことある？'
  },
  {
    key: 20,
    content: '時々キュルキュル音がしているのは聞いたことがあるよ！'
  },
  {
    key: 21,
    content:
      'その音は、腸が食べ物を運ぶために元気に動いてくれているしるしなんだ。'
  },
  {
    key: 22,
    content: '元気に動いてくれているなら安心な音なんだね？'
  },
  {
    key: 23,
    content:
      'そう！　でもお腹が痛いときにも聞こえるときがないかい？　ぐるぐるぐるーって。それは、腸が危険信号を出している時 なんだ。気を付けてね。'
  },
  {
    key: 24,
    content: 'わかった！最後の方にあるスタンプと出口みたいなところは何？'
  },
  {
    key: 25,
    content:
      'ここは、ウンチを外に出すために準備をしているところなんだ。トイレに行ったときにはこの出口からウンチが出るようになるんだよ！'
  },
  {
    key: 26,
    content:
      'ご飯を食べてウンチになるまでを教えてもらったけど、どのくらいの時間がかかるの？30分？1時間？'
  },
  {
    key: 27,
    content: '正解は1日から2日くらいかかるんだ。'
  },
  {
    key: 28,
    content:
      'そんなに時間がかかるの？じゃあ、今日の食べたご飯は明日か明後日にウンチになるの？？'
  },
  {
    key: 29,
    content:
      'そうなんだ。食べたものが体の中をゆっくり動いていって、必要なものと要らないものに分けたりして、元気に過ごせるように見えないところで頑張ってくれているんだよ。'
  },
  {
    key: 30,
    content:
      '僕が栄養をとるぞー、ウンチ作るぞーって思っていないのに、なんで勝手にやってくるの？'
  },
  {
    key: 31,
    content: 'それは次のお話しかな？'
  }
];

const ModelBrain = () => {
  const navigate = useNavigate();
  const [itemSelected, setItemSelected] = useState(0);
  const [indexMessage, setindexMessage] = useState(0);
  return (
    <ModalBrainWrapper>
      <div className={'absolute right-5 top-5 z-50'}>
        <div
          className='flex items-center justify-center rounded-full bg-slate-300 cursor-pointer w-[44px] h-[44px]'
          onClick={() => {
            navigate(ROUTE_PATH.INTRODUCE);
          }}
        >
          <CloseOutlined />
        </div>
      </div>
      <model-viewer
        class='w-full relative'
        style={{ height: '40rem' }}
        id='hotspot-camera-view-demo'
        poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
        src={process.env.PUBLIC_URL + '/models/thor.glb'}
        // scale='0.2 0.2 0.2'
        shadow-intensity='1'
        camera-controls
        ar
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
          {itemSelected !== 0 ? (
            <div
              className='cursor-pointer d-flex items-center'
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
          <div className='d-flex justify-between w-full '>
            {indexMessage !== 0 ? (
              <div
                className='cursor-pointer  mx-10'
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

            {indexMessage + 1 < Conversation.length ? (
              <div
                className='cursor-pointer  mx-10'
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
              navigate(ROUTE_PATH.MODEL_STOMACH);
            }}
          >
            <IconNextStage />
          </div>
        </div>
      </div>
    </ModalBrainWrapper>
  );
};

export default ModelBrain;
