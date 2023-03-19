import React, { useState } from 'react';
import styles from './BeforeAfterSlider.module.css';

const BeforeAfterSlider = ({ beforeImg, afterImg }) => {
  const [sliderPosition, setSliderPosition] = useState('50%');

  const handleSliderChange = (event) => {
    setSliderPosition(event.target.value + '%');
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.beforeContainer}>
        <img src={beforeImg} alt="Before" className={styles.img} />
      </div>
      <div className={styles.afterContainer}>
        <img src={afterImg} alt="After" className={styles.img} />
      </div>
      <div className={styles.slider}>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition.slice(0, -1)}
          onChange={handleSliderChange}
          className={styles.sliderInput}
        />
        <div className={styles.sliderOverlay} style={{ left: sliderPosition }}>
          <div className={styles.sliderThumb}></div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
