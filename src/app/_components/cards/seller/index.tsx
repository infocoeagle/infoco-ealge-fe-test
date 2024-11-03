import Image from 'next/image'

import { SellerCardType } from '@/types/props'

export default function SellerCard({ avatar, name }: SellerCardType) {
  return (
    <div className="seller-card-container">
      {avatar && <Image src={avatar} alt={name} fill />}
      {!avatar && <div style={{ width: '100%', height: '100%' }} />}
      <p className="name">{name}</p>
      <div className="shadow" aria-hidden />
    </div>
  )
}
