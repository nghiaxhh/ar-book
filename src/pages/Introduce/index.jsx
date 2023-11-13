import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { IconNextMessage, IconNextMessageMobile } from '~/assets/icons/left';
import { SCREEN_SIZE } from '~/common/constants';
import { ROUTE_PATH } from '~/routes/route.constant';
import { IntroduceWrapper, Wrapper } from './styled';

const Introduce = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: SCREEN_SIZE.TABLET });

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.play().catch((error) => {
  //       // Xử lý lỗi khi video không thể tự động chạy
  //       console.error('Auto-play failed:', error);
  //     });
  //   }
  // }, []);

  return (
    <Wrapper>
      <video autoPlay muted loop className='video'>
        <source
          src='https://static.vecteezy.com/system/resources/previews/007/515/187/mp4/timelapse-of-beautiful-blue-sky-in-pure-daylight-with-puffy-fluffy-white-clouds-background-amazing-flying-through-beautiful-thick-fluffy-clouds-nature-and-cloudscape-concept-free-video.mp4'
          type='video/mp4'
        />
      </video>

      <IntroduceWrapper
      // className='relative'
      // style={{
      //   backgroundImage: `url('https://i.pinimg.com/originals/a0/dd/4b/a0dd4b75918cb2e954d46d7ee61f4fa2.gif')`
      // }}
      >
        <div className='d-flex justify-center items-center flex-col	md:flex-row	'>
          <div className='relative'>
            <div className='w-full'>
              <model-viewer
                class='w-[300px] md:w-[450px] relative h-[60vh] md:h-[100vh]'
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
                  {/* <div className='text-loading text-2xl	font-bold'>Loading...</div> */}
                </div>
              </model-viewer>
            </div>
          </div>

          <div className='right-box'>
            <div className={`box-content ${isMobile && '!text-[14px]'}`}>
              やあ、みんな。ぼくの　なまえは　タケシ。
              <br /> しょうらいは　せかいじゅうを　たびする　たんけんかに　
              <br />
              なりたいんだ！そうそう。たびと　いえば　このまえ、じぶ
              <br /> んの　からだの　なかを　たんけんする　ふしぎな　ゆめを
              <br />
              みたんだよ。どんな　ゆめかと　いうとね……
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
    </Wrapper>
  );
};

export default Introduce;
