'use client'
import React from 'react'
import product from './products.json'
import ProductCard from '../cards/product'
import Carousel from '../carousel'

export default function TrendingProducts() {
  return (
    <div className="trending-products-container">
      <p className="title">TRENDING PRODUCTS</p>
      <div className="products"></div>
      <Carousel>
        {product.map((product) => {
          if (!product.locales[0]?.variants?.[0]?.price) return null
          return (
            <ProductCard
              key={product.id}
              product={{
                brandImage: product.locales[0].variants[0].images[0].url,
                brandName: product.brand.name,
                name: product.locales[0].variants[0].title,
                price: product.locales[0].variants[0].price,
                options: product.locales[0].variants[0].options.length,
                productImage: product.locales[0].variants[0].images[0].url,
              }}
              header={{
                startContent: `${product.commissionRate}% COMMISSION`,
              }}
            />
          )
        })}
      </Carousel>
    </div>
  )
}
