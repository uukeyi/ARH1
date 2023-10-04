import React from "react";
import styles from "./QuoteLineBlock.module.css";
import { ILandingBlock, ILandingBlockElement } from "../../interfaces/landingPageResponse";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "@mui/material";
interface QuoteLineBlockProps {
   titleBlock: ILandingBlockElement;
   title: ILandingBlockElement;
   desc: ILandingBlockElement;
   block : ILandingBlock
}

const QuoteLineBlock: React.FC<QuoteLineBlockProps> = ({
   titleBlock,
   title,
   desc,
   block
}) => {
   const {
      line,
      blackBlock,
      titleClass,
      description,
      titleClassDesc,
      quoteLineBlockSection,
   } = styles;
   const { setIsOpen, setElSettings , setIsOpenBlockEdit , setBlockSettings  } = useAdminModalEdit();
   const { isAuthSettings } = useAuth();
   return (
      <div
         className={desc.value ? `container ${quoteLineBlockSection}` : "container"}
      >
           {isAuthSettings.isAdmin && block.name ? (
            <Button
               onClick={() => {
                  if (isAuthSettings.isAdmin ) {
                     setIsOpenBlockEdit(true);
                     setBlockSettings(block);
                  }
               }}
               variant="outlined"
            >
               Изменить блок
            </Button>
         ) : null}
         <hr className={line} />
         <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className={blackBlock}
            onClick={() => {
               if (isAuthSettings.isAdmin) {
                  setIsOpen(true);
                  setElSettings(titleBlock);
               }
            }}
         >
            <p>{titleBlock.value}</p>
         </div>
         <p
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            onClick={() => {
               if (isAuthSettings.isAdmin) {
                  setIsOpen(true);
                  setElSettings(title);
               }
            }}
            className={desc ? titleClassDesc : titleClass}
         >
            {title.value}
         </p>
         {desc.value ? (
            <p
               data-aos="zoom-in-up"
               data-aos-duration="1000"
               className={description}
               onClick={() => {
                  console.log("asdasd");
                  if (isAuthSettings.isAdmin) {
                     setIsOpen(true);
                     setElSettings(desc);
                  }
               }}
            >
               {desc.value}
            </p>
         ) : (
            <></>
         )}
         <hr className={line} />
      </div>
   );
};

export default QuoteLineBlock;
