import React, { useState } from "react";
import styles from "./FacadeDesign.module.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";
import {
   ILandingBlock,
   ILandingBlockElement,
} from "../../interfaces/landingPageResponse";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { Button } from "@mui/material";
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
   block: ILandingBlock;
}

const FacadeDesign: React.FC<FacadeDesignProps> = ({
   titleText,
   card1,
   card2,
   card3,
   card4,
   card5,
   block,
}) => {
   const {
      facadeDesign,
      title,
      wrapper,
      cardClass,
      cardTitle,
      cardDesc,
      activeImg,
      bgImg,
      subDesc,
      slider,
      cardTel,
      cardTelTitle,
      cardTelDesc,
      gif
   } = styles;
   const { isAuthSettings } = useAuth();
   const { setIsOpen, setElSettings, setBlockSettings, setIsOpenBlockEdit } =
      useAdminModalEdit();
   const [background, setBackground] = useState(card1.img.value);
   const data = [card2, card3, card4, card5];
   return (
      <section id={facadeDesign}>
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
         <p
            onClick={() => {
               if (isAuthSettings.isAdmin) {
                  setIsOpen(true);
                  setElSettings(card1.title);
               }
            }}
            className={subDesc}
         >
            {card1.title.value}
            <p
               onClick={() => {
                  if (isAuthSettings.isAdmin) {
                     setIsOpen(true);
                     setElSettings(card1.description);
                  }
               }}
            >
               {card1.description.value}
            </p>
         </p>
         {isAuthSettings.isAdmin ? (
            <Button
               onClick={() => {
                  if (isAuthSettings.isAdmin) {
                     setIsOpen(true);
                     setElSettings(card1.img);
                  }
               }}
               variant="outlined"
               sx={{ display: "block", margin: "10px auto" }}
            >
               Изменить главную картинку
            </Button>
         ) : null}
         <div
            onClick={(e: any) => {
               if (isAuthSettings.isAdmin) {
                  setIsOpen(true);
                  setElSettings(JSON.parse(e.target.dataset.el));
               }
            }}
            className={wrapper}
         >
            <img
               src={card1.img.value}
               alt="#"
               className={`${bgImg} ${
                  background === card1.img.value ? activeImg : null
               }`}
            />
            <img
               src={card2.img.value}
               alt="#"
               className={`${bgImg} ${
                  background === card2.img.value ? activeImg : null
               }`}
            />
            <img
               src={card3.img.value}
               alt="#"
               className={`${bgImg} ${
                  background === card3.img.value ? activeImg : null
               }`}
            />
            <img
               src={card4.img.value}
               alt="#"
               className={`${bgImg} ${
                  background === card4.img.value ? activeImg : null
               }`}
            />
            <img
               src={card5.img.value}
               alt="#"
               className={`${bgImg} ${
                  background === card5.img.value ? activeImg : null
               }`}
            />
            {data.map((card, index) => {
               return (
                  <div
                     data-img={card.img.value}
                     onMouseEnter={(e: any) => {
                        setBackground(e.currentTarget.dataset.img);
                     }}
                     data-el={JSON.stringify(card.img)}
                     onMouseLeave={() => {
                        setBackground(card1.img.value);
                     }}
                     key={index}
                     className={cardClass}
                  >
                     <p
                        data-el={JSON.stringify(card.title)}
                        className={cardTitle}
                     >
                        {card.title.value}
                     </p>
                     <p
                        data-el={JSON.stringify(card.description)}
                        className={cardDesc}
                     >
                        {card.description.value}
                     </p>
                     
                  </div>
               );
            })}
         </div>
         <Swiper
            className={slider}
            modules={[Pagination]}
            spaceBetween={0}
            loop
            slidesPerView={1}
            // navigation={{
            //    nextEl: ".image-swiper-button-next-facade",
            //    prevEl: ".image-swiper-button-prev-facade",
            // }}
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
            {data.map((el, index) => {
               return (
                  <SwiperSlide key={index}>
                     <div className={cardTel}>
                        <img src={el.img.value} alt="#" />
                        <p className={cardTelTitle} >{el.title.value}</p>
                        <p className={cardTelDesc} >{el.description.value}</p>
                        <div>

                        </div>
                     </div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
         {/* <button
                  type="button"
                  className="image-swiper-button-next-small"
               ></button>
               <button
                  type="button"
                  className="image-swiper-button-prev-small"
               ></button> */}
         {/* <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className={`swiper-pagination ${swiperPagination}`}
         ></div> */}
      </section>
   );
};

export default FacadeDesign;
