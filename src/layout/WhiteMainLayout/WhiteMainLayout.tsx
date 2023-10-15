import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./WhiteMainLayout.module.css";
import Link from "react-scroll/modules/components/Link";
import AdminModalEdit from "../../components/AdminModalEdit";
import AdminModalEditBlock from "../../components/AdminModalEditBlock";
import { useAppDispatch } from "../../hooks/reduxTookitHooks";
import { checkAuth } from "../../store/actions/authActions";
import UnauthorizedPopup from "../../components/UnauthorizedPopup/UnauthorizedPopup";
import { useAuth } from "../../contexts/AuthContext";
const WhiteMainLayout: React.FC = () => {
   const {
      headerButton,
      headerNavLink,
      activeHeaderLink,
      footer,
      arrowContainer,
      arrow,
      footerLogo,
      footerSubtitle,
      footerTextContainer,
      footerFeedbackContainer,
      footerFeedbackBlock,
      footerSocialLinks,
   } = styles;
   const location = useLocation();
   const currentLocation = location.pathname;
   const dispatch = useAppDispatch();
   const [isOpen, setIsOpen] = useState(false);
   const [error, setIsError] = useState(false);
   const { setIsAuth } = useAuth();
   useEffect(() => {
      if (
         localStorage.getItem("token") === null ||
         !localStorage.getItem("token")
      ) {
         setIsOpen(true);
      } else {
         dispatch(checkAuth({ setError: setIsError, setIsAuth: setIsAuth }));
      }
   }, []);
   // useEffect(() => {
   //    if (error) {
   //       alert("Ваш токен авторизации истек войдите еще раз");
   //    }
   // }, [error]);
   return (
      <>
         <UnauthorizedPopup
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isTimeout={true}
         />
         <AdminModalEdit />
         <AdminModalEditBlock />
         <Header
            customClassNameButton={headerButton}
            displayButtons={true}
            customClassNameLinks={headerNavLink}
            blackLogo={currentLocation.includes("ourServices") ? false : true}
            isWhite={currentLocation.includes("ourServices") ? true : false}
            isMainPage = {false}
            customClassNameActiveLink={activeHeaderLink}
         />
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
         <Footer
            whiteFooter={true}
            colorIcons="#fff"
            customClassNameFooter={footer}
            customClassNameFeedbackContainer={footerFeedbackContainer}
            customClassNameFeedbackBlock={footerFeedbackBlock}
            customClassNameSocialLinksContainer={footerSocialLinks}
            customClassNameTextContainer={footerTextContainer}
            customClassNameSubtitle={footerSubtitle}
            customClassNameLogo={footerLogo}
         />
      </>
   );
};

export default WhiteMainLayout;
