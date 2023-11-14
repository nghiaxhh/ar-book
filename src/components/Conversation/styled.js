import { styled } from 'styled-components';

export const ConversationWrapper = styled.div`
  margin: 20px;

  .img-character {
    position: absolute;
    bottom: 20px;
    z-index: 99;
  }

  .content {
    display: flex;
    border-radius: 20px;
    z-index: 9;
    width: 90%;
    font-family: 'Zen Old Mincho', serif;
    /* font-family: 'Shippori Mincho', serif; */
    /* max-height: 120px;
    overflow-y: auto; */
    position: absolute;
    bottom: 20px;
    font-weight: 600;
    font-size: 20px;
  }

  @media screen and (min-width: 760px) {
    width: 400px;

    .content {
      width: 400px;
    }
  }
`;
