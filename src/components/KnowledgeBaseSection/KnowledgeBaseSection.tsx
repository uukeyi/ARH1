import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BoxShadowCard from '../BoxShadowCard/BoxShadowCard';
import styles from './KnowledgeBaseSection.module.css';
import { Button } from '@mui/material';
import AdminModal from '../AdminModal/AdminModal';
import { getLandingPageBlocks } from '../../store/actions/landingPageActions';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxTookitHooks';

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
    textContainer,
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
  const [adminModal, setAdminModal] = useState(false);

  const [errorLandingBlocks, setErrorLandingBlocks] = useState(false);
  useEffect(() => {
    dispatch(
      getLandingPageBlocks({
        showInvisible: true,
        setError: setErrorLandingBlocks,
      })
    );
  }, []);

  const dispatch = useAppDispatch();
  const landingBlocks = useAppSelector((state) => state.landingPageSlice);
  const articlesBlocks = landingBlocks.elements.filter((block) => {
    return block.page == 'articles';
  });
  return (
    <section id={knowledgeBaseSection}>
      <AdminModal open={adminModal} setOpen={setAdminModal} isOurProjects={false} />
      <div className={`container ${fullWidthContainer}`}>
        <Link to={'/'} className={subtitle}>
          Главная /
          <Link to={'/ourProjects'} style={{ color: 'rgb(235 51 73)' }}>
            {' '}
            База знаний
          </Link>
        </Link>
        <p className={title}>БАЗА ЗНАНИЙ</p>
        <Button
          variant="outlined"
          sx={{
            display: 'block',
            margin: '20px auto',
          }}
          onClick={() => {
            setAdminModal(true);
          }}
        >
          Добавить новую статью
        </Button>
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
                customClassNameTextContainer={textContainer}
                key={index}
                projectCard={false}
                pathCard={card.pathCard}
                titleText={card.titleText}
                description={card.description}
                imgSrc={card.img}
              />
            );
          })}
          {articlesBlocks.map((card, index) => {
            return (
              <BoxShadowCard
                customClassNameTitle={cardTitle}
                customClassName={cardCustom}
                customClassNameTextContainer={textContainer}
                key={index}
                projectCard={false}
                pathCard={String(card.id)}
                titleText={card.elements[0]?.value}
                description={card.elements[1]?.value}
                imgSrc={card.elements[2]?.value}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBaseSection;
