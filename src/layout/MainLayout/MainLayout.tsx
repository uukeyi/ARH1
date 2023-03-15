import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./MainLayout.module.css";
interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = () => {
   const { arrowContainer, arrow } = styles;

   return (
      <>
         <Header />
         <main className="main">
            <Outlet />
            <div
               data-aos="fade-down"
               data-aos-duration="600"
               className={arrowContainer}
            >
               <div className={arrow}></div>
            </div>
         </main>
         <Footer />
      </>
   );
};

export default MainLayout;
