import React from 'react';
import { IntroduceWrapper } from './styled';
import { ICON_LEFT } from '~/assets/icons/left';
import { ICON_RIGHT } from '~/assets/icons/right';

const Introduce = () => {
  return (
    <IntroduceWrapper
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
          <div className='slides justify-between'>
            <div className='box-arrow cursor-pointer'>
              <div className='arrow'>
                <ICON_LEFT />
              </div>
            </div>

            <div className='box-arrow cursor-pointer'>
              <div className='arrow'>
                <ICON_RIGHT />
              </div>
            </div>
          </div>
        </div>
      </div>
    </IntroduceWrapper>
  );
};

export default Introduce;
