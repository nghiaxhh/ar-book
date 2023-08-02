import { styled } from 'styled-components';

export const HomePageWrapper = styled.div`
  .ptop-50 {
    padding-top: 50px;
  }

  .text-logo {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    line-height: 43.58px;
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
  height: auto;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  //Ipad
  img {
    padding: 20px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (min-width: 768px) {
    height: 1080px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
