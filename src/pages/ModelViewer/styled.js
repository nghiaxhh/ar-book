import { Modal } from 'antd';
import { styled } from 'styled-components';

export const ModelViewerWrapper = styled.div`
  model-viewer {
    background-color: #fff;
    margin: 0 auto;
  }

  .view-button {
    background: #fff;
    border-radius: 4px;
    border: none;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    color: rgba(0, 0, 0, 0.8);
    display: block;
    font-family: Futura, Helvetica Neue, sans-serif;
    font-size: 12px;
    font-weight: 700;
    max-width: 128px;
    overflow-wrap: break-word;
    padding: 0.5em 1em;
    position: absolute;
    width: max-content;
    height: max-content;
    transform: translate3d(-50%, -50%, 0);
  }

  @media screen and (max-width: 480px) {
    model-viewer {
    }
  }

  .slides {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    margin: 0 10px;
  }

  .slide {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #fff;
    margin-right: 10px;
    border-radius: 10px;
    border: none;
    display: flex;
    border: 2px solid #fff;
  }

  .slide.selected {
    border: 2px solid #4285f4;
  }

  .slide:focus {
    outline: none;
  }

  .slide:focus-visible {
    outline: 1px solid #4285f4;
  }
`;

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
