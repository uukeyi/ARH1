import React from "react";
import Footer from "../Footer/Footer";
import styles from "./SingleProjectPageSection.module.css";
interface SingleProjectPageSection {
   titleText: string;
   city: string;
   date: string;
   facadeSquare: string;
   floors: string;
   houseSquare: string;
   children?: any;
   imgSrc: string;
   reconstructionPage?: boolean;
}

const SingleProjectPageImgCover: React.FC<SingleProjectPageSection> = ({
   titleText,
   city,
   date,
   facadeSquare,
   floors,
   houseSquare,
   children,
   imgSrc,
   reconstructionPage,
}) => {
   const {
      mainBlock,
      bg,
      overlay,
      title,
      subtitle,
      spaceAroundContainer,
      card,
      cardSubtitle,
      cardTitle,
      infoCard,
      infoCardSubtitle,
      infoCardTitle,
      textContainer,
      contentContainer,
      footer,
      footerLogo,
      footerSubtitle,
      footerTextContainer,
      footerFeedbackContainer,
      footerFeedbackBlock,
      footerSocialLinks,
      bgWrapper,
      fullWidthContainer,
   } = styles;
   return (
      <>
         <div className={mainBlock}>
            <div className={textContainer}>
               <p style={{ color: "white" }} className={title}>
                  {titleText}
               </p>
               <p className={subtitle}>
                  {city} , {date}
               </p>
               <div className={spaceAroundContainer}>
                  <div className={card}>
                     <p className={cardSubtitle}>
                        <div></div>| ИНЖЕНЕР-СТРОИТЕЛЬ
                     </p>
                     <p className={cardTitle}>АЛЕКСАНДР САВЕНКОВ</p>
                  </div>
                  <div className={card}>
                     <p className={cardSubtitle}>
                        <div></div>| ГЛАВНЫЙ АРХИТЕКТОР / ЛАНДШАФТНЫЙ АРХИТЕКТОР
                     </p>
                     <p className={cardTitle}>РЕНАТА ГАЛИМУЛИНА</p>
                  </div>
               </div>
               <div className={spaceAroundContainer}>
                  <div className={infoCard}>
                     <p className={infoCardTitle}>
                        {reconstructionPage ? "6 га" : houseSquare}
                     </p>
                     <p className={infoCardSubtitle}>
                        {reconstructionPage
                           ? "ПЛОЩАДЬ БАЗЫ ОТДЫХА"
                           : "Площадь дома"}
                     </p>
                  </div>
                  <div className={infoCard}>
                     <p className={infoCardTitle}>
                        {reconstructionPage ? "11500 м2" : floors}
                     </p>
                     <p className={infoCardSubtitle}>
                        {reconstructionPage ? "ПЛОЩАДЬ СТРОЕНИЙ" : "Этажность"}
                     </p>
                  </div>
                  <div className={infoCard}>
                     <p className={infoCardTitle}>
                        {reconstructionPage ? "2016 год" : facadeSquare}
                     </p>
                     <p className={infoCardSubtitle}>
                        {reconstructionPage
                           ? "ГОД ПРОЕКТИРОВАНИЯ"
                           : "Площадь фасадов"}
                     </p>
                  </div>
               </div>
               <div className={bgWrapper}>
                  <div
                     style={{
                        background: `url(${imgSrc}) no-repeat`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                     }}
                     className={bg}
                  >
                     <div className={overlay}></div>
                  </div>
               </div>
            </div>

            <div className={contentContainer}>
               {children}

               <Footer
                  whiteFooter={true}
                  colorIcons="#fff"
                  customClassNameFooter={footer}
                  customClassNameFeedbackContainer={footerFeedbackContainer}
                  customClassNameFeedbackBlock={footerFeedbackBlock}
                  customClassNameSocialLinksContainer={footerSocialLinks}
                  customClassNameTextContainer={footerTextContainer}
                  customClassNameSubtitle={footerSubtitle}
                  customClassNameLogo={footerLogo}
                  customClassNameContainer={fullWidthContainer}
               />
            </div>
         </div>
      </>
   );
};

export default SingleProjectPageImgCover;
