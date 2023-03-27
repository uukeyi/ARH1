import React from "react";
import styles from "./HeroSection.module.css";
import "aos/dist/aos.css";
import Link from "react-scroll/modules/components/Link";

import arrowIconSrc from "../../assets/icons/arrow-icon.webp";
import telegramSrc from "../../assets/heroSectionIcons/telegramIcon.svg";
import whatsAppSrc from "../../assets/heroSectionIcons/whatsappIcon.svg";
const HeroSection: React.FC = () => {
   const {
      hero,
      bgImage,
      bgCover,
      title,
      description,
      socialLinksContainer,

      arrowIcon,

      numberButton,
      btnContainer,
   } = styles;
   return (
      <section id={hero}>
         <div className="container">
            <h1
               data-aos="zoom-in-up"
               data-aos-duration="1000"
               className={title}
            >
               Проект дизайна фасадов дома за 7 дней <br /> Более 200+
               реализованных объектов за 14 лет
            </h1>
            <p
               data-aos="zoom-in-up"
               data-aos-duration="1000"
               className={description}
            >
               Создали более 370+ проектов по нормам СНиП <br /> Опыт
               проектирования фасадов от 100 м2 до 25 000 м2 <br />
               Строим в рамках бюджета, фиксируем стоимость в договоре
               <br /> Наличный и безналичный расчёт
            </p>
            <div className={socialLinksContainer}>
               <a href="https://t.me/Sasha_Save">
                  <img src={telegramSrc} alt="Telegram" />
               </a>
               <a href="https://api.whatsapp.com/send?phone=88129709005">
                  <img src={whatsAppSrc} alt="WhatsApp" />
               </a>
            </div>
            <div className={btnContainer}>
               <a className={numberButton}>8 (812) 970-90-05</a>
            </div>

            <Link to="ourServices" smooth>
               <img src={arrowIconSrc} alt="Вниз" className={arrowIcon} />
            </Link>
         </div>
         <div className={bgCover}></div>
         <div className={bgImage}></div>
      </section>
   );
};
export default HeroSection;
