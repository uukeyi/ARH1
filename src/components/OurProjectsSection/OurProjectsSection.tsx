import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const landingBlocks = useAppSelector((state) => state.landingPageSlice);
  const projectBlocks = landingBlocks.elements.filter((block) => {
    return block.page == 'projects';
  });
  const { isAuthSettings } = useAuth();
  useEffect(() => {
    if (errorLandingBlocks) {
      alert('Не получилось загрузить данные');
      navigate('/');
    }
  }, [errorLandingBlocks]);
  const [adminModal, setAdminModal] = useState(false);
  return (
    <section id={ourProjectsSection}>
      <div className={`${fullWidthContainer} container`}>
        <Link to={'/'} className={subtitle}>
          Главная /
          <Link to={'ourProjects'} style={{ color: 'rgb(235 51 73)' }}>
            {' '}
            Наши работы
          </Link>
        </Link>
        <p className={title}>ПРОЕКТЫ</p>

        <div className={cardContainer}>
          {projectBlocks.map((card, index) => {
            if (!card.isVisible && !isAuthSettings.isAdmin) {
              return null;
            } else {
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
                  isStatic={false}
                  block={card}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProjectsSection;
