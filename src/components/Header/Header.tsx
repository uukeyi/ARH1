import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Header.module.css";
import blackLogoSrc from "../../assets/logoBlack.webp";
import lightLogoSrc from "../../assets/logoLight.webp";
import telegramSrc from "../../assets/heroSectionIcons/telegramIcon.svg";
import whatsAppSrc from "../../assets/heroSectionIcons/whatsappIcon.svg";
interface HeaderProps {
   customClassNameLinks?: string;
   customClassNameButton?: string;
   blackLogo?: boolean;
   customClassNameActiveLink?: string;
   displayButtons?: boolean;
   customClassNameNav?: string;
   customClassNameHeader?: string;
   customClassNameLogo?: string;
}

const Header: React.FC<HeaderProps> = ({
   customClassNameButton,
   customClassNameLinks,
   blackLogo,
   customClassNameActiveLink,
   displayButtons,
   customClassNameNav,
   customClassNameHeader,
   customClassNameLogo,
}) => {
   const {
      container,
      wrapper,
      logoWrapper,
      logoImg,
      logoLink,
      img,
      navWrapper,
      navLink,
      contactWrapper,
      numberButton,
      buttonContact,
      burgerButton,
      stick,
   } = styles;
   const [isActive, setIsActive] = useState(false);
   return (
      <header id="header" className={`${container} ${customClassNameHeader}`}>
         <div className={`container ${wrapper}`}>
            <div className={logoWrapper}>
               <NavLink className={logoLink} to="/">
                  <img
                     className={`${customClassNameLogo}`}
                     alt="ARH1"
                     src={blackLogo ? blackLogoSrc : lightLogoSrc}
                  />
               </NavLink>
            </div>
         
            <div
               className={burgerButton}
               onClick={() => setIsActive(!isActive)}
            >
               <div className={stick}></div>
               <div className={stick}></div>
               <div className={stick}></div>
               <div className={stick}></div>
            </div>
            <nav className={`${navWrapper} ${customClassNameNav}`}>
               <a href="" className={`${navLink} ${customClassNameLinks}`}>
                  О НАС
               </a>
               <NavLink
                  to="/ourProjects"
                  className={({ isActive }) =>
                     !isActive
                        ? `${navLink} ${customClassNameLinks}`
                        : `${navLink} ${customClassNameLinks} ${customClassNameActiveLink} `
                  }
               >
                  НАШИ РАБОТЫ
               </NavLink>
               <a href="" className={`${navLink} ${customClassNameLinks}`}>
                  БАЗА ЗНАНИЙ
               </a>
               <a href="" className={`${navLink} ${customClassNameLinks}`}>
                  КОНТАКТЫ
               </a>
            </nav>
            {!displayButtons ? null : (
               <div className={contactWrapper}>
                  <a className={`${numberButton} ${customClassNameButton}`}>
                     8 (812) 970-90-05
                  </a>
                  <a
                     className={buttonContact}
                     href="https://api.whatsapp.com/send?phone=88129709005"
                  >
                     <img className={img} src={whatsAppSrc} alt = "WhatsApp" />
                  </a>
                  <a className={buttonContact} href="https://t.me/Sasha_Save" >
                     <img className={img} src={telegramSrc} alt = "Telegram"/>
                  </a>
               </div>
            )}
         </div>
         <Sidebar isOpen={isActive} setIsOpen={setIsActive} />
      </header>
   );
};

export default Header;
