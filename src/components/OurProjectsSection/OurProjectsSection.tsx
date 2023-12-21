import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BoxShadowCard from '../BoxShadowCard/BoxShadowCard';
import styles from './OurProjectsSection.module.css';
import { Button } from '@mui/material';
import AdminModal from '../AdminModal/AdminModal';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxTookitHooks';
import { createBlock, getLandingPageBlocks } from '../../store/actions/landingPageActions';
import { useAuth } from '../../contexts/AuthContext';
import { ILandingBlock, landingBlockPrototype } from '../../interfaces/landingPageResponse';

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
  const [block, setBlock] = useState<ILandingBlock>(landingBlockPrototype);
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log(projectBlocks);
  }, [projectBlocks]);
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

        {isAuthSettings.isAdmin ? (
          <Button
            variant="outlined"
            sx={{
              display: 'block',
              margin: '20px auto',
            }}
            onClick={() => {
              dispatch(
                createBlock({
                  nameBlock: `new project block ${projectBlocks.length + 1}`,
                  orderIndex: projectBlocks.length,
                  pageBlock: 'projects',
                  isVisible: true,
                  isDeleted: false,
                  elements: [],
                  setError: setError,
                  createWithInitialData: true,
                  initialElements: [
                    {
                      value:
                        'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80',
                      orderIndex: 0,
                      typeId: 3,
                      aosAnimation: '',
                    },
                    {
                      value: 'заголовок',
                      orderIndex: 1,
                      typeId: 2,
                      aosAnimation: '',
                    },
                    {
                      value: 'место',
                      orderIndex: 2,
                      typeId: 2,
                      aosAnimation: '',
                    },
                    {
                      value: 'дата',
                      orderIndex: 3,
                      typeId: 2,
                      aosAnimation: '',
                    },
                    {
                      value: 'площадь дома',
                      orderIndex: 4,
                      typeId: 2,
                      aosAnimation: '',
                    },
                    {
                      value: 'этажность',
                      orderIndex: 5,
                      typeId: 2,
                      aosAnimation: '',
                    },
                    {
                      value: 'площадь фасадов',
                      orderIndex: 6,
                      typeId: 2,
                      aosAnimation: '',
                    },
                  ],
                })
              );

              // setAdminModal(true);
            }}
          >
            Создать блок
          </Button>
        ) : (
          <></>
        )}

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
                  floor={card.elements[9]?.value}
                  date={card.elements[3]?.value}
                  pathCard={String(card?.id)}
                  titleText={card.elements[1]?.value}
                  imgSrc={card.elements[0]?.value}
                  squareHouse={card.elements[8]?.value}
                  suqareFacade={card.elements[10]?.value}
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
