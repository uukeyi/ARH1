import React from "react";
// import PhotoAlbum from 'react-photo-album';
import Lightbox from "yet-another-react-lightbox";
import styles from "./WorkAlgorithmGallery.module.css";

import CloseIcon from "../../assets/icons/close-white.svg";
import LeftIcon from "../../assets/icons/chevron-white-left.png";
import RightIcon from "../../assets/icons/chevron-white-right.png";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { ILandingBlockElement } from "../../interfaces/landingPageResponse";
type imageType = {
   src: string;
   width: number;
   height: number;
};
type fullImageType = {
   src: string;
   key: string;
   width: number;
   height: number;
   index: string | number;
   images: imageType[];
   el: ILandingBlockElement;
};
type slideType = {
   src: string;
   key: string | number;
   width: number;
   height: number;
   srcSet: imageType[];
};
interface IGallery {
   title: ILandingBlockElement;
   images: fullImageType[];
   slidesData: slideType[];
   customClass?: string;
   showBtn?: boolean;
   isHoverOnImages?: boolean;
}
const WorkAlgorithmGallery: React.FC<IGallery> = ({
   title,
   images,
   slidesData,
   customClass,
   showBtn,
   isHoverOnImages,
}) => {
   const {
      wrapper,
      btn,
      galleryImg,
      photoGallery,
      customLightbox,
      activeImg,
      imgBg,
      svgImage
   } = styles;
   const [index, setIndex] = React.useState(-1);
   const { isAuthSettings } = useAuth();
   const { setIsOpen, setElSettings } = useAdminModalEdit();

   return (
      <div className={`${wrapper} ${customClass}`}>
         <p
            onClick={() => {
               if (isAuthSettings.isAdmin) {
                  setIsOpen(true);
                  setElSettings(title);
               }
            }}
         >
            {title.value}
         </p>
         <div className={photoGallery}>
            {images.slice(0 , isAuthSettings.isAdmin ? images.length : 14).map((img: any) => (
               <>
                  <div
                    onClick={() => {
                     if (isAuthSettings.isAdmin) {
                        setIsOpen(true);
                        setElSettings(img.el);
                     }
                     setIndex(img.index);
                  }}
                     onMouseEnter={(e) => {
                        if (isHoverOnImages) {
                           e.currentTarget.classList.add(activeImg);
                        }
                     }}
                     onMouseLeave={(e) => {
                        if (isHoverOnImages) {
                           e.currentTarget.classList.remove(activeImg);
                        }
                     }}
                  >
                     <img
                      
                        src={img.src}
                        className={galleryImg}
                     />
                     <div className={imgBg}></div>
                     <svg
                        style={{color : 'white'}}
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className={svgImage}
                     >
                        {" "}
                        <path
                           d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                           fill="white"
                        ></path>{" "}
                        <path
                           d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                           fill="white"
                        ></path>{" "}
                     </svg>
                    
                  </div>
               </>
            ))}
         </div>
         {isAuthSettings.isAdmin ? null : (
            <Lightbox
               className={customLightbox}
               open={index >= 0}
               index={index}
               close={() => setIndex(-1)}
               slides={slidesData}
               render={{
                  iconNext: () => <img src={RightIcon} alt="arrow-next" />,
                  iconPrev: () => <img src={LeftIcon} alt="arrow-prev" />,
                  iconClose: () => <img src={CloseIcon} alt="close" />,
               }}
            />
         )}

         {showBtn ? (
            <button className={btn} onClick={() => setIndex(0)}>
               СМОТРЕТЬ ПРИМЕР
            </button>
         ) : null}
      </div>
   );
};

export default WorkAlgorithmGallery;
