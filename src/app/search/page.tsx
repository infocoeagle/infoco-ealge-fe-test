'use client'
import React, { useMemo } from 'react'
import SearchSellersList from '../_components/search-sellers-list'
import SearchProductList from '../_components/search-product-list'
import SearchMerchants from '../_components/search-brands-list'
import Filters from '../_components/filters'

import { useProductsContext } from '../context/products'

export default function Search() {
  const { products } = useProductsContext()
  if (!products) {
    return null
  }
  const categoriesNames = useMemo(() => {
    return products.products?.facets?.categories?.map(
      (category) => category.name
    )
  }, [])
  const brandsNames = useMemo(() => {
    return products.products?.facets.brands?.map((brand) => brand.name)
  }, [])

  return (
    <div className="search-page">
      <div className="search-filters">
        <Filters names={categoriesNames} title="Category" />
        <Filters names={brandsNames} title="Brand" />
      </div>
      <div className="search-content">
        <SearchSellersList users={products.products?.users} />
        <SearchMerchants merchants={products.products?.merchants} />
        <SearchProductList products={products.products?.products} />
      </div>
    </div>
  )
}
