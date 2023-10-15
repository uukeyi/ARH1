import React, { useEffect, useState } from "react";
import styles from "./ServicePage.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxTookitHooks";
import { getLandingPageBlock } from "../../store/actions/landingPageActions";
import {
   ILandingBlockElement,
   landingElPrototype,
} from "../../interfaces/landingPageResponse";
import { Link, useLocation } from "react-router-dom";
import ServiceDetailsSection from "../../components/ServiceDetailsSection/ServiceDetailsSection";
import AdminModal from "../../components/AdminModal/AdminModal";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "@mui/material";
import WorkAlgorithmGallery from "../../components/WorkAlgorithmGallery/WorkAlgorithmGallery";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
const ServicePage: React.FC = () => {
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
   const [adminModal, setAdminModal] = useState(false);
   const { isAuthSettings } = useAuth();
   const { setIsOpen, setElSettings } = useAdminModalEdit();

   const { wrapper, title, subtitle, listItem, video, gallery } = styles;
   const dispatch = useAppDispatch();
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
   const sliderImages = serviceBlock.elements.filter((el) => {
      return el.aosAnimation === "galleryImg";
   });
   const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];
   const photosGallery = sliderImages.map((photo, index) => {
      return {
         src: photo.value,
         key: `${index}`,
         width: 185,
         height: 133,
         index,
         images: breakpoints.map((breakpoint) => {
            const breakpointHeight = Math.round((133 / 185) * breakpoint);
            return {
               src: photo.value,
               width: breakpoint,
               height: breakpointHeight,
            };
         }),
         el: photo,
      };
   });
   const slidesGallery = photosGallery.map(
      ({ src, key, width, height, images }) => ({
         src,
         key,
         width,
         height,
         srcSet: images?.map((image) => ({
            src: image.src,
            width: 1000,
            height: 1000,
         })),
      })
   );
   const mainContent = serviceBlock.elements.slice(2).filter((el): any => {
      return el.aosAnimation !== "galleryImg";
   });
   return (
      <section>
         {/* <AdminModal
            open={adminModal}
            setOpen={setAdminModal}
            pageBlock="facadeDesign"
         /> */}
         <ServiceDetailsSection />
         <div className="container">
            <div className={wrapper}>
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
               <Link to={"/"} className={subtitle}>
                  Главная /{" "}
                
                     <Link to="/" style={{ color: "rgb(235 51 73)" }}>
                        Проект фасада дома
                     </Link>
             
               </Link>
               {mainContent?.map(
                  (element: ILandingBlockElement, index): any => {
                     if (element.typeId === 1) {
                        return (
                           <h3
                              onClick={() => {
                                 if (isAuthSettings.isAdmin) {
                                    setIsOpen(true);
                                    setElSettings(element);
                                 }
                              }}
                              className={title}
                              key={index}
                           >
                              {element.value}
                           </h3>
                        );
                     } else if (element.typeId === 2) {
                        //   {
                        //     element.aosAnimation === 'youtubeLink' ? (
                        //       <iframe
                        //         key={index}
                        //         className={video}
                        //         src={element.value}
                        //         frameBorder="0"
                        //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        //         allowFullScreen
                        //         title="Embedded youtube"
                        //       />
                        //     ) : (
                        return (
                           <p
                              key={index}
                              className={
                                 element.aosAnimation === "liElement"
                                    ? listItem
                                    : ""
                              }
                              onClick={() => {
                                 if (isAuthSettings.isAdmin) {
                                    setIsOpen(true);
                                    setElSettings(element);
                                 }
                              }}
                           >
                              {element.value}
                           </p>
                        );
                        //   }
                     } else if (element.typeId === 3) {
                        return (
                           <img
                              onClick={() => {
                                 if (isAuthSettings.isAdmin) {
                                    setIsOpen(true);
                                    setElSettings(element);
                                 }
                              }}
                              key={index}
                              src={element.value}
                              alt="img"
                           />
                        );
                     }
                  }
               )}
               <WorkAlgorithmGallery
                  title={landingElPrototype}
                  images={photosGallery}
                  slidesData={slidesGallery}
                  customClass={gallery}
                  showBtn={false}
                  isHoverOnImages={true}
               />
            </div>
         </div>
      </section>
   );
};

export default ServicePage;
// {element.aosAnimation == 'youtubeLink' ? <iframe
//                 className={video}
//                 src="https://www.youtube.com/embed/vxB5YMJQUos?start=0&showinfo=1&controls=1&autoplay=0"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title="Embedded youtube"
//              /> : (<p className={element.aosAnimation == 'liElement' ? listItem : ''}>
//              {element.value}
//            </p>)}
