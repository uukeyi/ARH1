import React from "react";
import { Link } from "react-router-dom";
import styles from "./KnowledgeBaseDetailsSection.module.css";
import { ILandingBlockElement } from "../../interfaces/landingPageResponse";
import AdminModalEdit from "../AdminModalEdit";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
interface KnowledgeBaseDetailsSectionI {
   pageTitle: ILandingBlockElement;
}

const KnowledgeBaseDetailsSection: React.FC<KnowledgeBaseDetailsSectionI> = ({
   pageTitle,
}) => {
   const { cover, baOverlay, subtitle, title, wrapper } = styles;
   const { isAuthSettings } = useAuth();
   const { setIsOpen, setElSettings } = useAdminModalEdit();
   return (
      <div className={cover}>
         <AdminModalEdit />
         <div className={baOverlay}>
            <div className="container">
               <Link to={"/"} className={subtitle}>
                  Главная /{" "}
                  <Link to={"/knowledgeBase"} className={subtitle}>
                     База знаний /{" "}
                     <span
                        onClick={() => {
                           if (isAuthSettings.isAdmin) {
                              setElSettings(pageTitle);
                              setIsOpen(true);
                           }
                        }}
                        style={{ color: "rgb(235 51 73)" }}
                     >
                        {pageTitle?.value}
                     </span>
                  </Link>
               </Link>
               <p
                  onClick={() => {
                     if (isAuthSettings.isAdmin) {
                        setElSettings(pageTitle);
                        setIsOpen(true);
                     }
                  }}
                  className={title}
               >
                  {pageTitle?.value}
               </p>
            </div>
         </div>
      </div>
   );
};

export default KnowledgeBaseDetailsSection;
