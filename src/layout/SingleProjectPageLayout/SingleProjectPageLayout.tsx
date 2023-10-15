import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./SingleProjectPageLayout.module.css";
import Link from "react-scroll/modules/components/Link";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxTookitHooks";
import { checkAuth } from "../../store/actions/authActions";
import { useAuth } from "../../contexts/AuthContext";
import UnauthorizedPopup from "../../components/UnauthorizedPopup/UnauthorizedPopup";
const SingleProjectPageLayout: React.FC = () => {
   const {
      headerButton,
      headerNavLink,
      activeHeaderLink,

      headerNav,
      header,
      headerLogo,
      arrowContainer,
      arrow,
   } = styles;
   const dispatch = useAppDispatch();
   const [error, setIsError] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
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
         <Header
            customClassNameButton={headerButton}
            customClassNameLinks={headerNavLink}
            blackLogo={true}
            customClassNameActiveLink={activeHeaderLink}
            displayButtons={false}
            customClassNameNav={headerNav}
            customClassNameHeader={header}
            customClassNameLogo={headerLogo}
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
      </>
   );
};

export default SingleProjectPageLayout;
