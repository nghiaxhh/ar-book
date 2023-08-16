import { styled } from 'styled-components';

export const ConversationWrapper = styled.div`
  width: 420px;

  .img-character {
    position: relative;
    z-index: 99;
  }

  .content {
    display: flex;
    background-color: #dfdfdf;
    border-radius: 20px;
    padding: 20px 20px 20px 100px;
    z-index: 9;

    position: absolute;
    bottom: 0;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
`;
