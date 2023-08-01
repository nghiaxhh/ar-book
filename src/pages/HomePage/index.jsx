import React from 'react';
import { HeaderWrapper, HomePageWrapper } from './styled';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '~/routes/route.constant';
import { Col, Row } from 'antd';
import { LayoutCommon } from '~/styles/genaralStyled';

const HomePage = () => {
  const navigate = useNavigate();
  const listGame = new Array(6).fill(1).map((_, idx) => {
    return idx + 1;
  });

  return (
    <HomePageWrapper>
      <HeaderWrapper
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/HomeImg.png)`
        }}
      />
      <LayoutCommon>
        <div className='ptop-50'>
          <div className='text-base'>Trending</div>
          <Row gutter={20}>
            <Col span={8}>
              <div
                onClick={() => {
                  navigate(ROUTE_PATH.CHARACTER);
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + '/images/Fallguys.png'}
                  alt=''
                  width={'100%'}
                />
              </div>
            </Col>
            <Col span={8}>
              <div
                onClick={() => {
                  navigate(ROUTE_PATH.CHARACTER);
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + '/images/CallofDuty.png'}
                  alt=''
                  width={'100%'}
                />
              </div>
            </Col>
            <Col span={8}>
              <div
                onClick={() => {
                  navigate(ROUTE_PATH.CHARACTER);
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + '/images/Demon.png'}
                  alt=''
                  width={'100%'}
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className='ptop-50'>
          <div className='text-base'>Latest</div>
          <Row gutter={20}>
            {listGame.map((item, idx) => {
              return (
                <Col key={idx} span={4}>
                  <div
                    onClick={() => {
                      navigate(ROUTE_PATH.CHARACTER);
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + '/images/Game.png'}
                      alt=''
                      width={'100%'}
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className='ptop-50'>
          <div className='text-base'>History</div>
          <Row gutter={20}>
            {listGame.map((item, idx) => {
              return (
                <Col key={idx} span={4}>
                  <div
                    onClick={() => {
                      navigate(ROUTE_PATH.CHARACTER);
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + '/images/Game.png'}
                      alt=''
                      width={'100%'}
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className='ptop-50'>
          <div className='text-base'>Science</div>
          <Row gutter={20}>
            {listGame.map((item, idx) => {
              return (
                <Col key={idx} span={4}>
                  <div
                    onClick={() => {
                      navigate(ROUTE_PATH.CHARACTER);
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + '/images/Game.png'}
                      alt=''
                      width={'100%'}
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </LayoutCommon>

      <div
        style={{ backgroundColor: '#065BAA', marginTop: '50px', padding: 20 }}
      >
        <LayoutCommon>
          <div className='home-footer'>
            <div className='text-logo'>LOGO</div>
            <div className='d-flex p-3'>
              <div className='service-item'>Support</div>
              <div className='service-item'>Privacy Policy</div>
              <div className='service-item'>Website</div>
              <div className='service-item'>Terms of Use</div>
              <div className='service-item'>Sitemap</div>
              <div className='service-item'>Legal</div>
            </div>
            <div className='d-flex pb-3'>
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
    </HomePageWrapper>
  );
};

export default HomePage;
