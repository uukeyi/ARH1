import React from 'react';
import vkIcon from '../../assets/icons/vkIcon.png';
import telegramIcon from '../../assets/icons/telegramIcon.svg';
import instagramIcon from '../../assets/icons/instagramIcon.svg';
import whatsappIcon from '../../assets/icons/whatsappIcon.svg';
import styles from './Footer.module.css';
import BeforeAfterSlider from '../BeforeAfterSlider/BeforeAfterSlider';

const Footer = () => {
  const {
    wrapper,
    top,
    callText,
    contactsLink,
    topText,
    iconsWrapper,
    icon,
    img,
    phoneWrapper,
    phoneInput,
    phoneButton,
    bottom,
    bottomText,
  } = styles;
  return (
    <footer className={wrapper}>
      <div className={top}>
        <p className={callText}>ПОЗВОНИТЬ:</p>
        <a className={contactsLink} href="tel:+78129709005">
          +7 (812) 970-90-05
        </a>
        <p className={topText}>
          Красногвардейская площадь 3Е <br />
          ARTPLAY, метро Новочеркасская, <br />
          Санкт-Петербург
        </p>
        <div className={iconsWrapper}>
          <a className={icon} href="https://vk.com/arh1_ru">
            <img className={img} alt="contactsIcon" src={vkIcon} />
          </a>
          <a className={icon} href="https://www.instagram.com/design_facad">
            <img className={img} alt="contactsIcon" src={instagramIcon} />
          </a>
          <a className={icon} href="https://api.whatsapp.com/send?phone=88129709005">
            <img className={img} alt="contactsIcon" src={whatsappIcon} />
          </a>
          <a className={icon} href="https://t.me/Sasha_Save">
            <img className={img} alt="contactsIcon" src={telegramIcon} />
          </a>
        </div>
        <div className={phoneWrapper}>
          <input className={phoneInput} />
          <button className={phoneButton}>ОТПРАВИТЬ ЗАЯВКУ</button>
        </div>
      </div>
      <div className={bottom}>
        <BeforeAfterSlider
          beforeImg="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg"
          afterImg="https://da28ojrjakn6f.cloudfront.net/tickets/4355/NEW/img_1650272397_1650273497__1.jpg?v=1.1.0"
        />
        <div className={bottomText}>
          © "АРХИТЕКТУРА" 2006-2020. Все права защищены.
          <br /> <br />
          Фотографии и тексты использованные на сайте являются авторской <br />
          собственностью ООО "АРХИТЕКТУРА" ОГРН 1177835017060
        </div>
      </div>
    </footer>
  );
};

export default Footer;
