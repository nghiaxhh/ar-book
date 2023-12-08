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
    max-width: 1200px;
    width: 100%;
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    margin: 0 10px;
  }

  .slider {
    display: flex;
    justify-content: center;
  }

  .content {
    border: 1px solid gray;
    background-color: #f7f7f7;
    /* font-family: 'Sawarabi Mincho', serif; */
    font-weight: 600;
    font-size: 14px;
    padding: 6px;
    border-radius: 20px;
    width: 250px;

    @media screen and (min-width: 1200px) {
      width: 400px;
      font-size: 20px;
    }
  }
`;
