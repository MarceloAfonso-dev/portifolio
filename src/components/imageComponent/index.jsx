import React from 'react';

const ImageComponent = ({ src, alt, width, height, priority }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
};

export default ImageComponent;