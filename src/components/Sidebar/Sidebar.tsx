import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
interface SidebarProps {
  isOpen: boolean;
  setIsOpen: any;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const {
    wrapper,
    container,
    logoLink,
    logoImg,
    navWrapper,
    navLink,
    numberButton,
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
        className={close}
      />
      <div data-id="1" onClick={(e: any) => console.log(e.target.dataset.id)} className={container}>
        <NavLink
          onClick={() => {
            setIsOpen(false);
          }}
          to={'/'}
          className={logoLink}
        >
          <img className={logoImg} src="https://i.ibb.co/db8vJWH/11113.png" alt="logo" />
        </NavLink>
        <nav className={navWrapper}>
          <NavLink
            to={'/aboutUs'}
            style={({ isActive }) => ({
              color: isActive ? 'rgb(235 51 73)' : '#fff',
            })}
            className={navLink}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            О НАС
          </NavLink>
          <NavLink
            to={'/ourProjects'}
            style={({ isActive }) => ({
              color: isActive ? 'rgb(235 51 73)' : '#fff',
            })}
            className={navLink}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            НАШИ РАБОТЫ
          </NavLink>
          <NavLink
            to={'/knowledgeBase'}
            className={navLink}
            style={({ isActive }) => ({
              color: isActive ? 'rgb(235 51 73)' : '#fff',
            })}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            БАЗА ЗНАНИЙ
          </NavLink>
          <NavLink
            to={'/discussionCategories'}
            className={navLink}
            style={({ isActive }) => ({
              color: isActive ? 'rgb(235 51 73)' : '#fff',
            })}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            ОБСУЖДЕНИЕ
          </NavLink>
          <NavLink
            to={'/contacts'}
            className={navLink}
            style={({ isActive }) => ({
              color: isActive ? 'rgb(235 51 73)' : '#fff',
            })}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            КОНТАКТЫ
          </NavLink>
          <a className={numberButton}>8 (812) 970-90-05</a>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
