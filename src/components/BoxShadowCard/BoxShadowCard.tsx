import React from "react";
import { Link } from "react-router-dom";
import styles from "./BoxShadowCard.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { ILandingBlock } from "../../interfaces/landingPageResponse";
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
   date?: string;
   floor?: string;
   pathCard: string;
   customClassNameTextContainer?: string;
   isStatic?: boolean;
   block?: ILandingBlock;
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
   customClassNameTextContainer,
   isStatic,
   block,
}) => {
   const {
      card,
      title,
      descriptionClass,
      link,
      textContainer,
      svgImage,
      activeImg,
   } = styles;
   const { isAuthSettings } = useAuth();
   const { setIsOpenBlockEdit, setBlockSettings } = useAdminModalEdit();
   const navigate = useNavigate();
   return (
      <div
         onClick={() => {
            navigate(pathCard);
         }}
         onContextMenu={() => {
            if (!isStatic && isAuthSettings.isAdmin) {
               setBlockSettings(block);
               setIsOpenBlockEdit(true);
            }
         }}
         className={`${customClassName} ${card}`}
      >
         <img src={imgSrc} alt="Не удалось отобразить картинку" />

         <div className={`${textContainer} ${customClassNameTextContainer}`}>
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
                  <p className={descriptionClass}>
                     {description !== undefined && description.length > 100
                        ? description?.slice(0, 100) + "....."
                        : description}
                  </p>
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
