import React from "react";
import styles from "./OurServicesCard.module.css";
interface OurServicesCardProps {
   src: string;
   title: string;
   description: string;
   aosAnimation : string;
}

const OurServicesCard: React.FC<OurServicesCardProps> = ({src , title , description , aosAnimation}) => {
   const { card, titleClass, descriptionClass } = styles;
   return (
    <div data-aos = {aosAnimation}  className={card}>
        <img src={src} alt={'Не получилось отобразить картинку'} />
        <p className={titleClass} >
            {
                title
            }
        </p>
        <p className={descriptionClass} >
            {
                description
            }
        </p>
    </div>
   )
};

export default OurServicesCard;
