import { styled } from 'styled-components';

export const HomePageWrapper = styled.div`
  .ptop-50 {
    padding-top: 50px;
  }

  .ant-input-affix-wrapper {
    background-color: #f0f0f0;
  }

  .ant-input {
    background-color: #f0f0f0;
    /* color: #fff; */
  }

  .select-option {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }

  .text-option {
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    color: black;
  }

  .text-logo {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    line-height: 43.58px;

    &-blue {
      font-size: 20px;
      color: #096dd9;
      line-height: 16px;
    }
  }

  .service-item {
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    line-height: 17.7px;
    margin: 0 10px;
    position: relative;
  }

  .service-item:not(:last-child):after {
    content: '';
    display: block;
    height: 15px;
    width: 1px;
    position: absolute;
    top: 0;

    right: -10px;
    background-color: #fff;
  }

  .copyright {
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
  }

  .home-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeaderWrapper = styled.div`
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  .box-banner {
    margin: 0 20px;
  }

  .imgLogo {
    width: 200px;
  }

  .btn-action {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    border-radius: 16px;
    background: #faad14;
    width: 260px;
    height: 48px;
    line-height: 48px;
    color: #fff;
    text-align: center;
    font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }

  .text-logo {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    line-height: 43.58px;

    &-blue {
      font-size: 20px;
      color: #096dd9;
      line-height: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    .imgLogo {
      width: 280px;
    }

    .box-banner {
      margin: 0 40px;
    }
  }
`;
