import React, { useState } from 'react';
import BeforeAfterSlider from '../BeforeAfterSlider/BeforeAfterSlider';
import OrangeButton from '../OrangeButton/OrangeButton';
import styles from './FacadeDesignWorksSection.module.css';

const FacadeDesignWorksSection: React.FC = () => {
  const [more, setMore] = useState<boolean>(false);
  const { facadeSection, title, wrapper, sliderContainer, sliderCard, sliderCardWrap, moreButton } =
    styles;
  return (
    <section id={facadeSection}>
      <div className="container">
        <h1 data-aos="fade-right" data-aos-duration="1500" className={title}>
          ДИЗАЙН ФАСАДОВ - НАШИ РАБОТЫ
        </h1>
        <div className={wrapper}>
          <div className={sliderContainer}>
            <BeforeAfterSlider
              customClassName={sliderCardWrap}
              beforeImg="https://arh.yamaster.ml/images/fasadi/image9-1.jpg"
              afterImg="https://arh.yamaster.ml/images/fasadi/image9-2.jpg"
            />
            <BeforeAfterSlider
              customClassName={sliderCardWrap}
              beforeImg="https://arh.yamaster.ml/images/fasadi/image56-1.jpg"
              afterImg="https://arh.yamaster.ml/images/fasadi/image56-2.jpg"
            />
            <BeforeAfterSlider
              customClassName={sliderCardWrap}
              beforeImg="https://arh.yamaster.ml/images/fasadi/image77-1.jpg"
              afterImg="https://arh.yamaster.ml/images/fasadi/image77-2.jpg"
            />
            <BeforeAfterSlider
              customClassName={sliderCardWrap}
              beforeImg="https://arh.yamaster.ml/images/fasadi/image9911-1.jpg"
              afterImg="https://arh.yamaster.ml/images/fasadi/image9911-2.jpg"
            />
            <BeforeAfterSlider
              customClassName={sliderCardWrap}
              beforeImg="https://arh.yamaster.ml/images/fasadi/image9912-1.jpg"
              afterImg="https://arh.yamaster.ml/images/fasadi/image9912-2.jpg"
            />
            <BeforeAfterSlider
              customClassName={sliderCardWrap}
              beforeImg="https://arh.yamaster.ml/images/fasadi/image9917-1.jpg"
              afterImg="https://arh.yamaster.ml/images/fasadi/image9917-2.jpg"
            />
          </div>

          <BeforeAfterSlider
            customClassName={sliderCard}
            beforeImg="https://arh.yamaster.ml/images/fasadi/1/img_20191115.webp"
            afterImg="https://arh.yamaster.ml/images/fasadi/1/img_20191115.webp"
            isText={true}
            subtitle="Проект дизайна фасадов и полная перепланировка дома, 
            Украина, Полтава 2020"
            title="Особняка стиль Прерий"
          />
          <BeforeAfterSlider
            customClassName={sliderCard}
            beforeImg="https://arh.yamaster.ml/images/fasadi/1/22-01.webp"
            afterImg="https://arh.yamaster.ml/images/fasadi/1/22-01.webp"
            isText={true}
            subtitle="Дизайн фасадов, перепланировка и строительство
            дома с плоской кровлей, СПб. 2017"
            title="Дом в стиле Hi-Tech"
          />
          <BeforeAfterSlider
            customClassName={sliderCard}
            beforeImg="https://arh.yamaster.ml/images/fasadi/image9911-1.jpg"
            afterImg="https://arh.yamaster.ml/images/fasadi/image9911-2.jpg"
            isText={true}
            subtitle="Рабочий проект дизайна фасадов дома в стиле Френка Ллойда Райта СПб, Охта Парк 2018"
            title="Стиль Райта"
          />
          <BeforeAfterSlider
            customClassName={sliderCard}
            beforeImg="https://arh.yamaster.ml/images/fasadi/image9912-1.jpg"
            afterImg="https://arh.yamaster.ml/images/fasadi/image9912-2.jpg"
            isText={true}
            subtitle="Рабочий проект дизайна фасадов дома, строительство, авторский надзор
            СПб, п. Песочный 2018"
            title="Фасад из камня"
          />
          <BeforeAfterSlider
            customClassName={sliderCard}
            beforeImg="https://arh.yamaster.ml/images/fasadi/1/11.webp"
            afterImg="https://arh.yamaster.ml/images/fasadi/1/11-1.webp"
            isText={true}
            subtitle="Рабочий проект дизайна фасадов для загородного дома в п.Тярлево.
            Составили подробную спецификацию архитектурных элементов
            для отделки фасадов. СПб, Тярлево 2017"
            title="Классический фасад"
          />
          <button
            onClick={() => {
              setMore(!more);
            }}
            className={moreButton}
          >
            ЕЩЕ ПРОЕКТЫ
          </button>

          <div
            style={
              more
                ? { height: '100%', opacity: 1, transition: '1' }
                : { height: 0, opacity: 0, transition: '1s' }
            }
          >
            <BeforeAfterSlider
              customClassName={sliderCard}
              beforeImg="https://arh.yamaster.ml/images/fasadi/1/11.webp"
              afterImg="https://arh.yamaster.ml/images/fasadi/1/11-1.webp"
              isText={true}
              subtitle="Рабочий проект дизайна фасадов для загородного дома в п.Тярлево.
            Составили подробную спецификацию архитектурных элементов
            для отделки фасадов. СПб, Тярлево 2017"
              title="Классический фасад"
            />
            <BeforeAfterSlider
              customClassName={sliderCard}
              beforeImg="https://arh.yamaster.ml/images/fasadi/image9912-1.jpg"
              afterImg="https://arh.yamaster.ml/images/fasadi/image9912-2.jpg"
              isText={true}
              subtitle="Рабочий проект дизайна фасадов дома, строительство, авторский надзор
            СПб, п. Песочный 2018"
              title="Фасад из камня"
            />
          </div>

          <OrangeButton title={'ОСТАВИТЬ ЗАЯВКУ'} width="250px" />
        </div>
      </div>
    </section>
  );
};

export default FacadeDesignWorksSection;
