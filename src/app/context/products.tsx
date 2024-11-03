'use client'

import { fetchSearchData } from '@/lib/search-data'
import { SearchResponseType } from '@/types/api'
import { useSearchParams } from 'next/navigation'
import {
  useState,
  Dispatch,
  useContext,
  createContext,
  SetStateAction,
  PropsWithChildren,
  useEffect,
} from 'react'

const LIMIT = 6
type ProductContextType = {
  products: SearchResponseType | null
  query: string
  categories: string[]
  brands: string[]

  setProducts: Dispatch<SetStateAction<SearchResponseType | null>>
  loadMoreProducts: () => void
  setQuery: Dispatch<SetStateAction<string>>
  setCategories: Dispatch<SetStateAction<string[]>>
  setBrands: Dispatch<SetStateAction<string[]>>
}

const ProductsContext = createContext<ProductContextType | null>(null)

export default function ProductsContextProvider({
  children,
}: PropsWithChildren) {
  const [products, setProducts] = useState<SearchResponseType | null>(null)
  const [limit, setLimit] = useState<number>(LIMIT)
  const [offset, setOffset] = useState<number>(0)

  const searchParams = useSearchParams()
  const categoriesList = searchParams.getAll('category') || []
  const urlQuery = searchParams.get('query') || ''
  const brandsList = searchParams.getAll('brand') || []

  const [query, setQuery] = useState<string>(urlQuery)
  const [categories, setCategories] = useState<string[]>(categoriesList)
  const [brands, setBrands] = useState<string[]>(brandsList)

  const categoriesUrl = `${categories.join('&category=')}`
  const brandsUrl = `${brands.join('&brand=')}`

  const fetchData = async ({
    query = 'cosmetics',
    limit = LIMIT,
    offset = 0,
  }) => {
    const response = await fetchSearchData(
      query,
      limit,
      offset,
      categoriesUrl,
      brandsUrl
    )
    const existingProducts = products?.products?.products || []
    const newProducts = response?.products?.products?.filter((item) => {
      return !existingProducts.some(
        (existingItem) => existingItem.id === item.id
      )
    })

    if (limit === 6) {
      setProducts(response)
      return
    }
    setProducts({
      products: {
        ...response?.products,
        products: [...existingProducts, ...newProducts],
      },
    })
  }

  const loadMoreProducts = () => {
    fetchData({ query, limit: limit + LIMIT, offset: offset + LIMIT })
    setLimit(limit + 6)
    setOffset(offset + 6)
  }

  const revalidateUrl = () => {
    let url = `/search?`
    if (query.trim().length !== 0) {
      url += `query=${query}`
    }
    if (categories.length !== 0) {
      url += `&category=${categories.join('&category=')}`
    }
    if (brands.length !== 0) {
      url += `&brand=${brands.join('&brand=')}`
    }
    window.history.pushState(null, '', url)
  }

  useEffect(() => {
    fetchData({ query })
    setLimit(LIMIT)
    setOffset(0)
  }, [query])
  useEffect(() => {
    if (categories.length > 0 || brands.length > 0) {
      revalidateUrl()
      return
    }
  }, [categories, brands])

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        query,
        setQuery,
        loadMoreProducts,
        categories,
        setCategories,
        brands,
        setBrands,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export function useProductsContext() {
  const data = useContext(ProductsContext)
  if (!data) throw new Error('Context used at the wrong place')

  return data
}
