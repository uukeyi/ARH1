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
interface IPhoto {
   src: string;
   key: string;
   width: number;
   height: number;
   index: any;
   images: any;
   el: ILandingBlockElement;
}
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
   const [order, setElOrder] = useState<string | number>("");
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
   const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];
   const sliderImages: ILandingBlockElement[] = [];
   console.log(serviceBlock.elements);
   return (
      <section>
         <ServiceDetailsSection />
         <AdminModal
            pageBlock={serviceBlock}
            open={adminModal}
            setOpen={setAdminModal}
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
               <Link to={"/"} className={subtitle}>
                  Главная /{" "}
                  <Link to="/" style={{ color: "rgb(235 51 73)" }}>
                     Проект фасада дома
                  </Link>
               </Link>
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

               {serviceBlock.elements
                  .slice(2)
                  .map((element: ILandingBlockElement, index): any => {
                     if (element.typeId === 1) {
                        return (
                           <>
                              <h3
                                 data-el={JSON.stringify(element)}
                                 className={title}
                                 key={index}
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
                                       setAdminModal(true);
                                       setElOrder(element.orderIndex);
                                    }}
                                 ></Button>
                              ) : null}
                           </>
                        );
                     } else if (
                        element.typeId === 2 &&
                        element.aosAnimation === "youtubeLink"
                     ) {
                        return (
                           <>
                              <button
                                 style={{
                                    opacity: isAuthSettings.isAdmin ? "1" : "0",
                                    pointerEvents: isAuthSettings.isAdmin
                                       ? "all"
                                       : "none",
                                 }}
                                 onClick={() => {
                                    if (isAuthSettings.isAdmin) {
                                       setElSettings(element);
                                       setIsOpen(true);
                                    }
                                 }}
                              >
                                 изменить видео
                              </button>
                              <iframe
                                 key={index}
                                 className={video}
                                 src={element.value}
                                 frameBorder="0"
                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                 allowFullScreen
                                 title="Embedded youtube"
                              />
                           </>
                        );
                     } else if (element.typeId === 2) {
                        return (
                           <>
                              <p
                                 key={index}
                                 className={
                                    element.aosAnimation === "liElement"
                                       ? listItem
                                       : ""
                                 }
                                 data-el={JSON.stringify(element)}
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
                                       setAdminModal(true);
                                       setElOrder(element.orderIndex);
                                    }}
                                 ></Button>
                              ) : null}
                           </>
                        );
                        //   }
                     } else if (
                        element.typeId === 3 &&
                        element.aosAnimation === "galleryImg"
                     ) {
                        if (sliderImages.length !== 22) {
                           sliderImages.push(element);
                           console.log("asdasd");
                        } else {
                           console.log(sliderImages);
                           let photosGallery: IPhoto[] =
                              sliderImages.length === 22
                                 ? sliderImages.map((photo, index) => {
                                      return {
                                         src: photo.value,
                                         key: `${index}`,
                                         width: 185,
                                         height: 133,
                                         index,
                                         images: breakpoints.map(
                                            (breakpoint) => {
                                               const breakpointHeight =
                                                  Math.round(
                                                     (133 / 185) * breakpoint
                                                  );
                                               return {
                                                  src: photo.value,
                                                  width: breakpoint,
                                                  height: breakpointHeight,
                                               };
                                            }
                                         ),
                                         el: photo,
                                      };
                                   })
                                 : [];
                           let slidesGallery: any =
                              sliderImages.length === 22
                                 ? photosGallery.map(
                                      ({
                                         src,
                                         key,
                                         width,
                                         height,
                                         images,
                                      }) => ({
                                         src,
                                         key,
                                         width,
                                         height,
                                         srcSet: images?.map((image: any) => ({
                                            src: image.src,
                                            width: 1000,
                                            height: 1000,
                                         })),
                                      })
                                   )
                                 : [];
                           return (
                              <>
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
                                          setAdminModal(true);
                                          setElOrder(element.orderIndex);
                                       }}
                                    ></Button>
                                 ) : null}
                                 <WorkAlgorithmGallery
                                    title={landingElPrototype}
                                    images={photosGallery}
                                    slidesData={slidesGallery}
                                    customClass={gallery}
                                    showBtn={false}
                                    isHoverOnImages={true}
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
                                          setAdminModal(true);
                                          setElOrder(element.orderIndex);
                                       }}
                                    ></Button>
                                 ) : null}
                              </>
                           );
                        }
                     } else if (element.typeId === 3) {
                        return (
                           <>
                              <img
                                 data-el={JSON.stringify(element)}
                                 key={index}
                                 src={element.value}
                                 alt="img"
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
                                       setAdminModal(true);
                                       setElOrder(element.orderIndex);
                                    }}
                                 ></Button>
                              ) : null}
                           </>
                        );
                     }
                  })}
            </div>
         </div>
      </section>
   );
};

export default ServicePage;
