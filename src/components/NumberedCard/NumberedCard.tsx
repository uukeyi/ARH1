import React from "react";
import styles from "./NumberedCard.module.css";
import { ILandingBlockElement } from "../../interfaces/landingPageResponse";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
interface NumberedCardProps {
   imgSrc: ILandingBlockElement;
   title: ILandingBlockElement;
   description: ILandingBlockElement;
   id: number;
}

const NumberedCard: React.FC<NumberedCardProps> = ({
   imgSrc,
   title,
   description,
   id,
}) => {
   const {
      card,
      titleClass,
      descriptionClass,
      titleContainer,
      numberContainer,
   } = styles;
   const {isAuthSettings} = useAuth()
   const {setIsOpen , setElSettings} = useAdminModalEdit()
   return (
      <div
         data-aos={id % 2 === 0 ? "fade-left" : "fade-right"}
         data-aos-duration="1500"
         className={card}
      >
         <img
            src={imgSrc.value}
            data-typeId={imgSrc.typeId}
            data-orderIndex={imgSrc.orderIndex}
            data-blockId={imgSrc.blockId}
            data-id={imgSrc.id}
            alt="Не удалось загрузить фото"
            onClick={() => {
               if (isAuthSettings.isAdmin) {
                  setIsOpen(true);
                  setElSettings(imgSrc);
               }
            }}
         />
         <div className={titleContainer}>
            <div className={numberContainer}>{id}</div>
            <p
               className={titleClass}
               data-typeId={title.typeId}
               data-orderIndex={title.orderIndex}
               data-blockId={title.blockId}
               data-id={title.id}
               onClick={() => {
                  if (isAuthSettings.isAdmin) {
                     setIsOpen(true);
                     setElSettings(title);
                  }
               }}
            >
               {title.value}
            </p>
         </div>
         <p
            className={descriptionClass}
            data-typeId={description.typeId}
            data-orderIndex={description.orderIndex}
            data-blockId={description.blockId}
            data-id={description.id}
            onClick={() => {
               if (isAuthSettings.isAdmin) {
                  setIsOpen(true);
                  setElSettings(description);
               }
            }}
         >
            {description.value}
         </p>
      </div>
   );
};

export default NumberedCard;
