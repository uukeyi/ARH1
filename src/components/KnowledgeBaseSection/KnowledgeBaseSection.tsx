import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BoxShadowCard from "../BoxShadowCard/BoxShadowCard";
import styles from "./KnowledgeBaseSection.module.css";
import { Button } from "@mui/material";
import { getLandingPageBlocks } from "../../store/actions/landingPageActions";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxTookitHooks";
import { useAuth } from "../../contexts/AuthContext";
import { createBlock } from "../../store/actions/landingPageActions";
const KnowledgeBaseSection: React.FC = () => {
   const {
      knowledgeBaseSection,
      subtitle,
      title,
      cardContainer,
      cardTitle,
      cardCustom,
      fullWidthContainer,
      textContainer,
   } = styles;
   const { isAuthSettings } = useAuth();
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
   const [errorCreate, setErrorCreate] = useState(false);
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
   useEffect(() => {
      if (errorCreate) {
         alert("Не получилось создать блок");
      }
   }, [errorCreate]);
   console.log(articlesBlocks)
   return (
      <section id={knowledgeBaseSection}>
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
                     dispatch(
                        createBlock({
                           nameBlock: `new article block ${articlesBlocks.length + 1}`,
                           orderIndex: articlesBlocks.length,
                           pageBlock: "articles",
                           isVisible: true,
                           isDeleted: false,
                           elements: [],
                           setError: setErrorCreate,
                           createWithInitialData: true,
                           initialElements: [
                              {
                                 value: "заголовок",
                                 orderIndex: 0,
                                 typeId: 1,
                                 aosAnimation: "",
                              },
                              {
                                 value: "описание",
                                 orderIndex: 1,
                                 typeId: 2,
                                 aosAnimation: "",
                              },
                              {
                                 value: "https://i.ibb.co/qWP5dgs/22.jpg",
                                 orderIndex: 2,
                                 typeId: 3,
                                 aosAnimation: "",
                              },
                           ],
                        })
                     );

                  }}
               >
                  Создать блок
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
