import { styled } from 'styled-components';

export const ConversationWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  width: 260px;
  flex-direction: ${({ type }) => (type === 2 ? 'column-reverse' : 'column')};
  align-items: center;
  /* justify-content: center; */

  .model-takeshi {
    z-index: 99;
    width: 100px;
    height: 120px;
  }

  .model-nou {
    z-index: 99;
    width: 100px;
    height: 80px;
  }

  .content {
    display: flex;
    border-radius: 8px;
    z-index: 9;
    width: 90%;
    /* border: 1px solid gray; */
    background-color: #f7f7f7;
    /* font-family: 'Sawarabi Mincho', serif; */

    font-weight: 600;
    font-size: 14px;
    padding: 6px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    margin: 20px 40px;

    .content {
      width: 300px;
      font-size: 16px;
      border-radius: 16px;
    }

    .model-takeshi {
      width: 150px;
      height: 200px;
    }

    .model-nou {
      width: 150px;
      height: 120px;
    }
  }
  @media screen and (min-width: 1600px) {
    width: 400px;
    .content {
      width: 400px;
      font-size: 20px;
      border-radius: 20px;
    }

    .model-takeshi {
      width: 250px;
      height: 280px;
    }

    .model-nou {
      width: 200px;
      height: 160px;
    }
  }
`;
