import React, { useEffect, useState } from "react";
import SingleProjectPageImgCover from "../../components/SingleProjectPageSection/SingleProjectPageSection";
import { Link, useLocation } from "react-router-dom";
import styles from "./ProjectPage.module.css";
import { ILandingBlockElement } from "../../interfaces/landingPageResponse";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxTookitHooks";
import {
   getLandingPageBlock,
   getLandingPageBlocks,
} from "../../store/actions/landingPageActions";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import AdminModalEdit from "../../components/AdminModalEdit";
import { Button } from "@mui/material";
import AdminModal from "../../components/AdminModal/AdminModal";
const ProjectPage: React.FC = () => {
   const { linkContainer, video } = styles;
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
   useEffect(() => {
      dispatch(
         getLandingPageBlocks({
            showInvisible: true,
            setError: setErrorLandingBlocks,
         })
      );
   }, []);
   const dispatch = useAppDispatch();
   const projectBlock = useAppSelector(
      (state) => state.landingPageSlice.singleBlock
   );
   const leftSideElements = projectBlock.elements.slice(7);
   const { isAuthSettings } = useAuth();
   const { setElSettings, setIsOpen } = useAdminModalEdit();
   const [adminModal, setAdminModal] = useState(false);

   if (projectBlock) {
      return (
         <div style={{ height: "100%" }}>
            <AdminModalEdit />
            <AdminModal
               pageBlock={projectBlock}
               open={adminModal}
               setOpen={setAdminModal}
            />
            <SingleProjectPageImgCover
               titleText={projectBlock.elements[1]}
               city={projectBlock.elements[2]}
               houseSquare={projectBlock.elements[4]}
               facadeSquare={projectBlock.elements[6]}
               floors={projectBlock.elements[5]}
               date={projectBlock.elements[3]}
               reconstructionPage={false}
               imgSrc={projectBlock.elements[0]}
            >
               <div
                  onClick={(e: any) => {
                     if (isAuthSettings.isAdmin) {
                        setElSettings(JSON.parse(e.target.dataset.el));
                        setIsOpen(true);
                     }
                  }}
                  className="single-project-page-content-container"
               >
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
                        Добавить элемент
                     </Button>
                  ) : (
                     <></>
                  )}
                  <p className={linkContainer}>
                     <Link to={"/"}> Главная </Link> /
                     <Link to={"/ourProjects"}> &nbsp; Наши работы</Link> /
                     <span
                        data-el={JSON.stringify(projectBlock.elements[1])}
                        style={{ color: "rgb(235 51 73)" }}
                     >
                        {" "}
                        &nbsp;{projectBlock.elements[1]?.value}
                     </span>
                  </p>
                  <p
                     style={{ marginTop: "30px" }}
                     className="single-project-page-title"
                     data-el={JSON.stringify(projectBlock.elements[1])}
                  >
                     {projectBlock.elements[1]?.value}
                  </p>
                  <p
                     style={{ marginTop: "30px" }}
                     className="single-project-page-description"
                     data-el={JSON.stringify(projectBlock.elements[2])}
                  >
                     {projectBlock.elements[2]?.value}
                     <br /> Площадь дома:
                     <strong data-el={JSON.stringify(projectBlock.elements[4])}>
                        {projectBlock.elements[4]?.value}
                     </strong>
                     <br />
                     Площадь фасадов:{" "}
                     <strong data-el={JSON.stringify(projectBlock.elements[6])}>
                        {projectBlock.elements[6]?.value}
                     </strong>
                     <br />
                     <br />
                  </p>

                  {leftSideElements?.map(
                     (element: ILandingBlockElement): any => {
                        if (element.typeId === 1) {
                           return (
                              <p
                                 data-el={JSON.stringify(element)}
                                 style={{ marginTop: "30px" }}
                                 className="single-project-page-title"
                              >
                                 {element.value}
                              </p>
                           );
                        } else if (element.typeId === 2) {
                           return (
                              <p
                                 data-el={JSON.stringify(element)}
                                 style={{ marginTop: "30px" }}
                                 className="single-project-page-description"
                              >
                                 {element.value}
                              </p>
                           );
                        } else if (element.typeId === 3) {
                           return (
                              <img
                                 data-el={JSON.stringify(element)}
                                 className="single-project-page-img"
                                 style={{ marginTop: "20px" }}
                                 src={element.value}
                                 alt="Не удалось отобразить картинку"
                              />
                           );
                        }
                     }
                  )}
               </div>
            </SingleProjectPageImgCover>
         </div>
      );
   } else {
      return <LoadingSpinner></LoadingSpinner>;
   }
};

export default ProjectPage;
