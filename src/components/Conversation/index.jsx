import React, { useEffect, useRef } from 'react';
import { ConversationWrapper } from './styled';

const Conversation = ({ content, type = 2, indexAction = 2 }) => {
  const refModel = useRef();
  const takeshiAction = [
    '',
    '',
    'takeshi_Walk',
    'Takeshi_Idle',
    'Takeshi_Turn.Left'
  ];

  const nouponAction = [
    '',
    '',
    'Nou-pon_Moving',
    'Nou-pon_Idle',
    'Nou-pon_Turn.Left'
  ];

  useEffect(() => {
    if (indexAction === 3) refModel.current.timeScale = 3;
    // refModel.current.play({ repetitions: 1 });
  }, []);

  return (
    <ConversationWrapper type={type}>
      <model-viewer
        ref={refModel}
        class={`${type === 1 ? 'model-takeshi' : 'model-nou'}`}
        poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
        src={
          process.env.PUBLIC_URL +
          `${type === 1 ? '/models/takeshi.glb' : '/models/nou.glb'}`
        }
        disable-tap
        interaction-prompt='none'
        autoplay
        animation-name={`${
          type === 1 ? takeshiAction[indexAction] : nouponAction[indexAction]
        }`}
      />

      <div
        className={`content`}
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
    </ConversationWrapper>
  );
};

export default Conversation;
