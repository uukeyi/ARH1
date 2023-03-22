import React from "react";
import styles from "./AboutUsSection.module.css";
import quoteSectionLine from "../../assets/icons/quoteSectionLine.webp";

const AboutUsSection: React.FC = () => {
   const {
      aboutUsSection,
      title,
      subtitle,
      subdescription,
      cardTitle,
      cardSubtitle,
      contentContainer,
      cardClass,
      line
   } = styles;
   return (
      <section id={aboutUsSection}>
         <div className="container">
            <p data-aos = "zoom-in" data-aos-duration = "1000" className={title}>О НАС</p>
            <p  data-aos = "zoom-in" data-aos-duration = "1000" className={subtitle}>
               <strong>АРХИТЕКТУРА АРХ1</strong> - архитектурно-строительная
               компания, основанная в 2006 году. <br />
               Мы специализируемся на разработке дизайна фасадов загородных
               домов.
            </p>
            <p  data-aos = "zoom-in" data-aos-duration = "1000" className={subdescription}>
               Компетентность подтверждают результаты, потому несколько фактов о
               нас в цифрах.
            </p>
            <div data-aos = "zoom-in" data-aos-duration = "1000" className={contentContainer}>
               {[
                  {
                     title: "25 000 м2",
                     subtitle: "Опыт строительства на одном участке",
                  },
                  {
                     title: "7 500 000 м2",
                     subtitle: "Задизайнили за 14 лет работы",
                  },
                  {
                     title: "200 объектов",
                     subtitle: "Больше 200 реализованных объектов",
                  },
                  {
                     title: "250 га",
                     subtitle:
                        "Максимальная площадь застройки, которую мы спроектировали",
                  },
               ].map((card, index) => {
                  return (
                     <div key={index} className={cardClass}>
                        <p className={cardTitle}>{card.title}</p>
                        <hr />
                        <p className={cardSubtitle}>{card.subtitle}</p>
                     </div>
                  );
               })}
            </div>
            <img className={line} src={quoteSectionLine} alt="_________________________" />
         </div>
      </section>
   );
};

export default AboutUsSection;
