import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";
import styles from "./ReviewsSection.module.css";
import { ILandingBlock, ILandingBlockElement } from "../../interfaces/landingPageResponse";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { Button } from "@mui/material";
interface ReviewsSectionProps {
   mainTitle: ILandingBlockElement;
   subtitle: ILandingBlockElement;
   subtitleDesc: ILandingBlockElement;
   slide1: {
      name: ILandingBlockElement;
      personDescription: ILandingBlockElement;
      description: ILandingBlockElement;
      img: ILandingBlockElement;
   };
   slide2: {
      name: ILandingBlockElement;
      personDescription: ILandingBlockElement;
      description: ILandingBlockElement;
      img: ILandingBlockElement;
   };
   slide3: {
      name: ILandingBlockElement;
      personDescription: ILandingBlockElement;
      description: ILandingBlockElement;
      img: ILandingBlockElement;
   };
   block : ILandingBlock
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({
   mainTitle,
   subtitle,
   subtitleDesc,
   slide1,
   slide2,
   slide3,
   block
}) => {
   const {
      reviewsSection,
      title,
      description,
      slider,
      cardDescription,
      sliderContainer,
      cardLine,
      cardInfoContainer,
      personContainer,
      personName,
      personDescription,
      swiperPagination,
   } = styles;

   const {isAuthSettings}  = useAuth()
   const { setIsOpen, setElSettings , setIsOpenBlockEdit , setBlockSettings } = useAdminModalEdit()
   const data = [slide1, slide2, slide3];
   return (
      <section id={reviewsSection}>
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
               Изменить порядок блока
            </Button>
         ) : null}
         <div className="container">
            <p
         
               data-aos="fade-right"
               data-aos-duration="1500"
               className={title}
               onClick={() => {
                if (isAuthSettings.isAdmin) {
                   setIsOpen(true);
                   setElSettings(mainTitle);
                }
             }}
            >
               {mainTitle.value}
            </p>
            <p
               data-aos="fade-right"
               data-aos-duration="1500"
               className={description}
            >
               <span
   
                  onClick={() => {
                    if (isAuthSettings.isAdmin) {
                       setIsOpen(true);
                       setElSettings(subtitle);
                    }
                 }}
               >
                  {subtitle.value}
               </span>
               <span
   
                  onClick={() => {
                    if (isAuthSettings.isAdmin) {
                       setIsOpen(true);
                       setElSettings(subtitleDesc);
                    }
                 }}
               >
                  {subtitleDesc.value}
               </span>
            </p>
            <div
               data-aos="fade-left"
               data-aos-duration="1500"
               className={sliderContainer}
            >
               <Swiper
                  className={slider}
                  modules={[Navigation, EffectFade, Autoplay, Pagination]}
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
                  pagination={{
                     el: ".swiper-pagination",
                     clickable: true,
                  }}
               >
                  {data.map((review, index) => {
                     return (
                        <SwiperSlide key={index}>
                           <q
                              className={cardDescription}
                            
                              onClick={() => {
                                if (isAuthSettings.isAdmin) {
                                   setIsOpen(true);
                                   setElSettings(review.description);
                                }
                             }}
                           >
                              {review.description.value}
                           </q>
                           <hr className={cardLine} />
                           <div className={cardInfoContainer}>
                              <img
                                
                                 src={review.img.value}
                                 onClick={() => {
                                  if (isAuthSettings.isAdmin) {
                                     setIsOpen(true);
                                     setElSettings(review.img);
                                  }
                               }}
                                 alt="Не удалось отобразить картинку"
                              />
                              <div className={personContainer}>
                                 <p
                                    className={personName}
                                    
                                    onClick={() => {
                                      if (isAuthSettings.isAdmin) {
                                         setIsOpen(true);
                                         setElSettings(review.name);
                                      }
                                   }}
                                 >
                                    {review.name.value}
                                 </p>
                                 <p
                                    className={personDescription}
                                   
                                    onClick={() => {
                                      if (isAuthSettings.isAdmin) {
                                         setIsOpen(true);
                                         setElSettings(review.personDescription);
                                      }
                                   }}
                                 >
                                    {review.personDescription.value}
                                 </p>
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
            <div
               data-aos="fade-left"
               data-aos-duration="1500"
               className={`swiper-pagination ${swiperPagination}`}
            ></div>
         </div>
      </section>
   );
};
export default ReviewsSection;
