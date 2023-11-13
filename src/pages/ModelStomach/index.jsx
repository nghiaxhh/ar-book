import { CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import {
  ICON_LEFT,
  IconNextStage,
  IconPreviousStage
} from '~/assets/icons/left';
import { ICON_RIGHT } from '~/assets/icons/right';
import { SCREEN_SIZE } from '~/common/constants';
import Conversation from '~/components/Conversation';
import { ROUTE_PATH } from '~/routes/route.constant';
import { ModalStomachWrapper } from './styled';

const listConversation = [
  {
    key: 'storyteller-1',
    isStoryteller: true,
    content: 'タケシくんと　のうポンは、いの　へやへ　やってきました '
  },

  {
    key: 2,
    content:
      'ここは　いの　へや。みんなの　おへその　うえくらいに　ある　ぞうきだよ。<br/>ぼくたちは、くちから　たべものを　たべるよね。<br/>はでかんで　こまかくした　たべものは、しょくどうを　とおって、ここへ　くるんだ'
  },
  {
    key: 3,
    mainCharacter: true,
    content: 'わあ、プールが　ある。およいでも　いい？'
  },
  {
    key: 4,
    content: 'う〜ん。それは　やめたほうが　いいんじゃないかな'
  },
  {
    key: 5,
    mainCharacter: true,
    content: 'ダメなの？　あそこに　シャワーも　あるのに'
  },
  {
    key: 6,
    content:
      'シャワーから　でているのは、いえき。いに　はいってきた　たべものを、どんどん　とかしていくんだ'
  },
  {
    key: 7,
    mainCharacter: true,
    content:
      'とかす！？　プールに　はいらなくて　よかった…。でも、せっかく　たべたのに　とかしちゃうの？'
  },

  {
    key: 9,
    content:
      'そう。たべものから　えいようを　とりだすために　とかすんだ。<br/>あれを　みて'
  },

  {
    key: 10,
    content:
      'プールの　なかで、プロペラが　まわっているでしょ。いえきと　たべものを　まぜて、ドロドロに　するん'
  },
  {
    key: 'storyteller-2',
    isStoryteller: true,
    content:
      'いの　なかを　みてみると、りんごの　かけらが　ぷかぷか　ういています'
  },

  {
    key: 11,
    content: 'タケシくんったら、りんごを　よく　かんで　たべなかったでしょ'
  },

  {
    key: 12,
    mainCharacter: true,
    content:
      'さっき、おやつに　たべたけど…。よく　かんで　たべたほうが　いいの？'
  },

  {
    key: 'storyteller-3',
    isStoryteller: true,
    content: '（すると、プロペラが　はげしく　まわりだしました）'
  },

  {
    key: 13,
    content:
      'よく　かまずに　のみこまれた　たべものは　こまかくするのが　たいへんだから、プロペラを　たくさん　まわさなくちゃ　いけないんだ。その　ぶん、いに　ふたんが　かかっちゃうんだよ'
  },

  {
    key: 14,
    mainCharacter: true,
    content: 'そうか〜。よく　かんで　たべたほうが、いいんだね'
  },

  {
    key: 15,
    content:
      'うん。それに、しっかり　かむと、つばが　たくさん　でるよね。つばは、いや　ちょうを　たすけてくれる　やくわりが　あるんだよ'
  },
  {
    key: 'storyteller-4',
    isStoryteller: true,
    content: 'ふたりは、つぎの　へやへ　むかいます'
  }
];

const ModalStomach = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: SCREEN_SIZE.TABLET });
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

        {!isMobile &&
          listConversation.map((item, idx) => {
            return indexMessage === idx ? (
              item.isStoryteller ? (
                <div className='w-full d-flex justify-center'>
                  <div className='storyteller'>{item.content}</div>
                </div>
              ) : (
                <div className='box-message'>
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
                </div>
              )
            ) : null;
          })}

        <div className='slider'>
          <div className='slides justify-between'>
            <div
              className='cursor-pointer d-flex items-center'
              onClick={() => {
                navigate(ROUTE_PATH.MODEL_BRAIN);
              }}
            >
              <IconPreviousStage />
            </div>
            {!isMobile && (
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
            )}
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
