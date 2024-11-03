import { HeroSellerType } from '@/types/props'
import Image from 'next/image'
import React from 'react'

export default function HeroSeller({ source, overlay }: HeroSellerType) {
  return (
    <div className="hero-seller">
      <video autoPlay muted loop className="hero-seller">
        <source src={source} type="video/mp4" />
      </video>
      <div className="overlay">
        <p>SHOP & SELL</p>
        <Image src={overlay} alt="title" />
      </div>
    </div>
  )
}
