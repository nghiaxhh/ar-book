import React from 'react';
import { ConversationWrapper } from './styled';

const Conversation = ({ content, type = 2 }) => {
  return (
    <ConversationWrapper>
      <div className='box-container'>
        <img
          src={
            process.env.PUBLIC_URL +
            `/images/${type === 1 ? 'character' : 'genki'}.png`
          }
          width={'100px'}
          alt=''
          className={`img-character ${type === 2 && 'float-right'}`}
        />

        <div
          className={` opacity-div content py-[20px] ${
            type === 2 ? 'pr-[100px] pl-[20px]' : 'pr-[20px] pl-[100px]'
          }`}
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      </div>
    </ConversationWrapper>
  );
};

export default Conversation;
