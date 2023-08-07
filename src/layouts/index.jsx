import React from 'react';
import { HomePageWrapper } from './styled';
import Header from './Header';
import Footer from './Footer';

const BaseLayout = ({ children }) => {
  return (
    <HomePageWrapper>
      <Header />
      <>{children}</>
      <Footer />
    </HomePageWrapper>
  );
};

export default BaseLayout;