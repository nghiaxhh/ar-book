import React from 'react';
import { ConversationWrapper } from './styled';

const Conversation = ({ content }) => {
  return (
    <ConversationWrapper>
      <div className='container'>
        <img
          src={process.env.PUBLIC_URL + '/images/character.png'}
          width={'100px'}
          alt=''
          className='img-character'
        />

        <div className='content'>{content}</div>
      </div>
    </ConversationWrapper>
  );
};

export default Conversation;
