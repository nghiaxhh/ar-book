import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const IntroduceWrapper = styled.div`
  min-height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;

  .slides {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    margin: 0 10px;
  }

  .right-box {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  .box-content {
    color: #000;
    font-size: 24px;
    line-height: 24px;
    font-weight: 400;
    background: rgba(255, 255, 255);
    backdrop-filter: blur(12.5px);
    border-radius: 20px;
    border: 2px solid gray;
    padding: 16px;
    margin: 24px;

    @media screen and (max-width: 1000px) {
      font-size: 18px;
    }
  }
`;
