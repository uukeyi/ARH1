import { photos1, photos2, photos3 } from './imgs';

export const slides1 = photos1.map(({ src, key, width, height, images }) => ({
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

export const slides2 = photos2.map(({ src, key, width, height, images }) => ({
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

export const slides3 = photos3.map(({ src, key, width, height, images }) => ({
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
export const advancedSlides1 = [
  { ...slides1[0], title: 'arhi info', description: 'Information' },
  { ...slides1[1], title: 'arhi info', description: 'Information' },
  { ...slides1[2], title: 'arhi info', description: 'Information' },
  { ...slides1[3], title: 'arhi info', description: 'Information' },
  { ...slides1[4], title: 'arhi info', description: 'Information' },
  { ...slides1[5], title: 'arhi info', description: 'Information' },
  { ...slides1[6], title: 'arhi info', description: 'Information' },
  { ...slides1[7], title: 'arhi info', description: 'Information' },
  { ...slides1[8], title: 'arhi info', description: 'Information' },
  { ...slides1[9], title: 'arhi info', description: 'Information' },
  { ...slides1[10], title: 'arhi info', description: 'Information' },
  { ...slides1[11], title: 'arhi info', description: 'Information' },
  { ...slides1[12], title: 'arhi info', description: 'Information' },
  { ...slides1[13], title: 'arhi info', description: 'Information' },
];

export const advancedSlides2 = [
  { ...slides2[0], title: 'arhi info', description: 'Information' },
  { ...slides2[1], title: 'arhi info', description: 'Information' },
  { ...slides2[2], title: 'arhi info', description: 'Information' },
  { ...slides2[3], title: 'arhi info', description: 'Information' },
  { ...slides2[4], title: 'arhi info', description: 'Information' },
  { ...slides2[5], title: 'arhi info', description: 'Information' },
  { ...slides2[6], title: 'arhi info', description: 'Information' },
  { ...slides2[7], title: 'arhi info', description: 'Information' },
  { ...slides2[8], title: 'arhi info', description: 'Information' },
  { ...slides2[9], title: 'arhi info', description: 'Information' },
  { ...slides2[10], title: 'arhi info', description: 'Information' },
  { ...slides2[11], title: 'arhi info', description: 'Information' },
  { ...slides2[12], title: 'arhi info', description: 'Information' },
  { ...slides2[13], title: 'arhi info', description: 'Information' },
];

export const advancedSlides3 = [
  { ...slides3[0], title: 'arhi info', description: 'Information' },
  { ...slides3[1], title: 'arhi info', description: 'Information' },
  { ...slides3[2], title: 'arhi info', description: 'Information' },
  { ...slides3[3], title: 'arhi info', description: 'Information' },
  { ...slides3[4], title: 'arhi info', description: 'Information' },
  { ...slides3[5], title: 'arhi info', description: 'Information' },
  { ...slides3[6], title: 'arhi info', description: 'Information' },
  { ...slides3[7], title: 'arhi info', description: 'Information' },
  { ...slides3[8], title: 'arhi info', description: 'Information' },
  { ...slides3[9], title: 'arhi info', description: 'Information' },
  { ...slides3[10], title: 'arhi info', description: 'Information' },
  { ...slides3[11], title: 'arhi info', description: 'Information' },
  { ...slides3[12], title: 'arhi info', description: 'Information' },
  { ...slides3[13], title: 'arhi info', description: 'Information' },
];

export default slides1;
