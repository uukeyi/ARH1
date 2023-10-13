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
const MainLayout: React.FC = () => {
   const { arrowContainer, arrow } = styles;
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
   return (
      <>
         <UnauthorizedPopup
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isTimeout={true}
         />
         <Header isMainPage = {true}  displayButtons={true} />
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
         <Footer colorIcons="black" />
      </>
   );
};

export default MainLayout;
