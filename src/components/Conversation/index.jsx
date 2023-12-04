import React from 'react';
import { ConversationWrapper } from './styled';

const Conversation = ({ content, type = 2, isFocus = false }) => {
  return (
    <ConversationWrapper type={type} focus={isFocus}>
      <img
        src={
          process.env.PUBLIC_URL + `/images/${type === 1 ? 'cvc1' : 'cvc2'}.png`
        }
        alt=''
        className={`img-character`}
      />
      {/* <video autoPlay muted loop className='img-character' playsInline>
        <source src='/images/test.mkv' type='video/mp4' />
      </video> */}
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
