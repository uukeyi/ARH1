import React from "react";
import styles from "./WorkAlgorithmSection.module.css";
import "yet-another-react-lightbox/styles.css";
import WorkAlgorithmGallery from "../WorkAlgorithmGallery/WorkAlgorithmGallery";
import { ILandingBlock, ILandingBlockElement } from "../../interfaces/landingPageResponse";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { Button } from "@mui/material";
import OrangeButton from "../OrangeButton/OrangeButton";
interface WorkAlgorithmSectionProps {
   titleText: ILandingBlockElement;
   firstBlockTitle: ILandingBlockElement;
   subtitleText: ILandingBlockElement;
   secondBlockTitle: ILandingBlockElement;
   firstBlockElements: ILandingBlockElement[];
   secondBlockElements: ILandingBlockElement[];
   thirdBlockElements: ILandingBlockElement[];
   thirdBlockTitle: ILandingBlockElement;
   block : ILandingBlock
}

const WorkAlgorithmSection: React.FC<WorkAlgorithmSectionProps> = ({
   firstBlockElements,
   titleText,
   subtitleText,
   secondBlockElements,
   secondBlockTitle,
   firstBlockTitle,
   thirdBlockElements,
   block,
   thirdBlockTitle,
}) => {
   const {
      workAlgorithmSection,
      title,
      subtitle,
      wrapper,
      titleWrapper,
      gallery,
   } = styles;
   const { isAuthSettings } = useAuth();
   const { setIsOpen, setElSettings , setBlockSettings , setIsOpenBlockEdit } = useAdminModalEdit();
   const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

   const photos1 = firstBlockElements.map((photo, index) => {
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
   const photos2 = secondBlockElements.map((photo, index) => {
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
   const photos3 = thirdBlockElements.map((photo, index) => {
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
   const slides1 = photos1.map(({ src, key, width, height, images }) => ({
      src,
      key,
      width,
      height,
      srcSet: images?.map((image) => ({
         src: image.src,
         width: 1000,
         height: 1000,
      })),
   }));
   const slides2 = photos2.map(({ src, key, width, height, images }) => ({
      src,
      key,
      width,
      height,
      srcSet: images?.map((image) => ({
         src: image.src,
         width: 1000,
         height: 1000,
      })),
   }));
   const slides3 = photos3.map(({ src, key, width, height, images }) => ({
      src,
      key,
      width,
      height,
      srcSet: images?.map((image) => ({
         src: image.src,
         width: 1000,
         height: 1000,
      })),
   }));
   return (
      <section id={workAlgorithmSection}>
          {isAuthSettings.isAdmin ? (
            <Button
               onClick={() => {
                  if (isAuthSettings.isAdmin) {
                     setIsOpenBlockEdit(true);
                     setBlockSettings(block);
                  }
               }}
               variant="outlined"
            >
               Изменить блок
            </Button>
         ) : null}
         <div data-aos="zoom-in" data-aos-duration="1000" className="container">
            <div className={titleWrapper}>
               <p
                  onClick={() => {
                     if (isAuthSettings.isAdmin) {
                        setIsOpen(true);
                        setElSettings(titleText);
                     }
                  }}
                  className={title}
               >
                  {titleText.value}
               </p>
               <p
                  onClick={() => {
                     if (isAuthSettings.isAdmin) {
                        setIsOpen(true);
                        setElSettings(subtitleText);
                     }
                  }}
                  className={subtitle}
               >
                  {subtitleText.value}
               </p>
            </div>
            <div className={wrapper}>
               <WorkAlgorithmGallery
                  title={firstBlockTitle}
                  images={photos1}
                  slidesData={slides1}
                  customClass={gallery}
                  showBtn = {true}
               />
               <WorkAlgorithmGallery
                  title={secondBlockTitle}
                  images={photos2}
                  slidesData={slides2}
                  customClass={gallery}
                  showBtn = {true}

               />
               <WorkAlgorithmGallery
                  title={thirdBlockTitle}
                  images={photos3}
                  slidesData={slides3}
                  customClass={gallery}
                  showBtn = {true}

               />
            </div>
         </div>
      </section>
   );
};

export default WorkAlgorithmSection;
