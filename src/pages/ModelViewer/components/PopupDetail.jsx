import { Button } from 'antd';
import React from 'react';
import { ModalWrapper } from '../styled';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '~/routes/route.constant';

const PopupDetail = ({ openModal, onCancel }) => {
  const navigate = useNavigate();
  return (
    <ModalWrapper
      open={openModal}
      onCancel={onCancel}
      title=''
      footer={
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={() => navigate(ROUTE_PATH.INTRODUCE)}
            key='submit'
            type='primary'
          >
            View in AR
          </Button>
        </div>
      }
    >
      <img
        alt=''
        src={`${process.env.PUBLIC_URL}/images/imgTitle.png`}
        width={'100%'}
      />
      <div className='text-title'>Fall Guys: Ultimate Knockout</div>
      <div className='notice'>
        Lorem ipsum dolor sit amet consectetur. Vel eget cursus consequat dolor
        elementum donec diam ultricies gravida. Fusce dignissim sit condimentum
        in ullamcorper tincidunt urna duis facilisis. Elit ac lectus dui
        facilisi pellentesque in viverra. Interdum nunc pretium et et.
      </div>
    </ModalWrapper>
  );
};

export default PopupDetail;
