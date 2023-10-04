import React, { useState } from "react";
import styles from "./BlockHeaderSection.module.css";
import NumberedCard from "../NumberedCard/NumberedCard";
import PhoneInput from "react-phone-input-2";
import { ILandingBlock, ILandingBlockElement, landingElPrototype } from "../../interfaces/landingPageResponse";
import { Button } from "@mui/material";
import "react-phone-input-2/lib/style.css";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import OrangeButton from "../OrangeButton/OrangeButton";
interface BlockHeaderSectionProps {
   titleText: ILandingBlockElement;
   elements: ILandingBlockElement[];
   block : ILandingBlock
}

const BlockHeaderSection: React.FC<BlockHeaderSectionProps> = ({
   elements,
   titleText,
   block
}) => {
   const [value, setValue] = useState("");
   let titleProps: ILandingBlockElement = landingElPrototype
   let imgProps: ILandingBlockElement = landingElPrototype
   let descProps: ILandingBlockElement =landingElPrototype
   let index = 0;
   let indexElement = 0;
   const { isAuthSettings } = useAuth();
   const { setIsOpen, setElSettings  , setIsOpenBlockEdit , setBlockSettings} = useAdminModalEdit();
   const {
      blockHeaderSection,
      title,
      cardContainer,
      feedbackContainer,
      inputName,
      inputPhone,
      optionPhone,
      phoneContainer,
   } = styles;

   return (
      <section id={blockHeaderSection}>
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
            <p
               data-aos="zoom-in"
       
               data-aos-duration="1500"
               className={title}
               onClick={() => {
                  if (isAuthSettings.isAdmin) {
                     setIsOpen(true);
                     setElSettings(titleText);
                  }
               }}
            >
               {titleText.value}
            </p>

            <div className={cardContainer}>
               {elements.map((card) => {
                  index = index + 1;
                  switch (index) {
                     case 3:
                        indexElement = indexElement + 1;
                        descProps = card;
                        index = 0;
                        return (
                           <NumberedCard
                              key={indexElement}
                              title={titleProps}
                              imgSrc={imgProps}
                              description={descProps}
                              id={indexElement}
                           />
                        );

                     case 2:
                        titleProps = card;

                        break;
                     case 1:
                        imgProps = card;

                        break;
                  }
               })}
            </div>
            <div
               data-aos="zoom-in"
               data-aos-duration="1500"
               className={feedbackContainer}
            >
               <input
                  className={inputName}
                  type="text"
                  placeholder="Ваше имя"
               />
               <PhoneInput
                  inputClass={inputPhone}
                  country={"ru"}
                  value={value}
                  onChange={setValue}
                  placeholder="Ваш номер телефона"
                  buttonClass={optionPhone}
                  containerClass={phoneContainer}
               />
            <OrangeButton title="ОСТАВИТЬ ЗАЯВКУ" width="300px" />

            </div>
         </div>
      </section>
   );
};

export default BlockHeaderSection;
