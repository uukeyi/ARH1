import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner: React.FC = () => {
  const { loadingSpinner , cover } = styles;
  return (
    <div className={cover}>
      <div className={loadingSpinner}></div>
    </div>
  );
};

export default LoadingSpinner;
