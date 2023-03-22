import React from 'react';
import Slider from '../BeforeAfterSlider/BeforeAfterSlider';
import BeforeAfterSlider from '../BeforeAfterSlider/BeforeAfterSlider';
import OrangeButton from '../OrangeButton/OrangeButton';
import styles from './FacadeDesignSection.module.css';

const FacadeDesignSection: React.FC = () => {
  const { facadeSection, title } = styles;
  return (
    <section id={facadeSection}>
      <div className="container">
        <h1 data-aos="fade-right" data-aos-duration="1500" className={title}>
          ДИЗАЙН ФАСАДОВ - НАШИ РАБОТЫ
        </h1>
        <Slider />
        <OrangeButton title={'ОСТАВИТЬ ЗАЯВКУ'} />
      </div>
    </section>
  );
};

export default FacadeDesignSection;
