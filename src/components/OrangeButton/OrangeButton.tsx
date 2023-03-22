import React from 'react';
import styles from './OrangeButton.module.css';

interface OrangeButtonProps {
  title: string;
}

const OrangeButton: React.FC<OrangeButtonProps> = ({ title }) => {
  const { btn } = styles;
  return <button className={btn}>{title}</button>;
};

export default OrangeButton;
