import React from "react";
import { Link } from "react-router-dom";
import styles from "./BoxShadowCard.module.css";
interface BoxShadowCardProps {
   customClassName?: string;
   imgSrc: string;
   customClassNameTitle?: string;
   customClassNameTextContainer? : string;
   projectCard: boolean;
   titleText: string;
   cityText? : string;
   squareHouse? : string;
   suqareFacade? : string;
   description? : string
   pathCard : string
}

const BoxShadowCard: React.FC<BoxShadowCardProps> = ({
   customClassName,
   imgSrc,
   titleText,
   customClassNameTitle,
   projectCard,
   cityText,
   squareHouse,
   suqareFacade,
   description,
   pathCard,
   customClassNameTextContainer
}) => {
   const { card, title, descriptionClass , link , textContainer } = styles;
   return (
      <div className={`${customClassName} ${card}`}>
         <img src={imgSrc} alt="#" />
         <div className={`${textContainer} ${customClassNameTextContainer}`}>
         <p className={`${title} ${customClassNameTitle}`}>{titleText}</p>
         {projectCard ? (
            <>
               <p className={descriptionClass}>{cityText}</p>
               <p className={descriptionClass} >Площадь дома :  <strong>{squareHouse}</strong></p>
               <p className={descriptionClass} > Площадь фасадов :  <strong>{suqareFacade}</strong></p>
            </>
         ) : <>
         <p className={descriptionClass}>
            {
                description
            }
         </p>
         <Link className={link} to={pathCard}>Подробнее...</Link>
         </>}

         </div>
         
      </div>
   );
};

export default BoxShadowCard;
