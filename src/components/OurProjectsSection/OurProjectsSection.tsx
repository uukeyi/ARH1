import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BoxShadowCard from '../BoxShadowCard/BoxShadowCard';
import styles from './OurProjectsSection.module.css';
import { Button } from '@mui/material';
import AdminModal from '../AdminModal/AdminModal';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxTookitHooks';
import { getLandingPageBlocks } from '../../store/actions/landingPageActions';
import { useAuth } from '../../contexts/AuthContext';

type cardType = {
  titleText: string;
  cityText: string;
  squareHouse: string;
  squareFacade: string;
  img: string;
  pathCard: string;
  floor?: string;
  date?: string;
};

const OurProjectsSection: React.FC = () => {
  const {
    ourProjectsSection,
    customCard,
    subtitle,
    title,
    cardContainer,
    cardTitle,
    fullWidthContainer,
  } = styles;
  const [isError, setIsError] = useState(false);

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
  const [cards, setCards] = useState<cardType[]>([
    {
      titleText: 'ДИЗАЙН ФАСАДА ДОМА В СТИЛЕ РАЙТА (ПРЕРИЙ)',
      cityText: 'г. Пушкин, д. Александровская',
      squareHouse: '320 м2',
      squareFacade: '410 м2',
      img: 'https://i.ibb.co/cDvv6WK/34-big.webp',
      pathCard: 'designFacadeStyleRight',
    },
    {
      titleText: 'ДИЗАЙН ФАСАДА ДОМА ИЗ КАМНЯ',
      cityText: 'Санкт-Петербург, д. Кирполье',
      squareHouse: '350 м2',
      squareFacade: '450 м2',
      img: 'https://i.ibb.co/9wXTxKL/1-min.webp',
      pathCard: 'designFacadeStone',
    },
    {
      titleText: 'ДИЗАЙН ФАСАДА ЧАСТНОГО ДОМА',
      cityText: 'Санкт-Петербург, Петергоф',
      squareHouse: '270 м2',
      squareFacade: '340 м2',
      img: 'https://i.ibb.co/bW6qfT3/40-big-min.webp',
      pathCard: 'designFacadePrivateHousePeterhof',
    },
    {
      titleText: 'ДИЗАЙН ФАСАДА ЧАСТНОГО ДОМА',
      cityText: 'Санкт-Петербург, посёлок Песочный',
      squareHouse: '280 м2',
      squareFacade: '350 м2',
      img: 'https://i.ibb.co/pZStLCY/1-min-1.webp',
      pathCard: 'designFacadePrivateHouseSand',
    },
    {
      titleText: 'ДИЗАЙН ФАСАДОВ ЗАГОРОДНОГО ДОМА',
      cityText: "Санкт-Петербург, коттеджный посёлок 'Охтинский Парк'",
      squareHouse: '350 м2',
      squareFacade: '450 м2',
      img: 'https://i.ibb.co/z6frQfh/6-big.webp',
      pathCard: 'designFacadeVillaticHouse',
    },
    {
      titleText: 'ПРОЕКТ РЕКОНСТРУКЦИИ БАЗЫ ОТДЫХА (ТУРБАЗЫ). ЭСКИЗ',
      cityText: 'Челябинская область, г. Миасс',
      squareHouse: '6 га',
      squareFacade: '11500 м2',
      img: 'https://i.ibb.co/QbsGrmt/1-min1.webp',
      pathCard: 'projectReconstructionRelaxBase',
    },
  ]);
  const projectBlocks = landingBlocks.elements.filter((block) => {
    return block.page == 'projects';
  });
  const { isAuthSettings } = useAuth();

  const [adminModal, setAdminModal] = useState(false);
  return (
    <section id={ourProjectsSection}>
      <AdminModal open={adminModal} setOpen={setAdminModal} pageBlock="projects" />
      <div className={`${fullWidthContainer} container`}>
        <Link to={'/'} className={subtitle}>
          Главная /
          <Link to={'ourProjects'} style={{ color: 'rgb(235 51 73)' }}>
            {' '}
            Наши работы
          </Link>
        </Link>
        <p className={title}>ПРОЕКТЫ</p>
        {isAuthSettings.isAdmin ? (
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
        ) : (
          <></>
        )}

        <div className={cardContainer}>
          {cards.map((card, index) => {
            return (
              <BoxShadowCard
                customClassNameTitle={cardTitle}
                customClassName={customCard}
                cityText={card.cityText}
                key={index}
                projectCard={true}
                pathCard={card.pathCard}
                titleText={card.titleText}
                imgSrc={card.img}
                squareHouse={card.squareHouse}
                suqareFacade={card.squareFacade}
              />
            );
          })}
          {projectBlocks.map((card, index) => {
            return (
              <BoxShadowCard
                customClassNameTitle={cardTitle}
                customClassName={customCard}
                cityText={card.elements[2]?.value}
                key={index}
                projectCard={true}
                floor={card.elements[5]?.value}
                date={card.elements[3]?.value}
                pathCard={String(card?.id)}
                titleText={card.elements[1]?.value}
                imgSrc={card.elements[0]?.value}
                squareHouse={card.elements[4]?.value}
                suqareFacade={card.elements[6]?.value}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProjectsSection;
