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
  min-height: 100vh;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  position: relative;

  .box-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
  }

  .box-pc {
    display: flex;
    align-items: center;
    padding-top: 40px;
  }

  .box-mobile {
    display: flex;
    align-items: baseline;
    margin-top: 30px;
  }

  .img-pc {
    display: none;
  }

  .main-title {
    text-align: center;
    font-weight: 700;
    font-size: 22px;
    margin: 20px 0;
  }

  .sub-title {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 50px;
  }

  .home-page-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: absolute;
    bottom: 20px;
  }

  .box-banner {
    margin: 0 20px;
  }

  .imgLogo {
    height: 20px;
  }

  .project-name {
    width: 150px;
  }

  .btn-action {
    margin: 0 auto 150px;
    border-radius: 8px;
    width: 260px;

    border: 1px solid gray;
    text-align: center;
    font-family: 'Open Sans';
    font-weight: 700;
    cursor: pointer;
    padding: 6px 10px;
  }

  .btn-action:hover {
    color: #fff;
    background-color: #ffc542;
    border: none;
  }

  .project-title {
    width: 220px;
  }

  @media screen and (min-width: 992px) {
    .main-title {
      font-size: 46px;
    }

    .imgLogo {
      height: 30px;
    }

    .project-name {
      width: 200px;
    }

    .sub-title {
      margin-bottom: 100px;
    }

    .home-page-footer {
      bottom: 50px;
      flex-direction: row;
    }

    .sub-title {
      font-size: 30px;
    }

    .project-title {
      width: 400px;
    }
  }

  @media screen and (min-width: 992px) {
    .main-title {
      font-weight: 700;
      font-size: 46px;
      margin: 20px 0;
    }

    .box-mobile {
      display: none;
    }

    .img-pc {
      display: block;
    }

    .sub-title {
      font-size: 30px;
      font-weight: 700;
    }

    .btn-action {
      font-size: 30px;
    }

    .home-page-footer {
      flex-direction: row;
    }

    .imgLogo {
    }

    .box-banner {
      margin: 0 40px;
    }
  }

  @media screen and (min-width: 1400px) {
    .img-pc {
      display: block;
    }

    .box-pc {
      padding-top: 150px;
    }

    .main-title {
      font-weight: 700;
      font-size: 80px;
      margin: 20px 0;
    }

    .sub-title {
      font-size: 50px;
      font-weight: 700;
    }
  }
`;
