import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ServiceDetailsSection.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxTookitHooks";
import { getLandingPageBlock } from "../../store/actions/landingPageActions";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { useAuth } from "../../contexts/AuthContext";

const ServiceDetailsSection: React.FC = () => {
   const [errorLandingBlocks, setErrorLandingBlocks] = useState(false);
   const dispatch = useAppDispatch();
   const { isAuthSettings } = useAuth();
   const { setIsOpen, setElSettings } = useAdminModalEdit();
   const serviceBlock = useAppSelector(
      (state) => state.landingPageSlice.singleBlock
   );
   useEffect(() => {
      dispatch(
         getLandingPageBlock({
            id: 57,
            showInvisible: true,
            setError: setErrorLandingBlocks,
         })
      );
   }, []);
   const { cover, baOverlay, subtitle, title, wrapper, bg } = styles;
   console.log(serviceBlock);
   return (
      <div className={cover}>
         <img src={serviceBlock?.elements[0]?.value} alt="#" className={bg} />

         <div className={baOverlay}>
            <div className="container">
               <p
                  onClick={() => {
                     if (isAuthSettings.isAdmin) {
                        setElSettings(serviceBlock.elements[1]);
                        setIsOpen(true);
                     }
                  }}
                  className={title}
               >
                  {serviceBlock?.elements[1]?.value}
               </p>
               {isAuthSettings.isAdmin ? (
                  <button
                     onClick={() => {
                        if (isAuthSettings.isAdmin) {
                           setElSettings(serviceBlock.elements[0]);
                           setIsOpen(true);
                        }
                     }}
                     style={{ color: "white" }}
                  >
                     изменить картинку
                  </button>
               ) : null}
            </div>
         </div>
      </div>
   );
};

export default ServiceDetailsSection;
