import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Header.module.css';

const Header = () => {
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
    <header className={container}>
      <div className={`container ${wrapper}`}>
        <div className={logoWrapper}>
          <a className={logoLink} href="/">
            <img className={logoImg} src="https://arh.yamaster.ml/images/arhlogotip02.webp" />
          </a>
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
          <a href="" className={navLink}>
            О НАС
          </a>
          <a href="" className={navLink}>
            НАШИ РАБОТЫ
          </a>
          <a href="" className={navLink}>
            БАЗА ЗНАНИЙ
          </a>
          <a href="" className={navLink}>
            КОНТАКТЫ
          </a>
        </nav>
        <div className={contactWrapper}>
          <a className={numberButton}>8 (812) 970-90-05</a>
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
