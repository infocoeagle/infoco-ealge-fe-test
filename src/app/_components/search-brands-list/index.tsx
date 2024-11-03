import React from 'react'
import { MerchantType } from '@/types/api'
import BrandCard from '../cards/brand'

export default function SearchMerchants({
  merchants,
}: {
  merchants: MerchantType[]
}) {
  if (!merchants) return null
  return (
    <div className="search-product-list">
      <div className="search-result">
        <p className="title">Brands</p>
        <p className="result">Results {merchants.length}</p>
      </div>
      <div className="products">
        {merchants?.map((merchant: MerchantType) => {
          if (!merchant) return null
          return (
            <BrandCard
              key={merchant.id}
              name={merchant.shopName}
              image={merchant.profileImage}
              isDeliverSameDay={merchant.productBadges.includes('same-day-pay')}
            />
          )
        })}
      </div>
    </div>
  )
}
