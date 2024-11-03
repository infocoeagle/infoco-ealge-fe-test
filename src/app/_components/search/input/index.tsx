'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Search from '@assets/svgs/search.svg'
import SearchResults from '@components/search/results'
import { useProductsContext } from '@/app/context/products'

export default function SearchInput() {
  const router = useRouter()
  const [shouldShowResults, setShouldShowResults] = useState(false)
  const { setQuery, query } = useProductsContext()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const query = e.target.value
    if (query.trim() !== '') {
      setQuery(query)
      router.push(`/search?query=${query}`)
    } else {
      setQuery('')
      router.push(`/`)
    }
  }
  return (
    <div className="search-container search-input-container">
      <div className="search">
        <Search />
        <input
          onBlur={() =>
            setTimeout(() => {
              setShouldShowResults(false)
            }, 100)
          }
          onFocus={() => setShouldShowResults(true)}
          type="text"
          className="search-input"
          value={query}
          onChange={handleSearch}
          placeholder="Search by Brand, Product, or Category"
        />
        {shouldShowResults && <SearchResults searchValue={query} />}
      </div>
    </div>
  )
}
