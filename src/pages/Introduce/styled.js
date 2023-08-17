import { styled } from 'styled-components';

export const IntroduceWrapper = styled.div`
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

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

  /* .right-box {
    position: absolute;
    right: 100px;
  } */

  .box-content {
    color: black;
    text-align: center;
    font-weight: 400;
    background-color: #fff;
    opacity: 0.8;
    border-radius: 20px;
    border: 2px solid gray;
    padding: 24px;
    margin: 20px;
    max-width: 525px;
  }
`;
