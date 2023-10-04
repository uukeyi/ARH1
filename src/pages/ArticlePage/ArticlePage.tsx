import React, { useEffect, useState } from 'react';
import styles from './ArticlePage.module.css';
import KnowledgeBaseDetailsSection from '../../components/KnowledgeBaseDetailsSection/KnowledgeBaseDetailsSection';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxTookitHooks';
import { getLandingPageBlock, getLandingPageBlocks } from '../../store/actions/landingPageActions';
import { ILandingBlockElement } from '../../interfaces/landingPageResponse';
import { useLocation } from 'react-router-dom';

const ArticlePage: React.FC = () => {
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
  const { wrapper, title } = styles;
  const dispatch = useAppDispatch();
  const articlesBlock = useAppSelector((state) => state.landingPageSlice.singleBlock);
  useEffect(() => {
    dispatch(
      getLandingPageBlocks({
        showInvisible: true,
        setError: setErrorLandingBlocks,
      })
    );
  }, []);
  return (
    <section>
      <KnowledgeBaseDetailsSection pageTitle={articlesBlock.elements[0]?.value} />
      <div className="container">
        <div className={wrapper}>
          {articlesBlock?.elements.map((element: ILandingBlockElement): any => {
            if (element.typeId === 1) {
              return <h3 className={title}>{element.value}</h3>;
            } else if (element.typeId === 2) {
              return <p>{element.value}</p>;
            } else if (element.typeId === 3) {
              return <img src={element.value} alt="img" />;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
