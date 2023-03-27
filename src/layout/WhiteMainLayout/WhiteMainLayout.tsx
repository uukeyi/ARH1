import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./WhiteMainLayout.module.css";
import Link from "react-scroll/modules/components/Link";


const WhiteMainLayout: React.FC = () => {
   const { headerButton , headerNavLink , activeHeaderLink , footer , arrowContainer, arrow , footerLogo , footerSubtitle  , footerTextContainer , footerFeedbackContainer  , footerFeedbackBlock , footerSocialLinks} = styles;
   return (
      <>
         <Header customClassNameButton={headerButton} displayButtons = {true} customClassNameLinks = {headerNavLink} blackLogo = {true} customClassNameActiveLink = {activeHeaderLink} />
         <main className="main">   
            <Outlet />
            <Link to="header" smooth duration={1000}>
               <div
                  data-aos="fade-down"
                  data-aos-duration="600"
                  className={arrowContainer}
               >
                  <div className={arrow}></div>
               </div>
            </Link>
         </main>
         <Footer whiteFooter = {true}  colorIcons = "#fff" customClassNameFooter = {footer}  customClassNameFeedbackContainer = {footerFeedbackContainer} customClassNameFeedbackBlock = {footerFeedbackBlock} customClassNameSocialLinksContainer = {footerSocialLinks} customClassNameTextContainer = {footerTextContainer} customClassNameSubtitle = {footerSubtitle} customClassNameLogo = {footerLogo} />
      </>
   );
};

export default WhiteMainLayout;
