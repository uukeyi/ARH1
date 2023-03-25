import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./SingleProjectPageLayout.module.css";
const SingleProjectPageLayout: React.FC = () => {
   const {
      headerButton,
      headerNavLink,
      activeHeaderLink,
      footer,
      footerLogo,
      footerSubtitle,
      footerTextContainer,
      footerFeedbackContainer,
      footerFeedbackBlock,
      footerSocialLinks,
      headerNav,
      header,
      headerLogo
   } = styles;

   return (
      <>
         <Header
            customClassNameButton={headerButton}
            customClassNameLinks={headerNavLink}
            blackLogo={true}
            customClassNameActiveLink={activeHeaderLink}
            displayButtons = {false}
            customClassNameNav = {headerNav}
            customClassNameHeader = {header}
            customClassNameLogo = {headerLogo}
         />
         <main className="main">
            <Outlet/>
         </main>
      </>
   );
};

export default SingleProjectPageLayout;
