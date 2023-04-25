import React from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import styles from './WorkAlgorithmGallery.module.css';
import photos from '../../assets/workAlgorithmData/imgs';
import slides from '../../assets/workAlgorithmData/slides';
interface IGallery {
  title: string;
}
const WorkAlgorithmGallery: React.FC<IGallery> = ({ title }) => {
  const { wrapper, btn } = styles;
  const [index, setIndex] = React.useState(-1);

  return (
    <div className={wrapper}>
      <p>{title}</p>
      <PhotoAlbum
        layout="columns"
        photos={photos}
        onClick={({ index }) => setIndex(index)}
        columns={7}

        // rowConstraints={{ minPhotos: 6, maxPhotos: 8 }}
      />
      <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={slides} />
      {/* <img src="https://ibb.co/k14M6Tq" alt="a" /> */}
      <button className={btn}>СМОТРЕТЬ ПРИМЕР</button>
    </div>
  );
};

export default WorkAlgorithmGallery;
