import React from "react";
import styles from "./AboutUsSection.module.css";
import quoteSectionLine from "../../assets/icons/quoteSectionLine.webp";
import { ILandingBlockElement } from "../../interfaces/landingPageResponse";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";

interface AboutUsSectionProps {
   mainTitle: ILandingBlockElement;
   titleConfig: ILandingBlockElement;
   titleDesc: ILandingBlockElement;
   subTitle: ILandingBlockElement;
   mainDesc: ILandingBlockElement;
   card1: {
      title: ILandingBlockElement;
      subtitle: ILandingBlockElement;
   };
   card2: {
      title: ILandingBlockElement;
      subtitle: ILandingBlockElement;
   };
   card3: {
      title: ILandingBlockElement;
      subtitle: ILandingBlockElement;
   };
   card4: {
      title: ILandingBlockElement;
      subtitle: ILandingBlockElement;
   };
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({
   mainTitle,
   titleConfig,
   titleDesc,
   subTitle,
   mainDesc,
   card1,
   card2,
   card3,
   card4,
}) => {
   const {
      aboutUsSection,
      title,
      subtitle,
      subdescription,
      cardTitle,
      cardSubtitle,
      contentContainer,
      cardClass,
      line,
   } = styles;
   const data = [card1, card2, card3, card4];
   const { isAuthSettings } = useAuth();
   const { setIsOpen, setElSettings } = useAdminModalEdit();
   return (
      <section id={aboutUsSection}>
         <div className="container">
            <p
       
               data-aos="zoom-in"
               data-aos-duration="1000"
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
            <p data-aos="zoom-in" data-aos-duration="1000" className={subtitle}>
               <strong
                
                  onClick={() => {
                     if (isAuthSettings.isAdmin) {
                        setIsOpen(true);
                        setElSettings(titleConfig);
                     }
                  }}
               >
                  {titleConfig.value}
     
               </strong>
               <span
                 
                  onClick={() => {
                     if (isAuthSettings.isAdmin) {
                        setIsOpen(true);
                        setElSettings(titleDesc);
                     }
                  }}
               >
                  {titleDesc.value}
               </span>

               <br />
               <span
                
                  onClick={() => {
                     if (isAuthSettings.isAdmin) {
                        setIsOpen(true);
                        setElSettings(subTitle);
                     }
                  }}
               >
                  {subTitle.value}
               </span>
              
            </p>
            <p
               data-aos="zoom-in"
               data-aos-duration="1000"
               className={subdescription}
              
               onClick={() => {
                  if (isAuthSettings.isAdmin) {
                     setIsOpen(true);
                     setElSettings(mainDesc);
                  }
               }}
            >
               {mainDesc.value}
               {/* Компетентность подтверждают результаты, потому несколько фактов о
               нас в цифрах. */}
            </p>
            <div
               data-aos="zoom-in"
               data-aos-duration="1000"
               className={contentContainer}
            >
               {data.map((card, index) => {
                  return (
                     <div key={index} className={cardClass}>
                        <p
                           className={cardTitle}
                          
                           onClick={() => {
                              if (isAuthSettings.isAdmin) {
                                 setIsOpen(true);
                                 setElSettings(card.title);
                              }
                           }}
                        >
                           {card.title.value}
                        </p>
                        <hr />
                        <p
                           className={cardSubtitle}
                           
                           onClick={() => {
                              if (isAuthSettings.isAdmin) {
                                 setIsOpen(true);
                                 setElSettings(card.subtitle);
                              }
                           }}
                        >
                           {card.subtitle.value}
                        </p>
                     </div>
                  );
               })}
            </div>
            <img
               className={line}
               src={quoteSectionLine}
               alt="_________________________"
            />
         </div>
      </section>
   );
};

export default AboutUsSection;
