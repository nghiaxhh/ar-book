import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconNextMessage } from '~/assets/icons/left';
import { ROUTE_PATH } from '~/routes/route.constant';
import { IntroduceWrapper } from './styled';
import ModelCharacter from '../ModalCharacter';

const Introduce = () => {
  const navigate = useNavigate();
  return (
    <IntroduceWrapper
      className='relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-moon.png)`
      }}
    >
      <div className='d-flex justify-center items-center'>
        <div className='relative w-full'>
          {/* <img
            src={process.env.PUBLIC_URL + '/images/character.png'}
            width={'400rem'}
            alt=''
          /> */}
          <ModelCharacter />
        </div>
        <div className='right-box'>
          <div className='box-content'>
            僕の名前は●●
            <br /> 最近おなかの調子が良くなくて…
            <br />
            実は、こないだ自分の体の中を探検する 夢を見たんだよね…
            <br />
            <br />
            どんな夢かというと…
          </div>
          <div
            className='slides justify-center  cursor-pointer'
            onClick={() => {
              navigate(ROUTE_PATH.PREVIEW_MODEL);
            }}
          >
            <IconNextMessage />
          </div>
        </div>
      </div>

      <div className='absolute top-[1rem] right-[1rem]'>
        <div
          className='flex items-center justify-center rounded-full bg-white cursor-pointer w-[44px] h-[44px]'
          onClick={() => {
            navigate(ROUTE_PATH.HOME);
          }}
        >
          <CloseOutlined />
        </div>
      </div>
    </IntroduceWrapper>
  );
};

export default Introduce;
