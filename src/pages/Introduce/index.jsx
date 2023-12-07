import { CloseOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { IconNextMessage, IconNextMessageMobile } from '~/assets/icons/left';
import { SCREEN_SIZE } from '~/common/constants';
import { ROUTE_PATH } from '~/routes/route.constant';
import { IntroduceWrapper, Wrapper } from './styled';

const Introduce = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: SCREEN_SIZE.TABLET });
  const [indexClick, setIndexClick] = useState(1);

  return (
    <Wrapper>
      <video autoPlay muted loop className='video' playsInline>
        <source src='/images/skyStar.mp4' type='video/mp4' />
      </video>

      <IntroduceWrapper
      // className='relative'
      // style={{
      //   backgroundImage: `url('/images/sky.gif')`
      // }}
      >
        <div className='d-flex justify-center items-center flex-col	md:flex-row	'>
          <div className='relative'>
            <div className='w-full'>
              <model-viewer
                class='w-[300px] md:w-[450px] relative h-[60vh] md:h-[100vh]'
                id='hotspot-camera-view-demo'
                poster={process.env.PUBLIC_URL + '/images/loading2.gif'}
                src={process.env.PUBLIC_URL + '/models/takeshi.glb'}
                shadow-intensity='1'
                autoplay
                disable-tap
                interaction-prompt='none'
                camera-controls
                disable-zoom
                animation-name={
                  indexClick === 1 ? 'takeshi_Walk' : 'Takeshi_Idle'
                }
              >
                <div
                  id='lazy-load-poster'
                  slot='poster'
                  className='h-full w-full relative'
                >
                  {/* <div className='text-loading text-2xl	font-bold'>Loading...</div> */}
                </div>
              </model-viewer>
            </div>
          </div>

          <div className='right-box'>
            <div className={`box-content ${isMobile && '!text-[14px]'}`}>
              {indexClick === 1 ? (
                <div>
                  やあ、みんな。ぼくの　なまえは　タケシ。
                  <br /> しょうらいは　せかいじゅうを　たびする　たんけんかに　
                  <br />
                  なりたいんだ！
                  <br />
                </div>
              ) : (
                <div>
                  そうそう。たびと　いえば　このまえ、じぶ
                  <br /> んの　からだの　なかを　たんけんする　ふしぎな　ゆめを
                  <br />
                  みたんだよ。どんな　ゆめかと　いうとね……
                </div>
              )}

              {isMobile && (
                <div
                  className='slides justify-center cursor-pointer mt-3'
                  onClick={() => {
                    indexClick === 1
                      ? setIndexClick(2)
                      : navigate(ROUTE_PATH.MODEL_BRAIN);
                  }}
                >
                  <IconNextMessageMobile />
                </div>
              )}
            </div>

            {!isMobile && (
              <div
                className='slides justify-center  cursor-pointer w-16'
                onClick={() => {
                  indexClick === 1
                    ? setIndexClick(2)
                    : navigate(ROUTE_PATH.MODEL_BRAIN);
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
    </Wrapper>
  );
};

export default Introduce;
