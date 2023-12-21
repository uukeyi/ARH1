import React, { useEffect, useState } from "react";
import styles from "./ArticlePage.module.css";
import KnowledgeBaseDetailsSection from "../../components/KnowledgeBaseDetailsSection/KnowledgeBaseDetailsSection";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxTookitHooks";
import {
   getLandingPageBlock,
   getLandingPageBlocks,
} from "../../store/actions/landingPageActions";
import { ILandingBlockElement } from "../../interfaces/landingPageResponse";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import AdminModalEdit from "../../components/AdminModalEdit";
import AdminModal from "../../components/AdminModal/AdminModal";
import { Button } from "@mui/material";
const ArticlePage: React.FC = () => {
   const [errorLandingBlocks, setErrorLandingBlocks] = useState(false);
   const location = useLocation();
   const currentLocation = location.pathname;
   const currentId = currentLocation.match(/\d+/g);
   useEffect(() => {
      dispatch(
         getLandingPageBlock({
            id: currentId,
            showInvisible: true,
            setError: setErrorLandingBlocks,
         })
      );
   }, []);
   useEffect(() => {
      if (errorLandingBlocks) {
         alert("Не получилось получить данные");
      }
   }, [errorLandingBlocks]);
   const { wrapper, title, pinkList } = styles;
   const dispatch = useAppDispatch();
   const { isAuthSettings } = useAuth();
   const { setElSettings, setIsOpen } = useAdminModalEdit();
   const [isOpen, setOpen] = useState(false);
   const [order, setElOrder] = useState<string | number>("");
   const articlesBlock = useAppSelector(
      (state) => state.landingPageSlice.singleBlock
   );
   useEffect(() => {
      dispatch(
         getLandingPageBlocks({
            showInvisible: true,
            setError: setErrorLandingBlocks,
         })
      );
   }, []);
   return (
      <section>
         <KnowledgeBaseDetailsSection pageTitle={articlesBlock.elements[0]} />
         <AdminModalEdit />
         <AdminModal
            open={isOpen}
            setOpen={setOpen}
            pageBlock={articlesBlock}
            orderEl={order}
         />

         <div className="container">
            <div
               onClick={(e: any) => {
                  if (isAuthSettings.isAdmin) {
                     setElSettings(JSON.parse(e.target.dataset.el));
                     setIsOpen(true);
                  }
               }}
               className={wrapper}
            >
               {isAuthSettings.isAdmin ? (
                  <Button
                     variant="outlined"
                     sx={{
                        display: "block",
                        margin: "20px auto",
                     }}
                     onClick={() => {
                        setOpen(true);
                     }}
                  >
                     Добавить элемент
                  </Button>
               ) : (
                  <></>
               )}
               {articlesBlock?.elements.map(
                  (element: ILandingBlockElement): any => {
                     if (element.typeId === 1) {
                        return (
                           <>
                              <h3
                                 data-el={JSON.stringify(element)}
                                 className={title}
                              >
                                 {element.value}
                              </h3>

                              {isAuthSettings.isAdmin ? (
                                 <Button
                                    variant="outlined"
                                    sx={{
                                       display: "block",
                                       opacity: "0",
                                       margin: "20px auto",
                                       width: "100%",
                                    }}
                                    onClick={() => {
                                       setOpen(true);
                                       setElOrder(element.orderIndex);
                                    }}
                                 ></Button>
                              ) : null}
                           </>
                        );
                     } else if (
                        element.aosAnimation === "blackLiElement" &&
                        element.typeId === 2
                     ) {
                        return (
                           <>
                              <p
                                 style={{
                                    fontWeight: "700",
                                    fontFamily: "Roboto",
                                    fontSize: "20px",
                                    marginTop: "30px",
                                 }}
                                 
                              >
                                 {element.value}
                              </p>

                              {isAuthSettings.isAdmin ? (
                                 <Button
                                    variant="outlined"
                                    sx={{
                                       display: "block",
                                       opacity: "0",
                                       margin: "20px auto",
                                       width: "100%",
                                    }}
                                    onClick={() => {
                                       setOpen(true);
                                       setElOrder(element.orderIndex);
                                    }}
                                 ></Button>
                              ) : null}
                           </>
                        );
                     } else if (
                        element.aosAnimation === "pinkLiElement" &&
                        element.typeId === 2
                     ) {
                        return (
                           <>
                              <div className={pinkList}>
                                 <p>{element.value}</p>
                              </div>
                              {isAuthSettings.isAdmin ? (
                                 <Button
                                    variant="outlined"
                                    sx={{
                                       display: "block",
                                       opacity: "0",
                                       margin: "20px auto",
                                       width: "100%",
                                    }}
                                    onClick={() => {
                                       setOpen(true);
                                       setElOrder(element.orderIndex);
                                    }}
                                 ></Button>
                              ) : null}
                           </>
                        );
                     } else if (element.typeId === 2) {
                        return (
                           <>
                              <p
                                 data-el={JSON.stringify(element)}
                                 style={{ marginTop: "15px" }}
                              >
                                 {element.value}
                              </p>

                              {isAuthSettings.isAdmin ? (
                                 <Button
                                    variant="outlined"
                                    sx={{
                                       display: "block",
                                       opacity: "0",
                                       margin: "20px auto",
                                       width: "100%",
                                    }}
                                    onClick={() => {
                                       setOpen(true);
                                       setElOrder(element.orderIndex);
                                    }}
                                 ></Button>
                              ) : null}
                           </>
                        );
                     } else if (element.typeId === 3) {
                        return (
                           <>
                              <img
                                 data-el={JSON.stringify(element)}
                                 src={element.value}
                                 alt="img"
                                 style={{ marginTop: "25px" }}
                              />
                              {isAuthSettings.isAdmin ? (
                                 <Button
                                    variant="outlined"
                                    sx={{
                                       display: "block",
                                       opacity: "0",
                                       margin: "20px auto",
                                       width: "100%",
                                    }}
                                    onClick={() => {
                                       setOpen(true);
                                       setElOrder(element.orderIndex);
                                    }}
                                 ></Button>
                              ) : null}
                           </>
                        );
                     }
                  }
               )}
            </div>
         </div>
      </section>
   );
};

export default ArticlePage;
