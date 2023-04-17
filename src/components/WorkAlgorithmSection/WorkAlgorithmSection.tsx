import React from 'react';
import styles from './WorkAlgorithmSection.module.css';
const WorkAlgorithmSection: React.FC = () => {
  const { workAlgorithmSection, title, subtitle, wrapper, popupImage } = styles;

  return (
    <section id={workAlgorithmSection}>
      <div data-aos="zoom-in" data-aos-duration="1000" className="container">
        <p className={title}>АЛГОРИТМ РАБОТЫ</p>
        <p className={subtitle}>Что мы делаем и как это выглядит, показываем</p>
        <div className={wrapper}></div>
      </div>
    </section>
  );
};

export default WorkAlgorithmSection;
