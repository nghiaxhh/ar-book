import React from 'react';
import { HomePageWrapper } from './styled';

const BaseLayout = ({ children }) => {
  return (
    <HomePageWrapper>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </HomePageWrapper>
  );
};

export default BaseLayout;
