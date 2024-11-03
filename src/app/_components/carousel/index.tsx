import React from 'react'

import MultiCarousel from 'react-multi-carousel'

export default function Carousel({
  children,
  config = [4, 2, 1],
}: {
  children: React.ReactNode[]
  config?: number[]
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: config[0],
    },
    tablet: {
      breakpoint: { max: 1024, min: 769 },
      items: config[1],
    },
    mobile: {
      breakpoint: { max: 769, min: 0 },
      items: config[2],
    },
  }
  return <MultiCarousel responsive={responsive}>{children}</MultiCarousel>
}
