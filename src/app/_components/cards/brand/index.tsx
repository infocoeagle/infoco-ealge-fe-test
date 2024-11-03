import Image from 'next/image'

import { BrandCardType } from '@/types/props'
import GetPaidTag from '@assets/svgs/get-paid-same-day-tag-pink.svg'

export default function BrandCard({
  name,
  image,
  isDeliverSameDay,
}: BrandCardType) {
  return (
    <div className="brand-card-container">
      {image && <Image src={image} alt={name} fill />}
      {!image && <div style={{ width: '100%', height: '100%' }} />}
      {isDeliverSameDay && (
        <div style={{ color: 'pink' }} className="get-paid-sameday-tag">
          <GetPaidTag />
        </div>
      )}
      <div className="overlay" aria-hidden />
      <h2 className="name">{name}</h2>
    </div>
  )
}
