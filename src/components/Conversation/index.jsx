import React from 'react';
import { ConversationWrapper } from './styled';

const Conversation = ({ content, type = 2, isFocus = false }) => {
  return (
    <ConversationWrapper type={type} isFocus={isFocus}>
      <img
        src={
          process.env.PUBLIC_URL + `/images/${type === 1 ? 'cvc1' : 'cvc2'}.png`
        }
        alt=''
        className={`img-character`}
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
