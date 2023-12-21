import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./MainLayout.module.css";
import Link from "react-scroll/modules/components/Link";
import { useAppDispatch } from "../../hooks/reduxTookitHooks";
import { checkAuth } from "../../store/actions/authActions";
import UnauthorizedPopup from "../../components/UnauthorizedPopup/UnauthorizedPopup";
import { useAuth } from "../../contexts/AuthContext";
import { useAppSelector } from "../../hooks/reduxTookitHooks";
import { getLandingPageBlocks } from "../../store/actions/landingPageActions";
const MainLayout: React.FC = () => {
   const { arrowContainer, arrow } = styles;
   const dispatch = useAppDispatch();
   const [isOpen, setIsOpen] = useState(false);
   const [error, setIsError] = useState(false);
   const [errorBlocks, setErrorLandingBlocks] = useState(false);
   const { setIsAuth } = useAuth();
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
   const footer = landingBlocks.elements.find((el) => {
      return el.name === "FOOTER";
   });

   return (
      <>
         <UnauthorizedPopup
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isTimeout={true}
         />
         <Header isMainPage={true} displayButtons={true} />
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
         {footer ? (
            <Footer
               vkLink={footer.elements[2]}
               instagramLink={footer.elements[3]}
               whatsappLink={footer.elements[4]}
               telegramLink={footer.elements[5]}
               footerBlack={{
                  phoneNumber: footer.elements[0],
                  adress: footer.elements[1],
               }}
               colorIcons="black"
            />
         ) : null}
      </>
   );
};

export default MainLayout;
