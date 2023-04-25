import photos from './imgs';

export const slides = photos.map(({ src, key, width, height, images }) => ({
  src,
  key,
  width,
  height,
  srcSet: images?.map((image) => ({
    src: image.src,
    width: image.width / 4,
    height: image.height / 4,
  })),
}));

export const advancedSlides = [
  { ...slides[0], title: 'Puppy in sunglasses', description: 'Mollie Sivaram' },
  {
    ...slides[1],
    title: 'Miami Beach',
    description: 'Clark Van Der Beken\n\nSouth Beach, Miami Beach, Florida, United States',
  },
  {
    ...slides[2],
    title: 'Flamingo',
    description: 'Vicko Mozara\n\nVeliki zali, Dubravica, Croatia',
  },
  {
    ...slides[3],
    title: 'Starfish on a sand beach',
    description: 'Pedro Lastra\n\nKey West, Florida, United States',
  },
  {
    ...slides[6],
    title: 'The last night of a two week stay on the North Shore of Oahu, Hawaii',
    description: 'Sean Oulashin\n\nNorth Shore, Waialua, Hawaii, United States',
  },
  {
    ...slides[7],
    title: 'Sunset on Kauai',
    description: 'Cristofer Maximilian\n\nKauai, Hawaii, United States',
  },
  {
    ...slides[9],
    title: 'RayBan sunglasses',
    description: 'Ethan Robertson\n\nSanta Monica, California, United States',
  },
  {
    ...slides[11],
    title: 'Find the time',
    description: 'Alex Perez\n\nNaples, Florida, United States',
  },
];

export default slides;
