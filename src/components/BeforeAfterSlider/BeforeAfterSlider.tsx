import React, { useState } from "react";
import styles from "./BeforeAfterSlider.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { ILandingBlockElement } from "../../interfaces/landingPageResponse";

interface BeforeAfterSliderI {
   beforeImg: ILandingBlockElement;
   afterImg: ILandingBlockElement;
   customClassName?: string;
   isText?: boolean;
   title?: ILandingBlockElement;
   subtitle?: ILandingBlockElement;
   aosAnimation?: string;
}
const BeforeAfterSlider: React.FC<BeforeAfterSliderI> = ({
   beforeImg,
   afterImg,
   customClassName,
   isText,
   title,
   subtitle,
   aosAnimation,
}) => {
   const {
      slider,
      sliderLine,
      sliderContainer,
      imageContainer,
      beforeImage,
      afterImage,
      sliderButton,
      sliderSubtitle,
      sliderImage,
      sliderTitle,
      textSliderContainer,
      textContainer,
   } = styles;
   const [perc, setPerc] = useState<string>("50");
   const { isAuthSettings } = useAuth();
   const { setIsOpen, setElSettings } = useAdminModalEdit();
   return isText ? (
      <div className={textSliderContainer}>
         <div
            className={`${sliderContainer} ${customClassName}`}
            data-aos={aosAnimation}
            data-aos-duration="1500"
         >
            <div className={imageContainer}>
               <img
                  src={beforeImg.value}
                  alt="img"
                  className={`${beforeImage} ${sliderImage}`}
                  style={{ width: `${perc}%` }}
                  onClick={() => {
                     if (isAuthSettings.isAdmin) {
                        setIsOpen(true);
                        setElSettings(beforeImage);
                     }
                  }}
               />
               <img
                  src={afterImg.value}
                  alt="img"
                  className={`${afterImage} ${sliderImage}`}
                  onClick={() => {
                     if (isAuthSettings.isAdmin) {
                        setIsOpen(true);
                        setElSettings(afterImage);
                     }
                  }}
               />
            </div>
            {isAuthSettings.isAdmin ? null : (
               <>
                  <input
                     type="range"
                     min="0"
                     max="100"
                     value="50"
                     className={slider}
                     aria-label="Percentage of before photo shown"
                     onChange={(e) => {
                        setPerc(e.target.value);
                     }}
                  />
                  <div
                     className={sliderLine}
                     style={{ left: `${perc}%` }}
                  ></div>
                  <div
                     className={sliderButton}
                     style={{ left: `${perc}%` }}
                     aria-hidden="true"
                  >
                     <span></span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#fff"
                        viewBox="0 0 256 256"
                     >
                        <path d="M86.75,44.3,33.48,128l53.27,83.7a8,8,0,0,1-2.46,11.05A7.91,7.91,0,0,1,80,224a8,8,0,0,1-6.76-3.71l-56-88a8,8,0,0,1,0-8.59l56-88a8,8,0,1,1,13.5,8.59Zm152,79.41-56-88a8,8,0,1,0-13.5,8.59L222.52,128l-53.27,83.7a8,8,0,0,0,2.46,11.05A7.91,7.91,0,0,0,176,224a8,8,0,0,0,6.76-3.71l56-88A8,8,0,0,0,238.75,123.71Z"></path>
                     </svg>
                  </div>
               </>
            )}
         </div>
         <div className={textContainer}>
            <p
               onClick={() => {
                  if (isAuthSettings.isAdmin) {
                     setIsOpen(true);
                     setElSettings(subtitle);
                  }
               }}
               className={sliderSubtitle}
            >
               {subtitle?.value}
            </p>
            <p
               onClick={() => {
                  if (isAuthSettings.isAdmin) {
                     setIsOpen(true);
                     setElSettings(title);
                  }
               }}
               className={sliderTitle}
            >
               {title?.value}
            </p>
         </div>
      </div>
   ) : (
      <div
         data-aos={aosAnimation}
         data-aos-duration="1500"
         className={`${sliderContainer} ${customClassName}`}
      >
         <div className={imageContainer}>
            <img
               src={beforeImg.value}
               alt="img"
               className={`${beforeImage} ${sliderImage}`}
               style={{ width: `${perc}%` }}
               onClick={(e) => {
                  e.stopPropagation();
                  console.log("asdasd");
                  if (isAuthSettings.isAdmin) {
                     setIsOpen(true);
                     setElSettings(beforeImg);
                  }
               }}
            />
            <img
               src={afterImg.value}
               alt="img"
               onClick={(e) => {
                  e.stopPropagation();

                  if (isAuthSettings.isAdmin) {
                     setIsOpen(true);
                     setElSettings(afterImg);
                  }
               }}
               className={`${afterImage} ${sliderImage}`}
            />
         </div>
         {isAuthSettings.isAdmin ? null : (
            <>
               <input
                  type="range"
                  min="0"
                  max="100"
                  value="50"
                  className={slider}
                  aria-label="Percentage of before photo shown"
                  onChange={(e) => {
                     setPerc(e.target.value);
                  }}
               />
               <div className={sliderLine} style={{ left: `${perc}%` }}></div>
               <div
                  className={sliderButton}
                  style={{ left: `${perc}%` }}
                  aria-hidden="true"
               >
                  <span></span>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="32"
                     height="32"
                     fill="#fff"
                     viewBox="0 0 256 256"
                  >
                     <path d="M86.75,44.3,33.48,128l53.27,83.7a8,8,0,0,1-2.46,11.05A7.91,7.91,0,0,1,80,224a8,8,0,0,1-6.76-3.71l-56-88a8,8,0,0,1,0-8.59l56-88a8,8,0,1,1,13.5,8.59Zm152,79.41-56-88a8,8,0,1,0-13.5,8.59L222.52,128l-53.27,83.7a8,8,0,0,0,2.46,11.05A7.91,7.91,0,0,0,176,224a8,8,0,0,0,6.76-3.71l56-88A8,8,0,0,0,238.75,123.71Z"></path>
                  </svg>
               </div>
            </>
         )}
      </div>
   );
};

export default BeforeAfterSlider;

// import React from 'react';

// interface BeforeAfterSliderProps {

// }

// const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = () => (
//   <div>

//   </div>
// );

// export default BeforeAfterSlider;
