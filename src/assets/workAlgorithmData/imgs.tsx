const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const unsplashLink = (id: string, width: number, height: number) =>
  `https://i.postimg.cc/${id}.webp`;

const unsplashPhotos1 = [
  {
    id: 'C1MxqpNS/1-1',
    width: 185,
    height: 133,
    index: 0,
  },
  {
    id: 'NFSsS9wj/1-2',
    width: 185,
    height: 133,
    index: 1,
  },
  {
    id: 'cCr1F72z/1-3',
    width: 185,
    height: 133,
    index: 2,
  },
  {
    id: 'VL0LMRjr/1-4',
    width: 185,
    height: 133,
    index: 3,
  },
  {
    id: 's2mVy0R8/1-5',
    width: 185,
    height: 133,
    index: 4,
  },
  {
    id: 'rpM8B27x/1-6',
    width: 185,
    height: 133,
    index: 5,
  },
  {
    id: 'fytZcz0n/1-7',
    width: 185,
    height: 133,
    index: 6,
  },
  {
    id: 'vTJyXJW1/1-8',
    width: 185,
    height: 133,
    index: 7,
  },
  {
    id: 'V6NzNBfN/1-9',
    width: 185,
    height: 133,
    index: 8,
  },
  {
    id: 'xCFnNJ83/1-10',
    width: 185,
    height: 133,
    index: 9,
  },
  {
    id: 'WpCs2kQ2/1-11',
    width: 185,
    height: 133,
    index: 10,
  },
  {
    id: 'htbnb3hj/1-12',
    width: 185,
    height: 133,
    index: 11,
  },
  {
    id: 'Qdrs7r8w/1-13',
    width: 185,
    height: 133,
    index: 12,
  },
  {
    id: 'MKBqXGS1/1-14',
    width: 185,
    height: 133,
    index: 13,
  },
];
const unsplashPhotos2 = [
  {
    id: 'x1mtydLn/2-1',
    width: 185,
    height: 133,
    index: 0,
  },
  {
    id: '7ZHWy1M2/2-2',
    width: 185,
    height: 133,
    index: 1,
  },
  {
    id: '8zXy2tdn/2-3',
    width: 185,
    height: 133,
    index: 2,
  },
  {
    id: 'SKXZkCDQ/2-4',
    width: 185,
    height: 133,
    index: 3,
  },
  {
    id: 's2pTMsdb/2-5',
    width: 185,
    height: 133,
    index: 4,
  },
  {
    id: 'C17J47KN/2-6',
    width: 185,
    height: 133,
    index: 5,
  },
  {
    id: '5yk3htLQ/2-7',
    width: 185,
    height: 133,
    index: 6,
  },
  {
    id: 'Wp9XF5Cp/2-8',
    width: 185,
    height: 133,
    index: 7,
  },
  {
    id: 'Qd7bzhtV/2-9',
    width: 185,
    height: 133,
    index: 8,
  },
  {
    id: 'bJy9dnR2/2-10',
    width: 185,
    height: 133,
    index: 9,
  },
  {
    id: 'zXCwwpPR/2-11',
    width: 185,
    height: 133,
    index: 10,
  },
  {
    id: 'nLzvJxVv/2-12',
    width: 185,
    height: 133,
    index: 11,
  },
  {
    id: 'RVLfJhN7/2-13',
    width: 185,
    height: 133,
    index: 12,
  },
  {
    id: 'nzm9FcyQ/2-14',
    width: 185,
    height: 133,
    index: 13,
  },
];
const unsplashPhotos3 = [
  {
    id: 'Pfbnb4x6/3-1',
    width: 185,
    height: 133,
    index: 0,
  },
  {
    id: 'PJ6jWX4W/3-2',
    width: 185,
    height: 133,
    index: 1,
  },
  {
    id: 'mZVBfjsP/3-3',
    width: 185,
    height: 133,
    index: 2,
  },
  {
    id: 'TP8XqHr4/3-4',
    width: 185,
    height: 133,
    index: 3,
  },
  {
    id: 'jjYGJnTV/3-5',
    width: 185,
    height: 133,
    index: 4,
  },
  {
    id: 'gkw5SHkF/3-6',
    width: 185,
    height: 133,
    index: 5,
  },
  {
    id: 'YSxyGX8g/3-7',
    width: 185,
    height: 133,
    index: 6,
  },
  {
    id: 'dVPWWMxr/3-8',
    width: 185,
    height: 133,
    index: 7,
  },
  {
    id: 'JhRpLNmh/3-9',
    width: 185,
    height: 133,
    index: 8,
  },
  {
    id: 'pTTk9Pmb/3-10',
    width: 185,
    height: 133,
    index: 9,
  },
  {
    id: 'pLHwmnxw/3-11',
    width: 185,
    height: 133,
    index: 10,
  },
  {
    id: 'HxRKdrBP/3-12',
    width: 185,
    height: 133,
    index: 11,
  },
  {
    id: 'T1bswTs2/3-13',
    width: 185,
    height: 133,
    index: 12,
  },
  {
    id: 'MpqL62mx/3-14',
    width: 185,
    height: 133,
    index: 13,
  },
];
const photos1 = unsplashPhotos1.map((photo, index) => {
  const width = photo.width;
  const height = photo.height;
  return {
    src: unsplashLink(photo.id, width, height),
    key: `${index}`,
    width,
    height,
    index,
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
const photos2 = unsplashPhotos2.map((photo, index) => {
  const width = photo.width;
  const height = photo.height;
  return {
    src: unsplashLink(photo.id, width, height),
    key: `${index}`,
    width,
    height,
    index,
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
const photos3 = unsplashPhotos3.map((photo, index) => {
  const width = photo.width;
  const height = photo.height;
  return {
    src: unsplashLink(photo.id, width, height),
    key: `${index}`,
    width,
    height,
    index,
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
export { photos1, photos2, photos3 };
export default photos1;
