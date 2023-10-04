import React from "react";
import styles from "./FaqSection.module.css";
import {
   ILandingBlock,
   ILandingBlockElement,
} from "../../interfaces/landingPageResponse";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { Button } from "@mui/material";
interface FaqSectionProps {
   block: ILandingBlock;
   titleText: ILandingBlockElement;
   subtitle1: ILandingBlockElement;
   desc1: ILandingBlockElement;
   subtitle2: ILandingBlockElement;
   desc2: ILandingBlockElement;
   desc3: ILandingBlockElement;
   desc4: ILandingBlockElement;
   subtitle3: ILandingBlockElement;
   desc5: ILandingBlockElement;
   subtitle4: ILandingBlockElement;
   desc6: ILandingBlockElement;
   subtitle5: ILandingBlockElement;
   desc7: ILandingBlockElement;
   subtitle6: ILandingBlockElement;
   desc8: ILandingBlockElement;
   subtitle7: ILandingBlockElement;
   desc9: ILandingBlockElement;
   subtitle8: ILandingBlockElement;
   desc10: ILandingBlockElement;
}

const FaqSection: React.FC<FaqSectionProps> = ({
   block,
   titleText,
   subtitle1,
   subtitle2,
   subtitle3,
   subtitle4,
   subtitle5,
   subtitle6,
   subtitle7,
   subtitle8,
   desc1,
   desc9,
   desc10,
   desc2,
   desc3,
   desc4,
   desc5,
   desc6,
   desc7,
   desc8,
}) => {
   const { title, faq, subtitle, description } = styles;
   const { isAuthSettings } = useAuth();
   const { setIsOpen, setElSettings, setBlockSettings, setIsOpenBlockEdit } =
      useAdminModalEdit();
   return (
      <>
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
         <section
            onClick={(e: any) => {
               if (isAuthSettings.isAdmin) {
                  setIsOpen(true);
                  setElSettings(JSON.parse(e.target.dataset.el));
               }
            }}
            className={faq}
            id="faq"
         >
            <p data-el={JSON.stringify(titleText)} className={title}>
               {titleText.value}
            </p>
            <div className="container">
               <p data-el={JSON.stringify(subtitle1)} className={subtitle}>
                  {subtitle1.value}
               </p>
               <p data-el={JSON.stringify(desc1)} className={description}>
                  {desc1.value}
               </p>
               <p data-el={JSON.stringify(subtitle2)} className={subtitle}>
                  {subtitle2.value}
               </p>
               <p data-el={JSON.stringify(desc2)} className={description}>
                  {desc2.value}
               </p>
               <p data-el={JSON.stringify(desc3)} className={description}>
                  {desc3.value}
               </p>
               <p data-el={JSON.stringify(desc4)} className={description}>
                  {desc4.value}
               </p>
               <p data-el={JSON.stringify(subtitle3)} className={subtitle}>
                  {subtitle3.value}
               </p>
               <p data-el={JSON.stringify(desc5)} className={description}>
                  {desc5.value}
               </p>
               <p data-el={JSON.stringify(subtitle4)} className={subtitle}>
                  {subtitle4.value}
               </p>
               <p data-el={JSON.stringify(desc6)} className={description}>
                  {desc6.value}
               </p>
               <p data-el={JSON.stringify(subtitle5)} className={subtitle}>
                  {subtitle5.value}|
               </p>
               <p data-el={JSON.stringify(desc7)} className={description}>
                  {desc7.value}
               </p>
               <p data-el={JSON.stringify(subtitle6)} className={subtitle}>
                  {subtitle6.value}
               </p>
               <p data-el={JSON.stringify(desc8)} className={description}>
                  {desc8.value}
               </p>
               <p data-el={JSON.stringify(subtitle7)} className={subtitle}>
                  {subtitle7.value}
               </p>
               <p data-el={JSON.stringify(desc9)} className={description}>
                  {desc9.value}
               </p>
               <p data-el={JSON.stringify(subtitle8)} className={subtitle}>
                  {subtitle8.value}
               </p>
               <p data-el={JSON.stringify(desc10)} className={description}>
                  {desc10.value}
               </p>
            </div>
         </section>
      </>
   );
};

export default FaqSection;
