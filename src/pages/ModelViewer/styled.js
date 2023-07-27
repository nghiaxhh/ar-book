import { styled } from 'styled-components';

export const ModelViewerWrapper = styled.div`
  model-viewer {
    background-color: gray;
    margin: 0 auto;
    width: 100% !important;
    height: 100vh !important;
    /* max-width: 1200px; */
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
      max-width: 300px;
    }
  }
`;
