import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./SingleProjectPageLayout.module.css";
import Link from "react-scroll/modules/components/Link";

const SingleProjectPageLayout: React.FC = () => {
   const {
      headerButton,
      headerNavLink,
      activeHeaderLink,
      
      headerNav,
      header,
      headerLogo,
      arrowContainer,
      arrow
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
      </>
   );
};

export default SingleProjectPageLayout;
