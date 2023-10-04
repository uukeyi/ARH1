import React, { useState } from "react";
import styles from "./SwiperSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { ILandingBlock, ILandingBlockElement } from "../../interfaces/landingPageResponse";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { Button } from "@mui/material";
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
   block : ILandingBlock
}

const SwiperSection: React.FC<SwiperSectionProps> = ({
   changeConception,
   details,
   backlight,
   attached,
   designGroup,
   redevelopment,
   titleText,
   block
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
   const { setIsOpen, setElSettings  ,setIsOpenBlockEdit , setBlockSettings } = useAdminModalEdit();
   return (
      <section id={swiperSection}>
          {isAuthSettings.isAdmin ? (
            <Button
               onClick={() => {
                  if (isAuthSettings.isAdmin) {
                     setIsOpenBlockEdit(true);
                     setBlockSettings(block);
                  }
               }}
               variant="outlined"
            >
               Изменить блок
            </Button>
         ) : null}
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
