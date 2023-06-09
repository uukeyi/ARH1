import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Header.module.css';
import blackLogoSrc from '../../assets/logoBlack.webp';
import lightLogoSrc from '../../assets/logoLight.webp';
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
    <header id='header' className={container}>
      <div className={`container ${wrapper}`}>
        <div className={logoWrapper}>
          <NavLink className={logoLink} to="/">
            <img className={logoImg} alt="ARH1" src={blackLogo ? blackLogoSrc : lightLogoSrc} />
          </NavLink>
        </div>
        {/* <div className={burgerButton} onClick={() => setIsActive(!isActive)}>
          <span></span>
        </div> */}
        <div className={burgerButton} onClick={() => setIsActive(!isActive)}>
          <div className={stick}></div>
          <div className={stick}></div>
          <div className={stick}></div>
          <div className={stick}></div>
        </div>
        <nav className={navWrapper}>
          <NavLink
            to="aboutUs"
            className={({ isActive }) =>
              !isActive
                ? `${navLink} ${customClassNameLinks}`
                : `${navLink} ${customClassNameLinks} ${customClassNameActiveLink} `
            }
          >
            О НАС
          </NavLink>
          <NavLink
            to="ourProjects"
            className={({ isActive }) =>
              !isActive
                ? `${navLink} ${customClassNameLinks}`
                : `${navLink} ${customClassNameLinks} ${customClassNameActiveLink} `
            }
          >
            НАШИ РАБОТЫ
          </NavLink>
          <NavLink
            to="knowledgeBase"
            className={({ isActive }) =>
              !isActive
                ? `${navLink} ${customClassNameLinks}`
                : `${navLink} ${customClassNameLinks} ${customClassNameActiveLink} `
            }
          >
            БАЗА ЗНАНИЙ
          </NavLink>
          <NavLink
            to="contacts"
            className={({ isActive }) =>
              !isActive
                ? `${navLink} ${customClassNameLinks}`
                : `${navLink} ${customClassNameLinks} ${customClassNameActiveLink} `
            }
          >
            КОНТАКТЫ
          </NavLink>
          <NavLink
            to="discussionFacade"
            className={({ isActive }) =>
              !isActive
                ? `${navLink} ${customClassNameLinks}`
                : `${navLink} ${customClassNameLinks} ${customClassNameActiveLink} `
            }
          >
            ОБСУЖДЕНИЕ
          </NavLink>
        </nav>
        <div className={contactWrapper}>
          <a className={`${numberButton} ${customClassNameButton}`}>8 (812) 970-90-05</a>
          <a className={buttonContact} href="https://api.whatsapp.com/send?phone=88129709005">
            <img className={img} src="https://arh.yamaster.ml/images/ikon/icons8-whatsapp.svg" />
          </a>
          <a className={buttonContact} href="https://t.me/Sasha_Save">
            <img className={img} src="https://arh.yamaster.ml/images/ikon/icons8-telegram.svg" />
          </a>
        </div>
      </div>
      <Sidebar isOpen={isActive} setIsOpen={setIsActive} />
    </header>
  );
};

export default Header;
