import { styled } from 'styled-components';

export const ConversationWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  width: 260px;
  flex-direction: ${({ type }) => (type === 2 ? 'column-reverse' : 'column')};
  align-items: center;
  /* justify-content: center; */

  .img-character {
    z-index: 99;
    width: 80px;
  }

  .content {
    display: flex;
    border-radius: 8px;
    z-index: 9;
    width: 90%;
    border: 1px solid gray;
    background-color: #f7f7f7;
    font-family: 'Zen Old Mincho', serif;
    /* font-family: 'Shippori Mincho', serif; */

    font-weight: 600;
    font-size: 14px;
    padding: 6px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    margin: 20px 40px;

    .content {
      width: 400px;
      font-size: 20px;
      border-radius: 20px;
    }

    .img-character {
      width: 150px;
    }
  }
`;
