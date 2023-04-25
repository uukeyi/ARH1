const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const unsplashLink = (id: string, width: number, height: number) =>
  `https://i.postimg.cc/${id}.webp`;

const unsplashPhotos = [
  {
    id: 'TwC47p7d/1-1',
    width: 185,
    height: 133,
  },
  {
    id: 'xq0NHWZ6/1-2',
    width: 185,
    height: 133,
  },
  {
    id: 'p5X9HFjw/1-3',
    width: 185,
    height: 133,
  },
  {
    id: 'jCZwhM0t/1-4',
    width: 185,
    height: 133,
  },
  {
    id: '2Vt1s3St/1-5',
    width: 185,
    height: 133,
  },
  {
    id: 'XpqZ194F/1-6',
    width: 185,
    height: 133,
  },
  {
    id: 'HcTnwy6r/1-7',
    width: 185,
    height: 133,
  },
  {
    id: '7GX6mZRm/1-8',
    width: 185,
    height: 133,
  },
  {
    id: 'sBY1Gc4F/1-9',
    width: 185,
    height: 133,
  },
  {
    id: 'tsVspy14/1-10',
    width: 185,
    height: 133,
  },
  {
    id: 'nsbCL57Y/1-11',
    width: 185,
    height: 133,
  },
  {
    id: 'bSJvMjc8/1-12',
    width: 185,
    height: 133,
  },
  {
    id: 'grSjhr80/1-13',
    width: 185,
    height: 133,
  },
  {
    id: 'RqVqqw38/1-14',
    width: 185,
    height: 133,
  },
];

const photos = unsplashPhotos.map((photo, index) => {
  const width = photo.width;
  const height = photo.height;
  return {
    src: unsplashLink(photo.id, width, height),
    key: `${index}`,
    width,
    height,
    images: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: unsplashLink(photo.id, breakpoint, breakpointHeight),
        width: breakpoint,
        height: breakpointHeight,
      };
    }),
  };
});

export default photos;
