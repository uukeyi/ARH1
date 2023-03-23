import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./WhiteMainLayout.module.css";

const WhiteMainLayout: React.FC = () => {
   const { headerButton , headerNavLink , activeHeaderLink , footer , footerLogo , footerSubtitle  , footerTextContainer , footerFeedbackContainer  , footerFeedbackBlock , footerSocialLinks} = styles;
   return (
      <>
         <Header customClassNameButton={headerButton} customClassNameLinks = {headerNavLink} blackLogo = {true} customClassNameActiveLink = {activeHeaderLink} />
         <main className="main">   
            <Outlet />
         </main>
         <Footer whiteFooter = {true} colorIcons = "#fff" customClassNameFooter = {footer}  customClassNameFeedbackContainer = {footerFeedbackContainer} customClassNameFeedbackBlock = {footerFeedbackBlock} customClassNameSocialLinksContainer = {footerSocialLinks} customClassNameTextContainer = {footerTextContainer} customClassNameSubtitle = {footerSubtitle} customClassNameLogo = {footerLogo} />
      </>
   );
};

export default WhiteMainLayout;
