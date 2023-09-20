import React, { useState } from "react";
import styles from "./OurServicesSection.module.css";

import OurServicesCard from "../OurServicesCard/OurServicesCard";
import { useAuth } from "../../contexts/AuthContext";
import AdminModalEdit from "../AdminModalEdit";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { ILandingBlockElement } from "../../interfaces/landingPageResponse";
type cardType = {
   img: ILandingBlockElement;
   description: ILandingBlockElement;
   title: ILandingBlockElement;
   aosAnimation: string;
};
interface OurServicesSectionProps {
   titleText: ILandingBlockElement;
   firstCard: cardType;
   secondCard: cardType;
   thirdCard: cardType;
}

const OurServicesSection: React.FC<OurServicesSectionProps> = ({
   titleText,
   firstCard,
   secondCard,
   thirdCard,
}) => {
   const { ourServices, title, cardContainer } = styles;
   const { isAuthSettings } = useAuth();
   const { setElSettings, setIsOpen } = useAdminModalEdit();
   const cards: cardType[] = [firstCard, secondCard, thirdCard];
   return (
      <section id={"ourServices"}>
         <div id={ourServices}>
            <div className="container">
               <h1
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  className={title}
                  style={{
                     cursor: isAuthSettings.isAdmin ? "pointer" : "default",
                  }}
      
                  onClick={(e: any) => {
                     if (isAuthSettings.isAdmin) {
                        setIsOpen(true);
                        setElSettings(titleText);
                     }
                  }}
               >
                  {titleText.value}
               </h1>
               <div className={cardContainer}>
                  {cards.map((card: cardType, index) => {
                     return (
                        <OurServicesCard
                           description={card.description}
                           key={index}
                           aosAnimation={card.aosAnimation}
                           titleEl={card.title}
                           imgEl={card.img}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
};

export default OurServicesSection;
