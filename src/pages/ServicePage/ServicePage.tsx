import React, { useEffect, useState } from 'react';
import styles from './ServicePage.module.css';
import KnowledgeBaseDetailsSection from '../../components/KnowledgeBaseDetailsSection/KnowledgeBaseDetailsSection';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxTookitHooks';
import { getLandingPageBlock, getLandingPageBlocks } from '../../store/actions/landingPageActions';
import { ILandingBlockElement } from '../../interfaces/landingPageResponse';
import { Link, useLocation } from 'react-router-dom';
import ServiceDetailsSection from '../../components/ServiceDetailsSection/ServiceDetailsSection';
import AdminModal from '../../components/AdminModal/AdminModal';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '@mui/material';

const ServicePage: React.FC = () => {
  const [errorLandingBlocks, setErrorLandingBlocks] = useState(false);
  const location = useLocation();
  const currentLocation = location.pathname;
  const currentId = currentLocation.match(/\d+/g);
  useEffect(() => {
    dispatch(
      getLandingPageBlock({
        id: currentId,
        showInvisible: true,
        setError: setErrorLandingBlocks,
      })
    );
  }, []);
  const [adminModal, setAdminModal] = useState(false);
  const { isAuthSettings } = useAuth();
  const { wrapper, title, subtitle, listItem, video } = styles;
  const dispatch = useAppDispatch();
  const serviceBlock = useAppSelector((state) => state.landingPageSlice.singleBlock);
  useEffect(() => {
    dispatch(
      getLandingPageBlock({
        id: 57,
        showInvisible: true,
        setError: setErrorLandingBlocks,
      })
    );
  }, []);
  const mainContent = serviceBlock.elements.slice(2);
  return (
    <section>
      <AdminModal open={adminModal} setOpen={setAdminModal} pageBlock="facadeDesign" />
      <ServiceDetailsSection />
      <div className="container">
        <div className={wrapper}>
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
          <Link to={'/'} className={subtitle}>
            Главная /{' '}
            <Link to={'/ourServices'} className={subtitle}>
              Наши услуги /{' '}
              <Link to="/" style={{ color: 'rgb(235 51 73)' }}>
                Проект фасада дома
              </Link>
            </Link>
          </Link>
          {mainContent?.map((element: ILandingBlockElement, index): any => {
            if (element.typeId === 1) {
              return (
                <h3 className={title} key={index}>
                  {element.value}
                </h3>
              );
            } else if (element.typeId === 2) {
              //   {
              //     element.aosAnimation === 'youtubeLink' ? (
              //       <iframe
              //         key={index}
              //         className={video}
              //         src={element.value}
              //         frameBorder="0"
              //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              //         allowFullScreen
              //         title="Embedded youtube"
              //       />
              //     ) : (
              return (
                <p key={index} className={element.aosAnimation === 'liElement' ? listItem : ''}>
                  {element.value}
                </p>
              );
              //   }
            } else if (element.typeId === 3) {
              return <img key={index} src={element.value} alt="img" />;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
// {element.aosAnimation == 'youtubeLink' ? <iframe
//                 className={video}
//                 src="https://www.youtube.com/embed/vxB5YMJQUos?start=0&showinfo=1&controls=1&autoplay=0"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title="Embedded youtube"
//              /> : (<p className={element.aosAnimation == 'liElement' ? listItem : ''}>
//              {element.value}
//            </p>)}
