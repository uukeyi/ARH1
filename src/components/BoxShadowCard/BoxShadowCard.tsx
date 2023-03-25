import React from "react";
import { Link } from "react-router-dom";
import styles from "./BoxShadowCard.module.css";
import { useNavigate } from "react-router-dom";
interface BoxShadowCardProps {
   customClassName?: string;
   imgSrc: string;
   customClassNameTitle?: string;
   projectCard: boolean;
   titleText: string;
   cityText?: string;
   squareHouse?: string;
   suqareFacade?: string;
   description?: string;
   pathCard: string;
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
}) => {
   const { card, title, descriptionClass, link, textContainer } = styles;
   const navigate = useNavigate();
   return (
      <div
         onClick={() => {
            navigate(pathCard);
         }}
         className={`${customClassName} ${card}`}
      >
         <img src={imgSrc} alt="Не удалось отобразить картинку" />
         <div className={textContainer}>
            <p className={`${title} ${customClassNameTitle}`}>{titleText}</p>
            {projectCard ? (
               <>
                  <p className={descriptionClass}>{cityText}</p>
                  <p className={descriptionClass}>
                     Площадь дома : <strong>{squareHouse}</strong>
                  </p>
                  <p className={descriptionClass}>
                     {" "}
                     Площадь фасадов : <strong>{suqareFacade}</strong>
                  </p>
               </>
            ) : (
               <>
                  <p className={descriptionClass}>{description}</p>
                  <Link className={link} to={pathCard}>
                     Подробнее...
                  </Link>
               </>
            )}
         </div>
      </div>
   );
};

export default BoxShadowCard;
