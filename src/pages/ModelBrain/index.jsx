import { CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { ICON_LEFT, IconNextStage } from '~/assets/icons/left';
import { ICON_RIGHT } from '~/assets/icons/right';
import { SCREEN_SIZE } from '~/common/constants';
import Conversation from '~/components/Conversation';
import { ROUTE_PATH } from '~/routes/route.constant';
import { ModelBrainWrapper } from './styled';

const listConversation = [
  {
    key: 1,
    mainCharacter: true,
    content: 'あれれ？　ここは　どこ？　ぼくは　ベッドで　ねていた　はずなのに…'
  },
  {
    key: 2,
    content: 'ポンばんわ、タケシくん！'
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
    key: 10,
    content:
      'ここは、タケシくんの　からだを　うごかすしれいしつ。かんがえたり　わらったり　ないたり　おこったりすることもね。'
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
  const [indexMessage, setindexMessage] = useState(0);
  const isMobile = useMediaQuery({ query: SCREEN_SIZE.TABLET });

  // useEffect(() => {
  //   document
  //     .querySelector('.box-message')
  //     .addEventListener('beforexrselect', (ev) => {
  //       // Keep slider interactions from affecting the XR scene.
  //       ev.preventDefault();
  //     });
  //   document
  //     .querySelector('.slider')
  //     .addEventListener('beforexrselect', (ev) => {
  //       // Keep slider interactions from affecting the XR scene.
  //       ev.preventDefault();
  //     });
  // }, []);

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
        ar-placement='wall'
        touch-action='pan-y'
        shadow-intensity='1'
        xr-environment
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
          {!isMobile &&
            listConversation.map((item, idx) => {
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
            {!isMobile && (
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
            )}

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
      </model-viewer>
    </ModelBrainWrapper>
  );
};

export default ModelBrain;
