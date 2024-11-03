import Image from 'next/image'
import React from 'react'

export default function ShopAndSell() {
  return (
    <div className="shop-and-sell-container">
      <div className="info">
        <p className="heading">SHOP & SELL</p>
        <p className="sub-heading">WHAT YOU LOVE</p>
      </div>
      <div className="shop-and-sell">
        {Array.from({ length: 8 }).map((_, i) => {
          return (
            <Image
              src={`/assets/images/shop-${i + 1}.png`}
              alt="random"
              width={360}
              height={330}
              objectFit="cover" // Crop image to fill container
              layout="responsive"
              key={i}
            />
          )
        })}
      </div>
    </div>
  )
}
