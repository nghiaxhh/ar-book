import { styled } from 'styled-components';

export const ConversationWrapper = styled.div`
  width: 90%;
  margin: 20px;

  .img-character {
    position: relative;
    z-index: 99;
  }

  .content {
    display: flex;
    border-radius: 20px;

    z-index: 9;
    width: 90%;
    max-height: 120px;
    overflow-y: auto;
    position: absolute;
    bottom: 20px;
    /* -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none; */
  }

  @media screen and (min-width: 760px) {
    width: 400px;

    .content {
      width: 400px;
    }
  }
`;
