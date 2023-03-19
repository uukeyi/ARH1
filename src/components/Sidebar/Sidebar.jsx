import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const {
    wrapper,
    container,
    logoLink,
    logoImg,
    navWrapper,
    navLink,
    numberButton,
    blur,
    active,
    close,
  } = styles;
  const classList = `${wrapper} ${active}`;
  return (
    <div className={isOpen ? classList : wrapper}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        class={close}
      />
      <div className={container}>
        <a href="#" className={logoLink}>
          <img
            className={logoImg}
            src="https://arh.yamaster.ml/images/arhlogotip02.webp"
            alt="logo"
          />
        </a>
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
          <a className={numberButton}>8 (812) 970-90-05</a>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
