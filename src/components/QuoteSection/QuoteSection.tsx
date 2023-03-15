import React from "react";
import styles from "./QuoteSection.module.css";
import quoteIcon from "../../assets/icons/quoteSectionIcon.webp";
import quoteSectionLine from '../../assets/icons/quoteSectionLine.webp'
const QuoteSection: React.FC = () => {
   const {
      quoteSection,
      line,
      principleBlock,
      title,
      infoContainer,
      mainText,
      cardContainer,
      cardImg,
      cardTitle,
      cardSubtitle,
      footerLine
   } = styles;
   return (
      <div id={quoteSection}>
         <div className="container">
            <hr className={line} />
            <div
               data-aos="zoom-in-up"
               data-aos-duration="600"
               className={principleBlock}
            >
               <p>ПРИНЦИП</p>
            </div>
            <p data-aos="zoom-in-up" data-aos-duration="600" className={title}>
               Один подрядчик - одна ответственность.
            </p>
            <hr className={line} />
            <div className={infoContainer}>
               <p data-aos = "fade-right" className={mainText}>
                  Часто бывает так, что разные этапы выполняют отдельные фирмы,
                  предложившие лучшую цену, в результате заказчик получает
                  комплекс недочётов, за которые никто не отвечает.
                  <br />
                  <br />
                  Бывает сложно найти "крайнего" и каждый переносит
                  ответственность на другого исполнителя. Потому удобно, когда
                  подрядчик один.
               </p>
               <div data-aos = "fade-left" className={cardContainer}>
                  <img className={cardImg} src={quoteIcon} alt="Фото" />
                  <p className={cardTitle}>Александр Савенков</p>
                  <p className={cardSubtitle}>Архитектор</p>
               </div>
            </div>
            <img className={footerLine} src={quoteSectionLine} alt="Линия" />

         </div>
      </div>
   );
};
export default QuoteSection;
