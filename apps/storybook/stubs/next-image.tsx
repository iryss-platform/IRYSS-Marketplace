import React from 'react'

const Image = ({ src, alt, width, height, fill, ...props }: any) => (
  <img
    src={typeof src === 'string' ? src : src?.src || ''}
    alt={alt || ''}
    width={fill ? undefined : width}
    height={fill ? undefined : height}
    style={fill ? { objectFit: 'cover', width: '100%', height: '100%' } : undefined}
    {...props}
  />
)
export default Image
