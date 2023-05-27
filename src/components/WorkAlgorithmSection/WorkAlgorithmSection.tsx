import React from 'react';
import styles from './WorkAlgorithmSection.module.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import WorkAlgorithmGallery from '../WorkAlgorithmGallery/WorkAlgorithmGallery';
import { photos1, photos2, photos3 } from '../../assets/workAlgorithmData/imgs';
import slides1, { slides2, slides3 } from '../../assets/workAlgorithmData/slides';

const WorkAlgorithmSection: React.FC = () => {
  const { workAlgorithmSection, title, subtitle, wrapper, popupImage, titleWrapper, gallery } =
    styles;
  return (
    <section id={workAlgorithmSection}>
      <div data-aos="zoom-in" data-aos-duration="1000" className="container">
        <div className={titleWrapper}>
          <p className={title}>АЛГОРИТМ РАБОТЫ</p>
          <p className={subtitle}>Что мы делаем и как это выглядит, показываем</p>
        </div>
        <div className={wrapper}>
          <WorkAlgorithmGallery
            title="Эскизный дизайн фасадов"
            images={photos1}
            slidesData={slides1}
            customClass={gallery}
          />
          <WorkAlgorithmGallery
            title="
Рабочий проект дизайна фасадов"
            images={photos2}
            slidesData={slides2}
            customClass={gallery}
          />
          <WorkAlgorithmGallery
            title="
            Ландшафтный дизайн проект"
            images={photos3}
            slidesData={slides3}
            customClass={gallery}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkAlgorithmSection;
