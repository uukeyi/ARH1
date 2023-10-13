import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BoxShadowCard from "../BoxShadowCard/BoxShadowCard";
import styles from "./KnowledgeBaseSection.module.css";
import { Button } from "@mui/material";
import AdminModal from "../AdminModal/AdminModal";
import { getLandingPageBlocks } from "../../store/actions/landingPageActions";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxTookitHooks";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
type cardType = {
   titleText: string;
   description: string;
   img: string;
   pathCard: string;
};
const KnowledgeBaseSection: React.FC = () => {
   const {
      knowledgeBaseSection,
      subtitle,
      linkContainer,
      title,
      cardContainer,
      cardTitle,
      cardCustom,
      link,
      fullWidthContainer,
      textContainer,
   } = styles;
   const [adminModal, setAdminModal] = useState(false);
   const { isAuthSettings } = useAuth();
   const { setBlockSettings, setIsOpenBlockEdit } = useAdminModalEdit();
   const [errorLandingBlocks, setErrorLandingBlocks] = useState(false);
   const navigate = useNavigate();
   useEffect(() => {
      dispatch(
         getLandingPageBlocks({
            showInvisible: true,
            setError: setErrorLandingBlocks,
         })
      );
   }, []);

   const dispatch = useAppDispatch();
   const landingBlocks = useAppSelector((state) => state.landingPageSlice);
   const articlesBlocks = landingBlocks.elements.filter((block) => {
      return block.page == "articles";
   });
   useEffect(() => {
      if (errorLandingBlocks) {
         alert("Не получилось загрузить данные");
         navigate("/");
      }
   }, [errorLandingBlocks]);
   console.log(articlesBlocks)
   return (
      <section id={knowledgeBaseSection}>
         <AdminModal
            open={adminModal}
            setOpen={setAdminModal}
            pageBlock="articles"
         />
         <div className={`container ${fullWidthContainer}`}>
            <Link to={"/"} className={subtitle}>
               Главная /
               <Link to={"/ourProjects"} style={{ color: "rgb(235 51 73)" }}>
                  {" "}
                  База знаний
               </Link>
            </Link>
            <p className={title}>БАЗА ЗНАНИЙ</p>
            {isAuthSettings.isAdmin ? (
               <Button
                  variant="outlined"
                  sx={{
                     display: "block",
                     margin: "20px auto",
                  }}
                  onClick={() => {
                     setAdminModal(true);
                  }}
               >
                  Добавить новую статью
               </Button>
            ) : (
               <></>
            )}

            <div className={cardContainer}>
               {articlesBlocks.map((card, index) => {
                  if (!card.isVisible && !isAuthSettings.isAdmin) {
                     return null;
                  } else {
                     return (
                        <BoxShadowCard
                           customClassNameTitle={cardTitle}
                           customClassName={cardCustom}
                           customClassNameTextContainer={textContainer}
                           key={index}
                           projectCard={false}
                           pathCard={String(card.id)}
                           titleText={card.elements[0]?.value}
                           description={card.elements[1]?.value}
                           block={card}
                           imgSrc={card.elements[2]?.value}
                        />
                     );
                  }
               })}
            </div>
         </div>
      </section>
   );
};

export default KnowledgeBaseSection;
