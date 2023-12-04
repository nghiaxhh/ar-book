import { styled } from 'styled-components';

export const ModelIntestineWrapper = styled.div`
  model-viewer {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
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

  .slides {
    display: flex;
    max-width: 1200px;
    width: 100%;
    margin: 0 10px;
  }

  .slider {
    display: flex;
    justify-content: center;
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
