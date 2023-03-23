import React from 'react';
import styles from './OrangeButton.module.css';

interface OrangeButtonProps {
  title: string;
  width: string;
}

const OrangeButton: React.FC<OrangeButtonProps> = ({ title, width }) => {
  const { btn } = styles;
  return (
    <button className={btn} style={{ width: width }}>
      {title}
    </button>
  );
};

export default OrangeButton;
