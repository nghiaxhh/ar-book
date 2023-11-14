import React from 'react';
import { useNavigate } from 'react-router-dom';
import BaseLayout from '~/layouts';
import { ROUTE_PATH } from '~/routes/route.constant';
import { HeaderWrapper } from './styled';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <BaseLayout>
      <HeaderWrapper>
        <div
          style={{ display: 'flex', paddingTop: '50px', alignItems: 'center' }}
        >
          <img
            src={process.env.PUBLIC_URL + `/images/character.png`}
            width={'180px'}
            alt=''
          />
          <div className='box-container'>
            <img
              src={process.env.PUBLIC_URL + `/images/organ.png`}
              width={'280px'}
              alt=''
            />
            <div className='main-title'>たけしくんの ふしぎな たび</div>
            <div className='sub-title'>
              ～たべものを たべたら どうなるの？～
            </div>
          </div>
          <img
            src={process.env.PUBLIC_URL + `/images/genki.png`}
            width={'150px'}
            alt=''
          />
        </div>
        <div
          onClick={() => navigate(ROUTE_PATH.INTRODUCE)}
          className='btn-action'
        >
          えほんを よむ
        </div>

        <div className='home-page-footer'>
          <img
            src={process.env.PUBLIC_URL + '/images/logo.png'}
            className='imgLogo'
            alt=''
          />
          <img
            src={process.env.PUBLIC_URL + '/images/organ_project.png'}
            alt=''
            className='imgLogo'
          />
        </div>
      </HeaderWrapper>
    </BaseLayout>
  );
};

export default HomePage;
