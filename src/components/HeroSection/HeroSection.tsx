import React from "react";
import styles from "./HeroSection.module.css";
import "aos/dist/aos.css";
import Link from "react-scroll/modules/components/Link";

import arrowIconSrc from "../../assets/icons/arrow-icon.webp";
import telegramSrc from "../../assets/heroSectionIcons/telegramIcon.svg";
import whatsAppSrc from "../../assets/heroSectionIcons/whatsappIcon.svg";
import { ILandingBlockElement } from "../../interfaces/landingPageResponse";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";

interface HeroSectionProps {
   titleText: ILandingBlockElement;
   subtitle: ILandingBlockElement;
   desc1: ILandingBlockElement;
   desc2: ILandingBlockElement;
   desc3: ILandingBlockElement;
   desc4: ILandingBlockElement;
}

const HeroSection: React.FC<HeroSectionProps> = ({
   titleText,
   subtitle,
   desc1,
   desc2,
   desc3,
   desc4,
}) => {
   const {
      hero,
      bgImage,
      bgCover,
      title,
      description,
      socialLinksContainer,
      arrowIcon,
      numberButton,
      btnContainer,
   } = styles;
   const { isAuthSettings } = useAuth();
   const { setIsOpen, setElSettings } = useAdminModalEdit();
   return (
      <section
         id={hero}
         onClick={(e: any) => {
            if (isAuthSettings.isAdmin) {
               setIsOpen(true);
               setElSettings(JSON.parse(e.target.dataset.el));
            }
         }}
      >
         <div className="container">
            <h1
               data-aos="zoom-in-up"
               data-aos-duration="1000"
               className={title}
            >
               <span data-el={JSON.stringify(titleText)}>
                  {titleText.value}
               </span>
               <span data-el={JSON.stringify(subtitle)}>{subtitle.value}</span>
            </h1>
            <p
               data-aos="zoom-in-up"
               data-aos-duration="1000"
               className={description}
            >
               <span data-el={JSON.stringify(desc1)}>{desc1.value}</span>
               <span data-el={JSON.stringify(desc2)}>{desc2.value}</span>
               <span data-el={JSON.stringify(desc3)}>{desc3.value}</span>
               <span data-el={JSON.stringify(desc4)}>{desc4.value}</span>
            </p>
            <div className={socialLinksContainer}>
               <a href="https://t.me/Sasha_Save">
                  <img src={telegramSrc} alt="Telegram" />
               </a>
               <a href="https://api.whatsapp.com/send?phone=88129709005">
                  <img src={whatsAppSrc} alt="WhatsApp" />
               </a>
            </div>
            <div className={btnContainer}>
               <a className={numberButton}>8 (812) 970-90-05</a>
            </div>

            <Link to="ourServices" smooth>
               <img src={arrowIconSrc} alt="Вниз" className={arrowIcon} />
            </Link>
         </div>
         <div className={bgCover}></div>
         <div className={bgImage}></div>
      </section>
   );
};
export default HeroSection;
