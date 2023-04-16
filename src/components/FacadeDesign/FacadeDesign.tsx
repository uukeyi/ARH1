import React, { useState } from 'react';
import styles from './FacadeDesign.module.css';
// import { SwiperSlide, Swiper } from 'swiper/react';

const FacadeDesign: React.FC = () => {
  const { facadeDesign, title, navContainer, wrapper, active, sliderImage, sliderNavItem } = styles;
  const [images, setImages] = useState([
    {
      id: 1,
      url: 'https://arh.yamaster.ml/images/slide/sl1.jpg',
      title: 'КОМПЛЕКСНАЯ РЕАЛИЗАЦИЯ',
      description:
        'Делаем проекты от планировок до строительства и ландшафтного дизайна. Пример реализации.',
    },
    {
      id: 2,
      url: 'https://arh.yamaster.ml/images/slide/sl2.jpg',
      title: 'ПРОЕКТ ДОМА',
      description:
        'Разработали архитектурный и рабочий проект дома. Продумали и рассчитали все коммуникации. Разработали дизайн фасадов, подобрали материал отделки.',
    },
    {
      id: 3,
      url: 'https://arh.yamaster.ml/images/slide/sl3.jpg',
      title: 'ДИЗАЙН ИНЕРЬЕРА',
      description:
        'Разработали дизайн интерьера дома и рабочую документацию. Подобрали материал для внутренней отделки и мебель. Выполнили черновую и чистовую отделку дома "под ключ".',
    },
    {
      id: 4,
      url: 'https://arh.yamaster.ml/images/slide/sl4.jpg',
      title: 'ЛАНДШАФТНЫЙ ДИЗАЙН',
      description:
        'Сделали проект ландшафтного дизайна. Разработали освещение участка, коммуникации на участке, дренаж. Подобрали растения и строительный материал. Спланировали участок по высотным отметкам.',
    },
    {
      id: 5,
      url: 'https://arh.yamaster.ml/images/slide/sl5.jpg',
      title: 'СТРОИТЕЛЬСТВО',
      description:
        'Строительство дома от фундамента до крыши. Завели все коммуникации в дом при монтаже фундаментной плиты. В настоящий момент ведём работы по благоустройству участка.',
    },
  ]);
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handleNavHover = (index: number) => {
    setActiveIndex(index);
    console.log(activeIndex);
  };

  return (
    <section id={facadeDesign}>
      <p data-aos = "zoom-in" data-aos-duration = "1500" className={title}>ДИЗАЙН ФАСАДОВ</p>
      <div className={wrapper}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`${sliderImage} ${index === activeIndex ? active : ''}`}
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <p>{image.description}</p>
          </div>
        ))}
        {/* <Swiper
          allowTouchMove
          className={swiperSlider}
          spaceBetween={0}
          slidesPerView={6}
          breakpoints={{
            992: {
              slidesPerView: 5,
            },
            720: {
              slidesPerView: 3,
            },

            320: {
              slidesPerView: 2,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide className={sliderWrapper}>
            <button
              data-id="1"
              onClick={(e) => {
                handleClick(e);
              }}
              className={`${mainBtn} ${index === 1 ? mainBtnActive : null}`}
            >
              Меняем концепцию
            </button>
          </SwiperSlide>
          <SwiperSlide className={sliderWrapper}>
            <button
              data-id="2"
              onClick={(e) => handleClick(e)}
              className={`${mainBtn} ${index === 2 ? mainBtnActive : null}`}
            >
              Дизайн входной группы
            </button>
          </SwiperSlide>
          <SwiperSlide className={sliderWrapper}>
            <button
              data-id="3"
              onClick={(e) => handleClick(e)}
              className={`${mainBtn} ${index === 3 ? mainBtnActive : null}`}
            >
              Детали
            </button>
          </SwiperSlide>
          <SwiperSlide className={sliderWrapper}>
            <button
              data-id="4"
              onClick={(e) => handleClick(e)}
              className={`${mainBtn} ${index === 4 ? mainBtnActive : null}`}
            >
              Подсветка
            </button>
          </SwiperSlide>
          <SwiperSlide className={sliderWrapper}>
            <button
              data-id="5"
              onClick={(e) => handleClick(e)}
              className={`${mainBtn} ${index === 5 ? mainBtnActive : null}`}
            >
              Пристраиваем
            </button>
          </SwiperSlide>
          <SwiperSlide className={sliderWrapper}>
            <button
              data-id="6"
              onClick={(e) => handleClick(e)}
              className={`${mainBtn} ${index === 6 ? mainBtnActive : null}`}
            >
              Планировка
            </button>
          </SwiperSlide>
        </Swiper> */}
        <div className={navContainer}>
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`${sliderNavItem}`}
              onMouseEnter={() => handleNavHover(index)}
            >
              {image.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacadeDesign;
