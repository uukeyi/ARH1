import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './WhiteMainLayout.module.css';

const WhiteMainLayout: React.FC = () => {
  const {
    headerButton,
    headerNavLink,
    activeHeaderLink,
    footer,
    footerLogo,
    footerSubtitle,
    footerTextContainer,
    footerFeedbackContainer,
  } = styles;
  return (
    <>
      <Header
        customClassNameButton={headerButton}
        customClassNameLinks={headerNavLink}
        blackLogo={true}
        customClassNameActiveLink={activeHeaderLink}
      />
      <main className="main">
        <Outlet />
      </main>
      <Footer
        whiteFooter={true}
        customClassNameFooter={footer}
        customClassNameFeedbackContainer={footerFeedbackContainer}
        customClassNameTextContainer={footerTextContainer}
        customClassNameSubtitle={footerSubtitle}
        customClassNameLogo={footerLogo}
      />
    </>
  );
};

export default WhiteMainLayout;
