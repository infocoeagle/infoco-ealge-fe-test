import { UserType } from '@/types/api'
import React from 'react'
import SellerCard from '../cards/seller'
import Carousel from '../carousel'

export default function SearchSellersList({ users }: { users: UserType[] }) {
  if (!users) return null
  return (
    <div className="search-seller-list">
      <div className="search-result">
        <p className="title">Sellers</p>
        <p className="result">Results {users.length}</p>
      </div>
      <div className="users">
        <Carousel config={[3, 2, 1]}>
          {users.map((user: UserType) => {
            return (
              <SellerCard
                key={user.id}
                name={`${user.firstName} ${user.lastName}`}
                avatar={user.profileImage}
              />
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}
