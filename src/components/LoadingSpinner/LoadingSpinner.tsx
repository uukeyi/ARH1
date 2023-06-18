import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner: React.FC = () => {
  const { loadingSpinner } = styles;
  return (
    <div>
      <div className={loadingSpinner}></div>
    </div>
  );
};

export default LoadingSpinner;
