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
import { useAppSelector } from "../../hooks/reduxTookitHooks";
import { getLandingPageBlocks } from "../../store/actions/landingPageActions";
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
   const [errorBlocks, setErrorLandingBlocks] = useState(false);
   const landingBlocks = useAppSelector((state) => state.landingPageSlice);
   useEffect(() => {
      if (
         localStorage.getItem("token") === null ||
         !localStorage.getItem("token")
      ) {
         setIsOpen(true);
      } else {
         dispatch(checkAuth({ setError: setIsError, setIsAuth: setIsAuth }));
      }
      dispatch(
         getLandingPageBlocks({
            showInvisible: true,
            setError: setErrorLandingBlocks,
         })
      );
   }, []);
   if (errorBlocks) {
      alert("Не получилось загрузить сайт");
   }
   const footerObj = landingBlocks.elements.find((el) => {
      return el.name === "WHITE FOOTER";
   });

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
            isMainPage={false}
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
         {footerObj ? (
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
               footerWhite={{
                  desc: footerObj.elements[0],
                  phoneNumber1: footerObj.elements[1],
                  adress1: footerObj.elements[2],
                  phoneNumber2: footerObj.elements[3],
                  adress2: footerObj.elements[4],
               }}
               vkLink={footerObj.elements[5]}
               instagramLink={footerObj.elements[6]}
               whatsappLink={footerObj.elements[7]}
               telegramLink={footerObj.elements[8]}
            />
         ) : null}
      </>
   );
};

export default WhiteMainLayout;
