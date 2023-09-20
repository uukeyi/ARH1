import React from "react";
import { useState } from "react";
import BeforeAfterSlider from "../BeforeAfterSlider/BeforeAfterSlider";
import OrangeButton from "../OrangeButton/OrangeButton";
import {
   ILandingBlockElement,
   landingBlockPrototype,
} from "../../interfaces/landingPageResponse";
import styles from "./FacadeDesignWorksSection.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";

interface FacadeDesignWorksSectionProps {
   title: ILandingBlockElement;
   elWithNoDesc: ILandingBlockElement[];
   elWithDesc: ILandingBlockElement[];
   extraElWithDesc: ILandingBlockElement[];
}

const FacadeDesignWorksSection: React.FC<FacadeDesignWorksSectionProps> = ({
   title,
   elWithDesc,
   elWithNoDesc,
   extraElWithDesc,
}) => {
   const [more, setMore] = useState<boolean>(false);
   let indexElWithNoDesc = 0;
   let indexElWithDesc = 0;
   let beforeImg: ILandingBlockElement = landingBlockPrototype;
   let afterImg: ILandingBlockElement = landingBlockPrototype;
   let subtitle: ILandingBlockElement = landingBlockPrototype;
   let titleText: ILandingBlockElement = landingBlockPrototype;
   const { isAuthSettings } = useAuth();
   const { setIsOpen, setElSettings } = useAdminModalEdit();
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
                              beforeImg={elWithNoDesc[index - 1]}
                              afterImg={el}
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
                              beforeImg={beforeImg}
                              afterImg={afterImg}
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
                                 beforeImg={beforeImg}
                                 afterImg={afterImg}
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
