import React from 'react';
// import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import styles from './WorkAlgorithmGallery.module.css';

import CloseIcon from '../../assets/icons/close-white.svg';
import LeftIcon from '../../assets/icons/chevron-white-left.png';
import RightIcon from '../../assets/icons/chevron-white-right.png';

interface IGallery {
  title: string;
  images: any;
  slidesData: any;
  customClass?: string;
}
const WorkAlgorithmGallery: React.FC<IGallery> = ({ title, images, slidesData, customClass }) => {
  const { wrapper, btn, galleryImg, photoGallery, customLightbox } = styles;
  const [index, setIndex] = React.useState(-1);

  return (
    <div className={`${wrapper} ${customClass}`}>
      <p>{title}</p>
      <div className={photoGallery}>
        {images.map((img: any) => (
          <img onClick={() => setIndex(img.index)} src={img.src} className={galleryImg} />
        ))}
      </div>
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
      <button className={btn} onClick={() => setIndex(0)}>
        СМОТРЕТЬ ПРИМЕР
      </button>
    </div>
  );
};

export default WorkAlgorithmGallery;
