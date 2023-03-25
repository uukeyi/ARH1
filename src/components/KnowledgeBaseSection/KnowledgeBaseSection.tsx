import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BoxShadowCard from '../BoxShadowCard/BoxShadowCard';
import styles from './KnowledgeBaseSection.module.css';

type cardType = {
  titleText: string;
  description: string;
  img: string;
  pathCard: string;
};
const KnowledgeBaseSection: React.FC = () => {
  const {
    knowledgeBaseSection,
    subtitle,
    linkContainer,
    title,
    cardContainer,
    cardTitle,
    cardCustom,
    link,
    fullWidthContainer,
    textContainer
  } = styles;
  const [cards, setCards] = useState<cardType[]>([
    {
      titleText: 'Купить земельный участок?',
      description:
        'Как не купить участок, который вам не нужен? Как не потерять деньги при покупке? На что обратить внимание при покупке земли для строительс...',
      img: 'https://arh.yamaster.ml/images/baza_znanii/4/1.webp',
      pathCard: 'buyLandPlot',
    },
    {
      titleText: 'Основные стили дизайна ландшафта',
      description:
        'При обустройстве территории вокруг дома рекомендуется придерживаться одного направления. Существуют разные стили ландшафтного дизайна. У к...',
      img: 'https://arh.yamaster.ml/images/baza_znanii/1/reg_french_formal_garden_in_loire_valley.webp',
      pathCard: 'mainStylesLandscapeDesign',
    },
    {
      titleText: 'Постороить дом или купить',
      description:
        'При обустройстве территории вокруг дома рекомендуется придерживаться одного направления. Существуют разные стили ландшафтного дизайна. У к...',
      img: 'https://arh.yamaster.ml/images/baza_znanii/3/1.webp',
      pathCard: 'buildHouseOrBuy',
    },
    {
      titleText: 'Разработка дизайн-проекта фасада дома',
      description:
        'Разработка проекта фасада дома – комплекс мероприятий, направленных на облагораживание строения, выявление фактов разрушения конструкции, ...',
      img: 'https://arh.yamaster.ml/images/baza_znanii/2/1.webp',
      pathCard: 'developmentProjectDesignHouseFacade',
    },
  ]);
  return (
    <section id={knowledgeBaseSection}>
      <div className={`container ${fullWidthContainer}`}>
        <Link to={'/'} className={subtitle}>
          Главная /
          <Link to={'ourProjects'} style={{ color: 'rgb(235 51 73)' }}>
            {' '}
            База знаний
          </Link>
        </Link>
        <p className={title}>БАЗА ЗНАНИЙ</p>
        <div className={linkContainer}>
          {cards.map((card) => {
            return (
              <Link className={link} to={card.pathCard}>
                {card.titleText}
              </Link>
            );
          })}
        </div>
        <div className={cardContainer}>
          {cards.map((card, index) => {
            return (
              <BoxShadowCard
                customClassNameTitle={cardTitle}
                customClassName={cardCustom}
                customClassNameTextContainer = {textContainer}
                key={index}
                projectCard={false}
                pathCard={card.pathCard}
                titleText={card.titleText}
                description={card.description}
                imgSrc={card.img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBaseSection;
