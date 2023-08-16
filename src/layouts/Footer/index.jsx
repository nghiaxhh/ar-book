import React from 'react';
import { LayoutCommon } from '~/styles/generalStyled';

const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;
