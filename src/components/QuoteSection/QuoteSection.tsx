import React from "react";
import styles from "./QuoteSection.module.css";
import quoteIcon from "../../assets/icons/quoteSectionIcon.webp";
import quoteSectionLine from "../../assets/icons/quoteSectionLine.webp";
import QuoteLineBlock from "../QuoteLineBlock/QuoteLineBlock";
interface QuoteSectionProps {
   desc: string;
   subDesc: string;
}
const QuoteSection: React.FC<QuoteSectionProps> = ({ desc, subDesc }) => {
   const {
      quoteSection,
      infoContainer,
      mainText,
      cardContainer,
      cardImg,
      cardTitle,
      cardSubtitle,
      footerLine,
   } = styles;
   return (
      <div id={quoteSection}>
         <div className="container">
            <QuoteLineBlock
               titleBlock="ПРИНЦИП"
               title="Один подрядчик - одна ответственность."
            />
            <div className={infoContainer}>
               <p data-aos="fade-right" className={mainText}>
                  {desc}
                  <br />
                  <br />
                  {subDesc}
               </p>
               <div data-aos="fade-left" className={cardContainer}>
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
