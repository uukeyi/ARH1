import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./MainLayout.module.css";
import Link from "react-scroll/modules/components/Link";

const MainLayout: React.FC = () => {
   const { arrowContainer, arrow } = styles;

   return (
      <>
         <Header displayButtons={true} />
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
