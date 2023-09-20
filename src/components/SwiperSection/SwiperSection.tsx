import React, { useState } from "react";
import styles from "./SwiperSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { ILandingBlockElement } from "../../interfaces/landingPageResponse";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";

type cardType = {
   title: ILandingBlockElement;
   subtitle: ILandingBlockElement | false;
   img: ILandingBlockElement;
   description: ILandingBlockElement;
};

interface SwiperSectionProps {
   titleText: ILandingBlockElement;
   changeConception: cardType;
   designGroup: cardType;
   details: cardType;
   backlight: cardType;
   attached: cardType;
   redevelopment: cardType;
}

const SwiperSection: React.FC<SwiperSectionProps> = ({
   changeConception,
   details,
   backlight,
   attached,
   designGroup,
   redevelopment,
   titleText,
}) => {
   const {
      swiperSection,
      title,
      mainBtn,
      contentContainer,
      textContainer,
      titleContainer,
      contentTitle,
      contentSubtitle,
      contentText,
      contentImg,
      mainBtnActive,
      swiperSlider,
      hiddenContainer,
      sliderWrapper,
   } = styles;
   // const [data, setData] = useState<slideType[]>([
   //    {
   //       id: 1,
   //       title: "МЕНЯЕМ КОНЦЕПЦИЮ",
   //       description:
   //          "При необходимости меняем концепцию дома без капитальных затрат, в том числе конструкцию кровли на более практичную и эстетичную, увеличиваем проёмы, подбираем цвет и материал кровли, водосточной системы и карнизной подшивки. Увязываем планировку участка с входными группами и заездом в гараж.",
   //       subtitle: "КРОВЛЮ, ПРОЕМЫ, ФАСАДЫ",
   //       img: "https://i.ibb.co/Vq4y1ST/change-Concept.webp",
   //    },
   //    {
   //       id: 2,
   //       title: "ДЕЛАЕМ ДИЗАЙН ВХОДНОЙ ГРУППЫ",
   //       description:
   //          "Продумываем и разрабатываем дизайн входной группы дома, с учётом общей архитектуры фасадов.",
   //       img: "https://i.ibb.co/9N5bgK9/design-Doors.webp",
   //    },
   //    {
   //       id: 3,
   //       title: "ПРОРАБАТЫВАЕМ ДЕТАЛИ",
   //       description:
   //          "Моделируем внешний вид дома в деталях, продумываем архитектурные элементы, учитываем конструктивные особенности. Реальный материал для 3D визуализации. Составляем подробную спецификацию отделочного материала с артикулами и ценами.",
   //       img: "https://i.ibb.co/whJhjPt/working-On-Details.webp",
   //    },
   //    {
   //       id: 4,
   //       title: "НОЧНАЯ ПОДСВЕТКА ФАСАДА",
   //       description:
   //          "Разрабатываем проект подсветки фасадов функциональной, декоративной и праздничной. Подбираем осветительные приборы.",
   //       img: "https://i.ibb.co/4Sff5hp/night-Lighting.webp",
   //    },
   //    {
   //       id: 5,
   //       title: "ПРИСТРАИВАЕМ ПОМЕЩЕНИЯ",
   //       description:
   //          "Пристраиваем тамбуры, проектируем террасы, продумываем ограждение и планировку пространства, а также новые и модернизацию существующих коммуникаций.",
   //       subtitle: "ТЕРРАСУ, БАЛКОНЫ, ЭТАЖ",
   //       img: "https://i.ibb.co/cC4k3xR/attach-Room.webp",
   //    },
   //    {
   //       id: 6,
   //       title: "ДЕЛАЕМ ПЕРЕПЛАНИРОВКУ",
   //       description:
   //          "Продумываем внутреннюю планировку дома, увязываем со сторонами света и внешними элементами: террасой, гаражом, навесом.",
   //       img: "https://i.ibb.co/jLXyYZ8/doLayout.webp",
   //    },
   // ]);
   const data = [
      {
         id: 1,
         value: changeConception,
      },
      {
         id: 2,
         value: designGroup,
      },
      {
         id: 3,
         value: details,
      },
      {
         id: 4,
         value: backlight,
      },
      {
         id: 5,
         value: attached,
      },
      {
         id: 6,
         value: redevelopment,
      },
   ];
   const [index, setIndex] = useState(1);
   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const target = e.target as HTMLElement;
      target.classList.add(mainBtnActive);
      let dataIndex: string | number | null = target.getAttribute("data-id");
      if (dataIndex !== null) {
         setIndex(+dataIndex);
      }
   };
   const { isAuthSettings } = useAuth();
   const { setIsOpen, setElSettings } = useAdminModalEdit();
   return (
      <section id={swiperSection}>
         <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className={`container ${hiddenContainer}`}
         >
            <p
               className={title}
               onClick={() => {
                  if (isAuthSettings.isAdmin) {
                     setIsOpen(true);
                     setElSettings(titleText);
                  }
               }}
            >
               {titleText.value}
            </p>

            <Swiper
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
               modules={[Autoplay]}
            >
               <SwiperSlide className={sliderWrapper}>
                  <button
                     data-id="1"
                     onClick={(e) => {
                        handleClick(e);
                     }}
                     className={`${mainBtn} ${
                        index === 1 ? mainBtnActive : null
                     }`}
                  >
                     {changeConception.title.value}
                  </button>
               </SwiperSlide>
               <SwiperSlide className={sliderWrapper}>
                  <button
                     data-id="2"
                     onClick={(e) => handleClick(e)}
                     className={`${mainBtn} ${
                        index === 2 ? mainBtnActive : null
                     }`}
                  >
                     {designGroup.title.value}
                  </button>
               </SwiperSlide>
               <SwiperSlide className={sliderWrapper}>
                  <button
                     data-id="3"
                     onClick={(e) => handleClick(e)}
                     className={`${mainBtn} ${
                        index === 3 ? mainBtnActive : null
                     }`}
                  >
                     {details.title.value}
                  </button>
               </SwiperSlide>
               <SwiperSlide className={sliderWrapper}>
                  <button
                     data-id="4"
                     onClick={(e) => handleClick(e)}
                     className={`${mainBtn} ${
                        index === 4 ? mainBtnActive : null
                     }`}
                  >
                     {backlight.title.value}
                  </button>
               </SwiperSlide>
               <SwiperSlide className={sliderWrapper}>
                  <button
                     data-id="5"
                     onClick={(e) => handleClick(e)}
                     className={`${mainBtn} ${
                        index === 5 ? mainBtnActive : null
                     }`}
                  >
                     {attached.title.value}
                  </button>
               </SwiperSlide>
               <SwiperSlide className={sliderWrapper}>
                  <button
                     data-id="6"
                     onClick={(e) => handleClick(e)}
                     className={`${mainBtn} ${
                        index === 6 ? mainBtnActive : null
                     }`}
                  >
                     {redevelopment.title.value}
                  </button>
               </SwiperSlide>
            </Swiper>

            {data
               .filter((slide) => {
                  return slide.id === index;
               })
               .map((slide) => {
                  return (
                     <div key={slide.id} className={contentContainer}>
                        <img
                           className={contentImg}
                           src={slide.value.img.value}
                           alt="Не удалось загрузить картинку"
                           onClick={() => {
                              if (isAuthSettings.isAdmin) {
                                 setIsOpen(true);
                                 setElSettings(slide.value.img);
                              }
                           }}
                        />
                        <div className={textContainer}>
                           <div className={titleContainer}>
                              <p
                                 className={contentTitle}
                                 onClick={() => {
                                    if (isAuthSettings.isAdmin) {
                                       setIsOpen(true);
                                       setElSettings(slide.value.title);
                                    }
                                 }}
                              >
                                 {slide.value.title.value}
                              </p>
                              <p
                                 className={contentSubtitle}
                                 onClick={() => {
                                    if (
                                       isAuthSettings.isAdmin &&
                                       slide.value.subtitle
                                    ) {
                                       setIsOpen(true);
                                       setElSettings(slide.value.subtitle);
                                    }
                                 }}
                              >
                                 {slide.value.subtitle
                                    ? slide.value.subtitle.value
                                    : null}
                              </p>
                           </div>
                           <p
                              className={contentText}
                              onClick={() => {
                                 if (isAuthSettings.isAdmin) {
                                    setIsOpen(true);
                                    setElSettings(slide.value.description);
                                 }
                              }}
                           >
                              {slide.value.description.value}
                           </p>
                        </div>
                     </div>
                  );
               })}
         </div>
      </section>
   );
};

export default SwiperSection;
