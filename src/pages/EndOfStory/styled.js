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

export const EndOfStoryWrapper = styled.div`
  min-height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  padding: 60px;

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

  .content {
    border: 1px solid gray;
    background-color: #f7f7f7;
    font-family: 'Zen Old Mincho', serif;
    /* font-family: 'Shippori Mincho', serif; */
    font-weight: 600;
    font-size: 14px;
    padding: 6px;
    border-radius: 20px;
    width: 250px;

    @media screen and (min-width: 992px) {
      width: 400px;
      font-size: 20px;
    }
  }
`;
