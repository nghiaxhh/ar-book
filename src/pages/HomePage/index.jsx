import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useState } from 'react';
import { LayoutCommon } from '~/styles/genaralStyled';
import PopupDetail from '../ModelViewer/components/PopupDetail';
import { HeaderWrapper, HomePageWrapper } from './styled';

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const listGame = new Array(6).fill(1).map((_, idx) => {
    return idx + 1;
  });

  return (
    <HomePageWrapper>
      <HeaderWrapper>
        <img src={`${process.env.PUBLIC_URL}/images/HomeImg.png`} />
      </HeaderWrapper>
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
              arrows: true,
              type: 'loop',
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
                  setOpenModal(true);
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
                  setOpenModal(true);
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
                  setOpenModal(true);
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
              type: 'loop',
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
              type: 'loop',
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
              type: 'loop',
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

      <div
        style={{ backgroundColor: '#065BAA', marginTop: '50px', padding: 20 }}
      >
        <LayoutCommon>
          <div className='home-footer'>
            <div className='text-logo'>LOGO</div>
            <div
              className='d-flex p-3'
              style={{ flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <div className='service-item'>Support</div>
              <div className='service-item'>Privacy Policy</div>
              <div className='service-item'>Website</div>
              <div className='service-item'>Terms of Use</div>
              <div className='service-item'>Sitemap</div>
              <div className='service-item'>Legal</div>
            </div>
            <div
              className='d-flex pb-3'
              style={{ flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <div className='service-item'>Facebook </div>
              <div className='service-item'>Twitter </div>
              <div className='service-item'>YouTube </div>
              <div className='service-item'>Instagram </div>
              <div className='service-item'>Android App</div>
              <div className='service-item'>iOS App</div>
            </div>
            <div className='copyright'>© 2023</div>
          </div>
        </LayoutCommon>
      </div>

      {openModal && (
        <PopupDetail
          openModal={openModal}
          onCancel={() => setOpenModal(false)}
        />
      )}
    </HomePageWrapper>
  );
};

export default HomePage;
