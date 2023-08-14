import React from 'react';
import { IntroduceWrapper } from './styled';
import { ICON_RIGHT } from '~/assets/icons/right';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '~/routes/route.constant';
import { CloseOutlined } from '@ant-design/icons';

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
        <div className='relative'>
          <img
            src={process.env.PUBLIC_URL + '/images/character.png'}
            width={'200px'}
            alt=''
          />
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
          <div className='slides justify-center'>
            <div
              className='box-arrow cursor-pointer'
              onClick={() => {
                navigate(ROUTE_PATH.PREVIEW_MODEL);
              }}
            >
              <div className='arrow'>
                <ICON_RIGHT />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute top-[1rem] right-[1rem]'>
        <div className='flex items-center justify-center rounded-full bg-white cursor-pointer w-[44px] h-[44px]' onClick={()=>{
          navigate(ROUTE_PATH.HOME)
        }}>
          <CloseOutlined />
        </div>
      </div>
    </IntroduceWrapper>
  );
};

export default Introduce;
