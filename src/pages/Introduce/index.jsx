import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconNextMessage, IconNextMessageMobile } from '~/assets/icons/left';
import { ROUTE_PATH } from '~/routes/route.constant';
import { IntroduceWrapper } from './styled';
import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZE } from '~/common/constants';

const Introduce = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: SCREEN_SIZE.TABLET });
  return (
    <IntroduceWrapper
      className='relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-moon.png)`
      }}
    >
      <div className='d-flex justify-center items-center flex-col	md:flex-row	'>
        <div className='relative'>
          <div className='w-full'>
            <model-viewer
              class='w-[300px] md:w-[600px] relative h-[60vh] md:h-[100vh]'
              id='hotspot-camera-view-demo'
              poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
              src={process.env.PUBLIC_URL + '/models/comission_230717'}
              shadow-intensity='1'
              autoplay
              disable-tap
              interaction-prompt='none'
              camera-controls
              disable-zoom
            >
              <div
                id='lazy-load-poster'
                slot='poster'
                className='h-full w-full relative'
              >
                <div className='text-loading text-2xl	font-bold'>Loading...</div>
              </div>
            </model-viewer>
          </div>
        </div>

        <div className='right-box'>
          <div className={`box-content ${isMobile && '!text-[14px]'}`}>
            僕の名前は●●
            <br /> 最近おなかの調子が良くなくて…
            <br />
            実は、こないだ自分の体の中を探検する 夢を見たんだよね…
            <br />
            <br />
            どんな夢かというと…
            {isMobile && (
              <div
                className='slides justify-center cursor-pointer mt-3'
                onClick={() => {
                  navigate(ROUTE_PATH.MODEL_BRAIN);
                }}
              >
                <IconNextMessageMobile />
              </div>
            )}
          </div>

          {!isMobile && (
            <div
              className='slides justify-center  cursor-pointer'
              onClick={() => {
                navigate(ROUTE_PATH.MODEL_BRAIN);
              }}
            >
              <IconNextMessage />
            </div>
          )}
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
