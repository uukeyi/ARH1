import React from "react";
import { useState } from "react";
import BeforeAfterSlider from "../BeforeAfterSlider/BeforeAfterSlider";
import OrangeButton from "../OrangeButton/OrangeButton";
import {
   ILandingBlock,
   ILandingBlockElement,
   landingElPrototype
} from "../../interfaces/landingPageResponse";
import styles from "./FacadeDesignWorksSection.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { Button } from "@mui/material";
interface FacadeDesignWorksSectionProps {
   title: ILandingBlockElement;
   elWithNoDesc: ILandingBlockElement[];
   elWithDesc: ILandingBlockElement[];
   extraElWithDesc: ILandingBlockElement[];
   block : ILandingBlock
}

const FacadeDesignWorksSection: React.FC<FacadeDesignWorksSectionProps> = ({
   title,
   elWithDesc,
   elWithNoDesc,
   extraElWithDesc,
   block
}) => {
   const [more, setMore] = useState<boolean>(false);
   let indexElWithNoDesc = 0;
   let indexElWithDesc = 0;
   let beforeImg: ILandingBlockElement = landingElPrototype;
   let afterImg: ILandingBlockElement = landingElPrototype;
   let subtitle: ILandingBlockElement = landingElPrototype;
   let titleText: ILandingBlockElement = landingElPrototype;
   const { isAuthSettings } = useAuth();
   const { setIsOpen, setElSettings , setIsOpenBlockEdit , setBlockSettings } = useAdminModalEdit();
   const {
      facadeSection,
      titleClass,
      wrapper,
      sliderContainer,
      sliderCard,
      sliderCardWrap,
      moreButton,
   } = styles;
   return (
      <section id={facadeSection}>
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
         <div className="container">
            <h1
               data-aos="fade-right"
               data-aos-duration="1500"
               className={titleClass}
               data-el = {title}
               onClick={() => {
                  if (isAuthSettings.isAdmin) {
                     setIsOpen(true);
                     setElSettings(title);
                  }
               }}
            >
               {title.value}
            </h1>
            <div className={wrapper}>
               <div className={sliderContainer}>
                  {elWithNoDesc.map((el, index) => {
                     indexElWithNoDesc++;
                     if (indexElWithNoDesc === 2) {
                        indexElWithNoDesc = 0;
                        return (
                           <BeforeAfterSlider
                              customClassName={sliderCardWrap}
                              aosAnimation={
                                 elWithNoDesc[index - 1].aosAnimation
                              }
                              beforeImgEl={elWithNoDesc[index - 1]}
                              afterImageEl={el}
                           />
                        );
                     } else {
                        return null;
                     }
                  })}
               </div>
               {elWithDesc.map((el) => {
                  indexElWithDesc = indexElWithDesc + 1;
                  switch (indexElWithDesc) {
                     case 4:
                        indexElWithDesc = 0;
                        titleText = el;
                        return (
                           <BeforeAfterSlider
                              customClassName={sliderCard}
                              aosAnimation="zoom-in"
                              beforeImgEl={beforeImg}
                              afterImageEl={afterImg}
                              isText={true}
                              subtitle={subtitle}
                              title={titleText}
                           />
                        );
                     case 3:
                        subtitle = el;
                        break;
                     case 2:
                        afterImg = el;
                        break;
                     case 1:
                        beforeImg = el;
                        break;
                  }
               })}
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
                        ? { height: "100%", opacity: 1, transition: "1" }
                        : { height: 0, opacity: 0, transition: "1s" }
                  }
               >
                  {extraElWithDesc.map((el) => {
                     indexElWithDesc = indexElWithDesc + 1;
                     switch (indexElWithDesc) {
                        case 4:
                           indexElWithDesc = 0;
                           titleText = el;
                           return (
                              <BeforeAfterSlider
                                 customClassName={sliderCard}
                                 aosAnimation={titleText.aosAnimation}
                                 beforeImgEl={beforeImg}
                                 afterImageEl={afterImg}
                                 isText={true}
                                 subtitle={subtitle}
                                 title={titleText}
                              />
                           );
                        case 3:
                           subtitle = el;
                           break;
                        case 2:
                           afterImg = el;
                           break;
                        case 1:
                           beforeImg = el;
                           break;
                     }
                  })}
               </div>

               <OrangeButton title={"ОСТАВИТЬ ЗАЯВКУ"} width="250px" />
            </div>
         </div>
      </section>
   );
};

export default FacadeDesignWorksSection;
