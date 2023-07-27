import styled from 'styled-components';

export const LayoutCommon = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  .main-title {
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    color: #ffffff;
  }

  //Ipad

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
