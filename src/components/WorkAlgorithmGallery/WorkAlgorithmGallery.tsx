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
   const { wrapper, btn, galleryImg, photoGallery, customLightbox , activeImg } = styles;
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
            {images.map((img: any) => (
               <img
                  onClick={() => {
                     if (isAuthSettings.isAdmin) {
                        setIsOpen(true);
                        setElSettings(img.el);
                     }
                     setIndex(img.index);
                  }}
                  onMouseEnter={(e) => {
                     if (isHoverOnImages) {
                     e.currentTarget.classList.add(activeImg)
                     }
                  }}
                  onMouseLeave={(e) => {
                     if (isHoverOnImages) {
                     e.currentTarget.classList.remove(activeImg)
                     }
                  }}
                  src={img.src}
                  className={galleryImg}
               />
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
