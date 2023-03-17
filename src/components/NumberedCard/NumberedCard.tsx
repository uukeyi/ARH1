import React from "react";
import styles from "./NumberedCard.module.css";
interface NumberedCardProps {
   imgSrc: string;
   title: string;
   description: string;
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
   return (
      <div data-aos = {id % 2 === 0 ? 'fade-left' : 'fade-right'} className={card}>
         <img src={imgSrc} alt="Не удалось загрузить фото" />
         <div className={titleContainer}>
            <div className={numberContainer}>{id}</div>
            <p className={titleClass}>{title}</p>
         </div>
         <p className={descriptionClass}>{description}</p>
      </div>
   );
};

export default NumberedCard;
