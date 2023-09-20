import React, { useState } from "react";
import styles from "./FacadeDesign.module.css";
import { ILandingBlockElement } from "../../interfaces/landingPageResponse";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
// import { SwiperSlide, Swiper } from 'swiper/react';

interface FacadeDesignProps {
   titleText: ILandingBlockElement;
   card1: {
      img: ILandingBlockElement;
      title: ILandingBlockElement;
      description: ILandingBlockElement;
   };
   card2: {
      img: ILandingBlockElement;
      title: ILandingBlockElement;
      description: ILandingBlockElement;
   };
   card3: {
      img: ILandingBlockElement;
      title: ILandingBlockElement;
      description: ILandingBlockElement;
   };
   card4: {
      img: ILandingBlockElement;
      title: ILandingBlockElement;
      description: ILandingBlockElement;
   };
   card5: {
      img: ILandingBlockElement;
      title: ILandingBlockElement;
      description: ILandingBlockElement;
   };
}

const FacadeDesign: React.FC<FacadeDesignProps> = ({
   titleText,
   card1,
   card2,
   card3,
   card4,
   card5,
}) => {
   const {
      facadeDesign,
      title,
      navContainer,
      wrapper,
      active,
      sliderImage,
      sliderNavItem,
   } = styles;
   const [activeIndex, setActiveIndex] = useState<number>(1);
   const { isAuthSettings } = useAuth();
   const { setIsOpen, setElSettings } = useAdminModalEdit();
   const handleNavHover = (index: number) => {
      setActiveIndex(index);
   };
   const data = [card1, card2, card3, card4, card5];
   return (
      <section id={facadeDesign}>
         <p
            onClick={() => {
               if (isAuthSettings.isAdmin) {
                  setIsOpen(true);
                  setElSettings(titleText);
               }
            }}
            data-aos="zoom-in"
            data-aos-duration="1500"
            className={title}
         >
            {titleText.value}
         </p>
         <div className={wrapper}>
            {data.map((card, index) => (
               <div
                  key={index}
                  className={`${sliderImage} ${
                     index === activeIndex ? active : ""
                  }`}
                  onClick={() => {
                     if (isAuthSettings.isAdmin) {
                        setIsOpen(true);
                        setElSettings(card.img);
                     }
                  }}
                  style={{ backgroundImage: `url(${card.img.value})` }}
               >
                  <p
                     onClick={(e) => {
                        e.stopPropagation();
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(card.description);
                        }
                     }}
                  >
                     {card.description.value}
                  </p>
               </div>
            ))}
            <div className={navContainer}>
               {data.map((card, index) => (
                  <div
                     key={index}
                     className={`${sliderNavItem}`}
                     onMouseEnter={() => handleNavHover(index)}
                     onClick={() => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(card.title);
                        }
                     }}
                  >
                     {card.title.value}
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default FacadeDesign;
