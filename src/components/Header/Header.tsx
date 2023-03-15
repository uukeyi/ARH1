import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const {
    container,
    wrapper,
    logoWrapper,
    logoImg,
    logoLink,
    img,
    buttonWrapper,
    buttonNav,
    contactWrapper,
    numberButton,
    buttonContact,
  } = styles;
  return (
    <header className={container}>
      <div className={`container ${wrapper}`} >
        <div className={logoWrapper}>
          <a className={logoLink} href="/">
            <img className={logoImg} src="https://arh.yamaster.ml/images/arhlogotip02.webp" />
          </a>
        </div>
        <nav className={buttonWrapper}>
          <button className={buttonNav}>О НАС</button>
          <button className={buttonNav}>НАШИ РАБОТЫ</button>
          <button className={buttonNav}>БАЗА ЗНАНИЙ</button>
          <button className={buttonNav}>КОНТАКТЫ</button>
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
    </header>
  );
};

export default Header;
