import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceDetailsSection.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxTookitHooks';
import { getLandingPageBlock } from '../../store/actions/landingPageActions';

const ServiceDetailsSection: React.FC = () => {
  const [errorLandingBlocks, setErrorLandingBlocks] = useState(false);
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
  const { cover, baOverlay, subtitle, title, wrapper } = styles;
  return (
    <div className={cover}>
      <div className={baOverlay}>
        <div className="container">
          <p className={title}>{serviceBlock?.elements[1]?.value}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsSection;
