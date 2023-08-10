import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useState } from 'react';
import { LayoutCommon } from '~/styles/genaralStyled';
import PopupDetail from '../ModelViewer/components/PopupDetail';
import { HeaderWrapper } from './styled';
import BaseLayout from '~/layouts';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '~/routes/route.constant';

// import { useCommon } from '../redux/hooks/useCommon';

const HomePage = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const listGame = new Array(6).fill(1).map((_, idx) => {
    return idx + 1;
  });

  // const {
  //   actions: actionsCommon
  // } = useCommon();

  // useEffect(() => {
  //   actionsCommon.getRole({ type: 'USER' });
  // }, []);

  return (
    <BaseLayout>
      <HeaderWrapper
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/HomeImg.png)`
        }}
      />
      <LayoutCommon>
        <div className=''>
          <div className='text-primary text-base md:text-[26px]'>Trending</div>
          <Splide
            options={{
              width: '100%',
              rewind: true,
              perPage: 3,
              perMove: '1',
              gap: '1rem',
              type: 'loop',
              arrows: true,
              pagination: true,
              breakpoints: {
                1000: {
                  perPage: 1,
                  arrows: false
                }
              }
            }}
          >
            <SplideSlide>
              <div
                onClick={() => {
                  navigate(ROUTE_PATH.INTRODUCE);
                }}
                className='cursor-pointer'
              >
                <img
                  src={process.env.PUBLIC_URL + '/images/Fallguys.png'}
                  alt=''
                  width={'100%'}
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div
                onClick={() => {
                  navigate(ROUTE_PATH.INTRODUCE);
                }}
                className='cursor-pointer'
              >
                <img
                  src={process.env.PUBLIC_URL + '/images/CallofDuty.png'}
                  alt=''
                  width={'100%'}
                />
              </div>
            </SplideSlide>

            <SplideSlide>
              <div
                onClick={() => {
                  navigate(ROUTE_PATH.INTRODUCE);
                }}
                className='cursor-pointer'
              >
                <img
                  src={process.env.PUBLIC_URL + '/images/Demon.png'}
                  alt=''
                  width={'100%'}
                />
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div className=''>
          <div className='text-primary text-base md:text-[26px] '>Latest</div>
          <Splide
            options={{
              width: '100%',
              rewind: true,
              perPage: 4,
              perMove: '1',
              gap: '1rem',
              arrows: false,
              pagination: 'true',
              breakpoints: {
                1000: {
                  perPage: 2
                }
              }
            }}
          >
            {listGame.map((item, idx) => {
              return (
                <SplideSlide key={idx}>
                  <div
                    onClick={() => {
                      setOpenModal(true);
                    }}
                    className='relative h-[140px]	md:h-[180px] cursor-pointer'
                  >
                    <img
                      className='object-fill h-[140px]	md:h-[180px]'
                      src={process.env.PUBLIC_URL + '/images/Game.png'}
                      alt=''
                      width={'100%'}
                      height={'100%'}
                    />
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
        <div className=''>
          <div className='text-primary text-base md:text-[26px] '>History</div>
          <Splide
            options={{
              width: '100%',
              rewind: true,
              perPage: 4,
              perMove: '1',
              gap: '1rem',
              arrows: false,
              pagination: 'true',
              breakpoints: {
                1000: {
                  perPage: 2
                }
              }
            }}
          >
            {listGame.map((item, idx) => {
              return (
                <SplideSlide key={idx}>
                  <div
                    onClick={() => {
                      setOpenModal(true);
                    }}
                    className='relative h-[140px]	md:h-[180px] cursor-pointer'
                  >
                    <img
                      className='object-fill h-[140px]	md:h-[180px]'
                      src={process.env.PUBLIC_URL + '/images/Game.png'}
                      alt=''
                      width={'100%'}
                      height={'100%'}
                    />
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
        <div className='sm:'>
          <div className='text-primary text-base md:text-[26px] '>Science</div>
          <Splide
            options={{
              width: '100%',
              rewind: true,
              perPage: 4,
              perMove: '1',
              gap: '1rem',
              arrows: false,
              pagination: 'true',
              breakpoints: {
                1000: {
                  perPage: 2
                }
              }
            }}
          >
            {listGame.map((item, idx) => {
              return (
                <SplideSlide key={idx}>
                  <div
                    onClick={() => {
                      setOpenModal(true);
                    }}
                    className='relative h-[140px]	md:h-[180px] cursor-pointer'
                  >
                    <img
                      className='object-fill h-[140px]	md:h-[180px]'
                      src={process.env.PUBLIC_URL + '/images/Game.png'}
                      alt=''
                      width={'100%'}
                      height={'100%'}
                    />
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </LayoutCommon>
      {openModal && (
        <PopupDetail
          openModal={openModal}
          onCancel={() => setOpenModal(false)}
        />
      )}
    </BaseLayout>
  );
};

export default HomePage;
