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
        <div className='box-mobile'>
          <div>
            <img
              src={process.env.PUBLIC_URL + `/images/tokun_hp.jpg`}
              alt=''
              width={'100px'}
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + `/images/genki_hp.jpg`}
              alt=''
              width={'100px'}
            />
          </div>
        </div>
        <div className='box-pc'>
          <img
            src={process.env.PUBLIC_URL + `/images/tokun_hp.jpg`}
            width={'180px'}
            className='img-pc'
            alt=''
          />

          <div className='box-container'>
            <img
              src={process.env.PUBLIC_URL + `/images/organ.png`}
              className='project-title'
              alt=''
            />
            <div className='main-title'>たけしくんの ふしぎな たび</div>
            <div className='sub-title'>
              ～たべものを たべたら どうなるの？～
            </div>
          </div>
          <img
            src={process.env.PUBLIC_URL + `/images/genki_hp.jpg`}
            width={'150px'}
            className='img-pc'
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
            className='project-name'
          />
        </div>
      </HeaderWrapper>
    </BaseLayout>
  );
};

export default HomePage;
