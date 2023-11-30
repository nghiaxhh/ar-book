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
      'プールの　なかで、プロペラが　まわっているでしょ。<br/>いえきと　たべものを　まぜて、ドロドロに　するんだ'
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
    content: 'すると、プロペラが　はげしく　まわりだしました'
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
      'うん。それに、しっかり　かむと、つばが　たくさん　でるよね。<br/>つばは、いや　ちょうを　たすけてくれる　やくわりが　あるんだよ'
  },
  {
    key: 'storyteller-4',
    isStoryteller: true,
    content: 'ふたりは、つぎの　へやへ　むかいます'
  }
];

const ModalStomach = () => {
  const navigate = useNavigate();
  const [indexMessage, setindexMessage] = useState(0);
  const [viewFocus, setViewFocus] = useState(0);
  const ModelViewerElement = customElements.get('model-viewer');
  ModelViewerElement.minimumRenderScale = 1;

  const listCamOrbit = [
    '30.89deg 75deg 2.217m',
    '32.48deg 59.56deg 1.824m',
    '36.83deg 64.71deg 1.419m',
    '-14.65deg 28.04deg 1.74m'
  ];
  const listCamTarget = [
    '',
    '-0.14m 0.13m -0.85m',
    '0.11m 0.05m -0.54m',
    '0.07m 0.07m -0.57m'
  ];
  const fieldOfView = ['27.67deg', '15.4deg', '12deg', '15.4deg'];

  // useEffect(() => {

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
        shadow-intensity='1'
        ar-modes='webxr scene-viewer quick-look'
        camera-controls
        ar
        disable-tap
        interaction-prompt='none'
        autoplay
        min-camera-orbit='-35deg 0deg auto'
        max-camera-orbit='100deg 95deg auto'
        camera-target={listCamTarget[viewFocus]}
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
              className={`box-message d-flex absolute ${
                item.mainCharacter ? 'right-0' : 'left-0'
              }   ${
                idx < 5 || idx >= 8
                  ? 'lg:bottom-32 md:bottom-24 bottom-14'
                  : 'lg:top-20 top-12 right-2'
              }`}
            >
              <Conversation
                isFocus={idx > 7}
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
            className='cursor-pointer d-flex items-center lg:w-20 w-10'
            onClick={() => {
              navigate(ROUTE_PATH.MODEL_BRAIN);
            }}
          >
            <IconPreviousStage />
          </div>
          {
            <div className='d-flex'>
              {indexMessage !== 0 ? (
                <div
                  className='cursor-pointer  mr-4 lg:w-20 w-10'
                  onClick={() => {
                    // setindexMessage(0)
                    setindexMessage(indexMessage - 1);
                    if (
                      indexMessage === 5 ||
                      indexMessage === 8 ||
                      indexMessage === 12
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
                      indexMessage === 7 ||
                      indexMessage === 11
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
          }
          <div
            className='cursor-pointer  d-flex items-center  lg:w-20 w-10'
            onClick={() => {
              navigate(ROUTE_PATH.MODEL_INTESTINE);
            }}
          >
            <IconNextStage />
          </div>
        </div>
      </div>
    </ModalStomachWrapper>
  );
};

export default ModalStomach;
