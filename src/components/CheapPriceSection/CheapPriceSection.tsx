import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./CheapPriceSection.module.css";
import { ILandingBlock, ILandingBlockElement } from "../../interfaces/landingPageResponse";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { useAuth } from "../../contexts/AuthContext"
import { Button } from "@mui/material";
interface CheapPriceSectionProps {
   titleConfig: ILandingBlockElement;
   firstSlide: {
      title: ILandingBlockElement;
      desc: ILandingBlockElement;
      subtitle: ILandingBlockElement | false;
   };
   secondSlide: {
      title: ILandingBlockElement;
      desc: ILandingBlockElement;
      subtitle: ILandingBlockElement | false;
   };
   thirdSlide: {
      title: ILandingBlockElement;
      desc: ILandingBlockElement;
      subtitle: ILandingBlockElement | false;
   };
   fourthSlide: {
      title: ILandingBlockElement;
      desc: ILandingBlockElement;
      subtitle: ILandingBlockElement | false;
   };
   fifthSlide: {
      title: ILandingBlockElement;
      desc: ILandingBlockElement;
      subtitle: ILandingBlockElement | false;
   };
   imgConfig: ILandingBlockElement;
   subtitleConfig: ILandingBlockElement;
   block : ILandingBlock
}

const CheapPriceSection: React.FC<CheapPriceSectionProps> = ({
   titleConfig,
   firstSlide,
   secondSlide,
   thirdSlide,
   fifthSlide,
   fourthSlide,
   imgConfig,
   subtitleConfig,
   block
}) => {
   const {
      cheapPriceSection,
      title,
      subtitle,
      contentContainer,
      textContainer,
      sliderTitle,
      descriptionSlider,
      slider,
      sliderContainer,
   } = styles;
   const slides = [
      firstSlide,
      secondSlide,
      thirdSlide,
      fourthSlide,
      fifthSlide,
   ];
   const {isAuthSettings} = useAuth()
   const {setIsOpen , setElSettings , setIsOpenBlockEdit , setBlockSettings} = useAdminModalEdit()
   return (
      <section id={cheapPriceSection}>
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
         <div data-aos="zoom-in" data-aos-duration="1000" className="container">
            <p
              
               className={title}
             
               onClick={() => {
                  if (isAuthSettings.isAdmin) {
                     setIsOpen(true);
                     setElSettings(titleConfig);
                  }
               }}
            >
               {titleConfig.value}
            </p>
            <p
               className={subtitle}
            
               onClick={() => {
                  if (isAuthSettings.isAdmin) {
                     setIsOpen(true);
                     setElSettings(subtitleConfig);
                  }
               }}
            >
               {subtitleConfig.value}
            </p>
            <div className={sliderContainer}>
               <Swiper
                  className={slider}
                  modules={[Navigation, EffectFade, Autoplay]}
                  spaceBetween={0}
                  loop
                  slidesPerView={1}
                  navigation={{
                     nextEl: ".image-swiper-button-next-small",
                     prevEl: ".image-swiper-button-prev-small",
                  }}
                  speed={800}
                  effect="fade"
                  fadeEffect={{
                     crossFade: true,
                  }}
                  autoplay={{
                     delay: 5500,
                  }}
               >
                  {slides.map((slider, index) => {
                     return (
                        <SwiperSlide key={index}>
                           <div className={contentContainer}>
                              <img
                                 
                                 src={imgConfig.value}
                                 onClick={() => {
                                    if (isAuthSettings.isAdmin) {
                                       setIsOpen(true);
                                       setElSettings(imgConfig);
                                    }
                                 }}
                                 alt="Не удалось отобразить картинку"
                              />
                              <div className={textContainer}>
                                 <p
                                    className={sliderTitle}
                                    
                                    onClick={() => {
                                       if (isAuthSettings.isAdmin) {
                                          setIsOpen(true);
                                          setElSettings(slider.title);
                                       }
                                    }}
                                 >
                                    {slider.title.value}
                                 </p>

                                 <span
                                    className={descriptionSlider}
                                   
                                    onClick={() => {
                                       if (isAuthSettings.isAdmin) {
                                          setIsOpen(true);
                                          setElSettings(slider.desc);
                                       }
                                    }}
                                 >
                                    {slider.desc.value}
                                 </span>
                                 <span
                                    className={descriptionSlider}
                                  
                                    onClick={() => {
                                       if (isAuthSettings.isAdmin && slider.subtitle) {
                                          setIsOpen(true);
                                          setElSettings(slider.subtitle);
                                       }
                                    }}
                                 >
                                    {slider.subtitle
                                       ? slider.subtitle.value
                                       : null}
                                 </span>
                              </div>
                           </div>
                        </SwiperSlide>
                     );
                  })}
               </Swiper>
               <button
                  type="button"
                  className="image-swiper-button-next-small"
               ></button>
               <button
                  type="button"
                  className="image-swiper-button-prev-small"
               ></button>
            </div>
         </div>
      </section>
   );
};

export default CheapPriceSection;
