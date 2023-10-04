import React from "react";
import styles from "./CostEquivalentSection.module.css";
import { ILandingBlock, ILandingBlockElement } from "../../interfaces/landingPageResponse";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { Button } from "@mui/material";
interface CostEquivalentSectionProps {
   titleConfig: ILandingBlockElement;
   imgConfig: ILandingBlockElement;
   desc1: ILandingBlockElement;
   desc2: ILandingBlockElement;
   desc3: ILandingBlockElement;
   desc4: ILandingBlockElement;
   desc5: ILandingBlockElement;
   desc6: ILandingBlockElement;
   block : ILandingBlock
}

const CostEquivalentSection: React.FC<CostEquivalentSectionProps> = ({
   titleConfig,
   desc1,
   desc2,
   desc3,
   desc4,
   desc5,
   imgConfig,
   desc6,
   block
}) => {
   const { costEquivalentSection, title, contentContainer } = styles;
   const {isAuthSettings} = useAuth()
   const {setIsOpen , setElSettings , setBlockSettings , setIsOpenBlockEdit} = useAdminModalEdit()
   return (
      <section id={costEquivalentSection}>
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
               Изменить порядок блока
            </Button>
         ) : null}
         <div className="container">
            <p
            
               onClick={() => {
                  if (isAuthSettings.isAdmin) {
                     setIsOpen(true);
                     setElSettings(titleConfig);
                  }
               }}
               data-aos="zoom-in"
               data-aos-duration="1000"
               className={title}
            >
               {titleConfig.value}

            </p>
            <div className={contentContainer}>
               <img
                  data-aos="fade-right"
                  data-aos-duration="1000"
                 
                  src={imgConfig.value}
                  onClick={() => {
                     if (isAuthSettings.isAdmin) {
                        setIsOpen(true);
                        setElSettings(imgConfig);
                     }
                  }}

                  alt="Не удалось загрузить фото"
               />
               <p data-aos="fade-left" data-aos-duration="1000">
                  <span
                   
                     onClick={() => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(desc1);
                        }
                     }}
                  >
                     {desc1.value}
                  </span>
                  <br />
                  <br />
                  <span
                   
                     onClick={() => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(desc2);
                        }
                     }}
                  >
                     {desc2.value}
                  </span>

                  <br />
                  <br />
                  <span
                    
                     onClick={() => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(desc3);
                        }
                     }}
                  >
                     {desc3.value}
                  </span>

                  <br />
                  <br />
                  <span
                     
                     onClick={() => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(desc4);
                        }
                     }}
                  >
                     {desc4.value}
                  </span>

                  <br />
                  <br />
                  <span
                    
                     onClick={() => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(desc5);
                        }
                     }}
                  >
                     {desc5.value}
                  </span>

                  <br />
                  <br />
                  <span
                  
                     onClick={() => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(desc6);
                        }
                     }}
                  >
                     {desc6.value}
                  </span>

               </p>
            </div>
         </div>
      </section>
   );
};

export default CostEquivalentSection;
