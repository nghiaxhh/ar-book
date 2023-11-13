import React from 'react';
import { useNavigate } from 'react-router-dom';
import BaseLayout from '~/layouts';
import { ROUTE_PATH } from '~/routes/route.constant';
import { HeaderWrapper } from './styled';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <BaseLayout>
      <HeaderWrapper
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/HomeImg.png)`
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '20px'
          }}
        >
          <img
            src={process.env.PUBLIC_URL + '/images/logo.png'}
            className='imgLogo'
            alt=''
          />
        </div>
        <div
          om
          onClick={() => navigate(ROUTE_PATH.INTRODUCE)}
          className='btn-action'
        >
          読みはじめる
        </div>
      </HeaderWrapper>
    </BaseLayout>
  );
};

export default HomePage;
