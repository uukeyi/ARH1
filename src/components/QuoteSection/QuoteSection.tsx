import React from "react";
import styles from "./QuoteSection.module.css";
import quoteSectionLine from "../../assets/icons/quoteSectionLine.webp";
import QuoteLineBlock from "../QuoteLineBlock/QuoteLineBlock";
import { ILandingBlock, ILandingBlockElement, landingBlockPrototype, landingElPrototype } from "../../interfaces/landingPageResponse";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "@mui/material";
interface QuoteSectionProps {
   desc: ILandingBlockElement;
   subDesc: ILandingBlockElement;
   title: ILandingBlockElement;
   subtitle: ILandingBlockElement;
   weight: string;
   bg: string;
   personName: ILandingBlockElement;
   personImg: ILandingBlockElement;
   personDesc: ILandingBlockElement;
   block : ILandingBlock
}
const QuoteSection: React.FC<QuoteSectionProps> = ({
   desc,
   subDesc,
   title,
   subtitle,
   weight,
   bg,
   personName,
   personDesc,
   block,
   personImg,
}) => {
   const {
      quoteSection,
      infoContainer,
      mainText,
      cardContainer,
      cardImg,
      cardTitle,
      cardSubtitle,
      footerLine,
   } = styles;
   const { setIsOpen, setElSettings , setIsOpenBlockEdit , setBlockSettings } = useAdminModalEdit();
   const { isAuthSettings } = useAuth();
   return (
      <div id={quoteSection} style={{ backgroundColor: bg }}>
          {isAuthSettings.isAdmin ? (
            <Button
               onClick={() => {
                  if (isAuthSettings.isAdmin) {
                     setIsOpenBlockEdit(true);
                     setBlockSettings(block);
                  }
               }}
               variant="outlined"
            >
               Изменить блок
            </Button>
         ) : null}
         <div className="container">
            <QuoteLineBlock titleBlock={title} title={subtitle} desc= {landingElPrototype} block={landingBlockPrototype} />
            <div className={infoContainer}>
               <p
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  className={mainText}
                  onClick={(e) => {
                     e.stopPropagation();
                     if (isAuthSettings.isAdmin) {
                        setIsOpen(true);
                        setElSettings(desc);
                     }
                  }}
               >
                  {desc.value}
                  <br />
                  <br />
                  <p
                     onClick={() => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(subDesc);
                        }
                     }}
                  >
                     {subDesc.value}
                  </p>
               </p>
               <div
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  className={cardContainer}
               >
                  <img
                     className={cardImg}
                     src={personImg.value}
                     alt="Фото"
                     onClick={() => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(personImg);
                        }
                     }}
                  />
                  <p
                     className={cardTitle}
                     onClick={() => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(personName);
                        }
                     }}
                     style={{ fontWeight: weight }}
                  >
                     {personName.value}
                  </p>
                  <p
                     className={cardSubtitle}
                     onClick={() => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(personDesc);
                        }
                     }}
                  >
                     {personDesc.value}
                  </p>
               </div>
            </div>
            <img className={footerLine} src={quoteSectionLine} alt="Линия" />
         </div>
      </div>
   );
};
export default QuoteSection;
