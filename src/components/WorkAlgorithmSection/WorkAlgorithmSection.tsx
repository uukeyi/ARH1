import React from 'react';
import styles from './WorkAlgorithmSection.module.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import WorkAlgorithmGallery from '../WorkAlgorithmGallery/WorkAlgorithmGallery';
const WorkAlgorithmSection: React.FC = () => {
  const { workAlgorithmSection, title, subtitle, wrapper, popupImage, titleWrapper } = styles;
  return (
    <section id={workAlgorithmSection}>
      <div data-aos="zoom-in" data-aos-duration="1000" className="container">
        <div className={titleWrapper}>
          <p className={title}>АЛГОРИТМ РАБОТЫ</p>
          <p className={subtitle}>Что мы делаем и как это выглядит, показываем</p>
        </div>
        <div className={wrapper}>
          <WorkAlgorithmGallery title="Эскизный дизайн фасадов" />
        </div>
      </div>
    </section>
  );
};

export default WorkAlgorithmSection;
