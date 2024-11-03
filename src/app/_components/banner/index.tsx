import Image from 'next/image'
import React from 'react'
import BannerLogo from '@assets/svgs/banner-logo-text.svg'
import bannerImage from '@assets/images/banner-image.png'

export default function Banner({
  heading = 'SHOP & SHARE ANY PRODUCT GET PAID SAME DAY ON SALES',
  subHeading = '- LOOK FOR THE BADGE -',
}) {
  return (
    <div className="home-banner">
      <div className="banner-logo">
        <BannerLogo />
      </div>
      <div className="banner-info">
        <h1 className="heading">{heading}</h1>
        <p className="sub-heading">{subHeading}</p>
      </div>
      <div className="banner-image">
        <Image src={bannerImage} alt="banner-image" width={360} height={330} />
      </div>
    </div>
  )
}
