import React, { useState } from "react";
import AdminModalEdit from "../AdminModalEdit";
import styles from "./OurServicesCard.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { ILandingBlockElement } from "../../interfaces/landingPageResponse";
interface OurServicesCardProps {
   description: ILandingBlockElement;
   imgEl: ILandingBlockElement;
   titleEl: ILandingBlockElement;
   aosAnimation: string;
}

const OurServicesCard: React.FC<OurServicesCardProps> = ({
   description,
   aosAnimation,
   imgEl,
   titleEl
}) => {
   const { card, titleClass, descriptionClass } = styles;
   const { setElSettings, setIsOpen } = useAdminModalEdit();
   const { isAuthSettings } = useAuth();
   return (
      <>
         <div data-aos={aosAnimation} data-aos-duration="1500" className={card}>
            <img
               src={imgEl.value}
               alt={"Не получилось отобразить картинку"}

               style={{
                  cursor: isAuthSettings.isAdmin ? "pointer" : "default",
               }}
               onClick={(e: any) => {
                  setIsOpen(true);
                  setElSettings(imgEl)
               }}
         
            />
            <p
               style={{
                  cursor: isAuthSettings.isAdmin ? "pointer" : "default",
               }}
               className={titleClass}
    
               onClick={(e: any) => {
                  setIsOpen(true);
                  setElSettings(titleEl);
               }}
      
            >
               {titleEl.value}
            </p>
            <p
               style={{
                  cursor: isAuthSettings.isAdmin ? "pointer" : "default",
               }}
               className={descriptionClass}
               onClick={(e: any) => {
                  setIsOpen(true);
                  setElSettings(description);
               }}
    
            >
               {description.value}
            </p>
         </div>
      </>
   );
};

export default OurServicesCard;
