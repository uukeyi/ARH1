import React from 'react';
import styles from './QuoteSection.module.css';
import quoteIcon from '../../assets/icons/quoteSectionIcon.webp';
import quoteSectionLine from '../../assets/icons/quoteSectionLine.webp';
import QuoteLineBlock from '../QuoteLineBlock/QuoteLineBlock';
interface QuoteSectionProps {
  desc: string;
  subDesc: string;
  title: string;
  subtitle: string;
  weight: string;
  bg: string;
}
const QuoteSection: React.FC<QuoteSectionProps> = ({
  desc,
  subDesc,
  title,
  subtitle,
  weight,
  bg,
}) => {
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
    <div id={quoteSection} style={{ backgroundColor: bg }}>
      <div className="container">
        <QuoteLineBlock titleBlock={title} title={subtitle} />
        <div className={infoContainer}>
          <p data-aos="fade-right" data-aos-duration="1500" className={mainText}>
            {desc}
            <br />
            <br />
            {subDesc}
          </p>
          <div data-aos="fade-left" data-aos-duration="1500" className={cardContainer}>
            <img className={cardImg} src={quoteIcon} alt="Фото" />
            <p className={cardTitle} style={{ fontWeight: weight }}>
              Александр Савенков
            </p>
            <p className={cardSubtitle}>Архитектор</p>
          </div>
        </div>
        <img className={footerLine} src={quoteSectionLine} alt="Линия" />
      </div>
    </div>
  );
};
export default QuoteSection;
