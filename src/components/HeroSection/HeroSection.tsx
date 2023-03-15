import React from "react";
import styles from "./HeroSection.module.css";
import "aos/dist/aos.css";
// import telegramSrc from "../../assets/icons/telegramIcon.svg";
import arrowIconSrc from '../../assets/icons/arrow-icon.webp'
interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
   const {
      hero,
      bgImage,
      bgCover,
      title,
      description,
    //   socialLinksContainer,
    //   telegramIcon,
      arrowIcon
   } = styles;
   return (
      <section id={hero}>
         <div className="container">
           
            <h1 data-aos = "zoom-in-up" data-aos-duration = "1000" className={title}>
               Проект дизайна фасадов дома за 7 дней <br /> Более 200+
               реализованных объектов за 14 лет
            </h1>
            <p data-aos = "zoom-in-up" data-aos-duration = "1000" className={description}>
               Создали более 370+ проектов по нормам СНиП <br /> Опыт
               проектирования фасадов от 100 м2 до 25 000 м2 <br />
               Строим в рамках бюджета, фиксируем стоимость в договоре
               <br /> Наличный и безналичный расчёт
            </p>
            {/* <div className={socialLinksContainer}>
               <a href="https://t.me/Sasha_Save" className={telegramIcon}>
                  <img src={telegramSrc} alt="#" />
               </a>
            </div> */}
            <img src={arrowIconSrc} alt="Вниз" className={arrowIcon} />
         </div>
         <div className={bgCover}></div>
         <div className={bgImage}></div>
      </section>
   );
};
export default HeroSection;
