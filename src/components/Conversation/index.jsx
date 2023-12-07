import React from 'react';
import { ConversationWrapper } from './styled';

const Conversation = ({ content, type = 2, isFocus = false }) => {
  return (
    <ConversationWrapper type={type} focus={isFocus}>
      {/* <img
        src={
          process.env.PUBLIC_URL + `/images/${type === 1 ? 'cvc1' : 'cvc2'}.png`
        }
        alt=''
        className={`img-character`}
      /> */}

      <model-viewer
        class='img-character'
        id='model-viewer'
        poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
        src={process.env.PUBLIC_URL + `${type === 1}` ? '' : '/models/nou.glb'}
        disable-tap
        interaction-prompt='none'
        autoplay
        animation-name='Nou-pon_Moving'
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
