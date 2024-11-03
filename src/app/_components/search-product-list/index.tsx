'use client'
import React from 'react'
import ProductCard from '../cards/product'
import { ProductType } from '@/types/api'
import { useProductsContext } from '@/app/context/products'
import Button from '../button'

export default function SearchProductList({
  products,
}: {
  products: ProductType[]
}) {
  if (!products) return null
  const allowShowMore = products.length % 6 === 0

  const { loadMoreProducts } = useProductsContext()
  const shoeMore = () => {
    loadMoreProducts()
  }
  return (
    <div className="search-product-list">
      <div className="search-result">
        <p className="title">PRODUCTS</p>
        <p className="result">Results {products.length}</p>
      </div>
      <div className="products">
        {products?.map((product: ProductType) => {
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
      </div>
      {allowShowMore && (
        <div className="show-more">
          <Button onClick={shoeMore} type="bordered">
            <span>SHOW MORE</span>
          </Button>
        </div>
      )}
    </div>
  )
}
