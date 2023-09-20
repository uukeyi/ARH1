import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import OrangeButton from "../OrangeButton/OrangeButton";
import styles from "./ApplicationForArch.module.css";
import { ILandingBlockElement } from "../../interfaces/landingPageResponse";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";

interface ApplicationForArchProps {
   title: ILandingBlockElement;
   img: ILandingBlockElement;
   subtitle: ILandingBlockElement;
   liTitle: ILandingBlockElement;
   liEl1: ILandingBlockElement;
   liEl2: ILandingBlockElement;
   liEl3: ILandingBlockElement;
   liEl4: ILandingBlockElement;
   desc: ILandingBlockElement;
   bottomDesc: ILandingBlockElement;
}

const ApplicationForArch: React.FC<ApplicationForArchProps> = ({
   title,
   subtitle,
   img,
   desc,
   liEl1,
   liEl2,
   liEl3,
   liEl4,
   bottomDesc,
   liTitle,
}) => {
   const {
      ApplicationForArch,
      right,
      left,
      imgClass,
      titleClass,
      description,
      contactsWrapper,
      wrapper,
      optionPhone,
      phoneContainer,
      inputPhone,
      inputName,
   } = styles;
   const [value, setValue] = useState("");
   const {isAuthSettings} = useAuth()
   const {setIsOpen , setElSettings} = useAdminModalEdit()
   return (
      <section id={ApplicationForArch}>
         <div className="container">
            <div className={wrapper}>
               <div className={left}>
                  <img
                     className={imgClass}
                     src={img.value}
                    
                     onClick={() => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(img);
                        }
                     }}
                     alt="architechtor"
                     data-aos="zoom-in"
                     data-aos-duration="1500"
                  />
               </div>
               <div
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  className={right}
               >
                  <p
                     className={titleClass}
                  
                     onClick={() => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(title);
                        }
                     }}
                  >
                     {title.value}
                  </p>
                  <p className={description}>
                     <span
                       
                        onClick={() => {
                  
                           if (isAuthSettings.isAdmin) {
                              setIsOpen(true);
                              setElSettings(subtitle);
                           }
                        }}
                     >
                        {subtitle.value}
                     </span>
                     <br />
                     <br />
                     <span
                        
                        onClick={() => {
                           if (isAuthSettings.isAdmin) {
                              setIsOpen(true);
                              setElSettings(liTitle);
                           }
                        }}
                     >
                        {liTitle.value}
                     </span>
                     <br />
                     
                     <span
                        
                        onClick={() => {
                           if (isAuthSettings.isAdmin) {
                              setIsOpen(true);
                              setElSettings(liEl1);
                           }
                        }}
                     >
                        {liEl1.value}
                     </span>
                     <br />
                     <span
                       
                        onClick={() => {
                           if (isAuthSettings.isAdmin) {
                              setIsOpen(true);
                              setElSettings(liEl2);
                           }
                        }}
                     >
                        {liEl2.value}
                     </span>
                     <br />
                     <span
                      
                        onClick={() => {
                           if (isAuthSettings.isAdmin) {
                              setIsOpen(true);
                              setElSettings(liEl3);
                           }
                        }}
                     >
                        {liEl3.value}
                     </span>
                     <br />
                     <span
                       
                        onClick={() => {
                           if (isAuthSettings.isAdmin) {
                              setIsOpen(true);
                              setElSettings(liEl4);
                           }
                        }}
                     >
                        {liEl4.value}
                     </span>
                     <br />
                     <br />
                     <span
                      
                        onClick={() => {
                           if (isAuthSettings.isAdmin) {
                              setIsOpen(true);
                              setElSettings(desc);
                           }
                        }}
                     >
                        {desc.value}
                     </span>
                     <br />
                     <br />
                     <span
                        
                        onClick={() => {
                           if (isAuthSettings.isAdmin) {
                              setIsOpen(true);
                              setElSettings(bottomDesc);
                           }
                        }}
                     >
                        {bottomDesc.value}
                     </span>
                  </p>
                  <div className={contactsWrapper}>
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
                     <OrangeButton title={"ОТПРАВИТЬ ЗАЯВКУ"} width="100%" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ApplicationForArch;
