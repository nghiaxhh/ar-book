import { Modal } from 'antd';
import { styled } from 'styled-components';

export const ModalWrapper = styled(Modal)`
  .ant-modal-body {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ant-modal-content {
    border-radius: 15px;
  }

  .ant-modal-close-x {
    width: 30px;
    height: 30px;
    right: 0;
    background-color: white;
    border-radius: 30px;
  }

  .anticon {
    display: flex;
    align-items: center;
  }

  .text-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 25px;
    padding: 20px;
  }

  .notice {
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    padding: 0 22px;
  }

  .ant-modal-footer {
    border: 0;
  }
`;
