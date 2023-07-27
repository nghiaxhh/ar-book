import React from 'react';
import { HeaderWrapper, HomePageWrapper } from './styled';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '~/routes/route.constant';
import { Col, Row } from 'antd';
import { LayoutCommon } from '~/styles/genaralStyled';

const HomePage = () => {
  const navigate = useNavigate();
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
          <Row>
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
      </LayoutCommon>
    </HomePageWrapper>
  );
};

export default HomePage;
