import { styled } from 'styled-components';

export const ConversationWrapper = styled.div`
  width: 400px;
  margin: 20px;

  .img-character {
    position: relative;
    z-index: 99;
  }

  .content {
    display: flex;
    background-color: #dfdfdf;
    border-radius: 20px;
    padding: 20px 20px 50px 100px;
    z-index: 9;
    width: 400px;
    max-height: 120px;
    overflow-y: auto;
    position: absolute;
    bottom: 20px;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
`;
