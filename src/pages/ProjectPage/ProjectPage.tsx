import React, { useEffect, useState } from 'react';
import SingleProjectPageImgCover from '../../components/SingleProjectPageSection/SingleProjectPageSection';
import { Link, useLocation } from 'react-router-dom';
import styles from './ProjectPage.module.css';
import { ILandingBlock, ILandingBlockElement } from '../../interfaces/landingPageResponse';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxTookitHooks';
import { getLandingPageBlock, getLandingPageBlocks } from '../../store/actions/landingPageActions';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const ProjectPage: React.FC = () => {
  const { linkContainer, video } = styles;
  const [errorLandingBlocks, setErrorLandingBlocks] = useState(false);
  // const [projectBlock, setProjectBlock] = useState([])
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
  useEffect(() => {
    dispatch(
      getLandingPageBlocks({
        showInvisible: true,
        setError: setErrorLandingBlocks,
      })
    );
  }, []);
  const dispatch = useAppDispatch();
  // const landingBlocks = useAppSelector((state) => state.landingPageSlice);
  const projectBlock = useAppSelector((state) => state.landingPageSlice.singleBlock);
  // const projectBlock = landingBlocks.elements.filter((block) => {
  //   return block.page == 'projects';
  // });
  useEffect(() => {
    console.log(projectBlock);
    console.log(currentId);
  }, [projectBlock]);
  if (projectBlock) {
    return (
      <div style={{ height: '100%' }}>
        <SingleProjectPageImgCover
          titleText={projectBlock.elements[1]?.value}
          city={projectBlock.elements[2]?.value}
          houseSquare={projectBlock.elements[4]?.value}
          facadeSquare={projectBlock.elements[6]?.value}
          floors={projectBlock.elements[5]?.value}
          date={projectBlock.elements[3]?.value}
          reconstructionPage={true}
          // imgSrc={projectBlock.elements[0]?.value}
          imgSrc="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
        >
          <div className="single-project-page-content-container">
            <p className={linkContainer}>
              <Link to={'/'}> Главная </Link> /<Link to={'/ourProjects'}> &nbsp; Наши работы</Link>{' '}
              /
              <span style={{ color: 'rgb(235 51 73)' }}>
                {' '}
                &nbsp;{projectBlock.elements[1]?.value}
              </span>
            </p>
            <p style={{ marginTop: '30px' }} className="single-project-page-title">
              {projectBlock.elements[1]?.value}
            </p>
            <p style={{ marginTop: '30px' }} className="single-project-page-description">
              {projectBlock.elements[2]?.value}
              <br /> Площадь дома:
              <strong>{projectBlock.elements[4]?.value}</strong>
              <br />
              Площадь фасадов: <strong>{projectBlock.elements[6]?.value}</strong>
              <br />
              <br />
            </p>

            {projectBlock?.elements.map((element: ILandingBlockElement): any => {
              if (element.typeId === 1) {
                return (
                  <p
                    onClick={() => console.log(element)}
                    style={{ marginTop: '30px' }}
                    className="single-project-page-title"
                  >
                    {element.value}
                  </p>
                );
              } else if (element.typeId === 2) {
                return (
                  <p style={{ marginTop: '30px' }} className="single-project-page-description">
                    {element.value}
                  </p>
                );
              } else if (element.typeId === 3) {
                return (
                  <img
                    className="single-project-page-img"
                    style={{ marginTop: '20px' }}
                    src={element.value}
                    alt="Не удалось отобразить картинку"
                  />
                );
              }
            })}
          </div>
        </SingleProjectPageImgCover>
      </div>
    );
  } else {
    return <LoadingSpinner></LoadingSpinner>;
  }
};

export default ProjectPage;
