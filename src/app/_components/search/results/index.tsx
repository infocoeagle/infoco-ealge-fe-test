import SearchResultCard from '@components/cards/search-result'
import {
  SearchResultCardType,
  SearchResultsContainerType,
  SearchResultsType,
} from '@/types/props'
import { useProductsContext } from '@/app/context/products'
import { ProductType } from '@/types/api'

export default function SearchResults({ searchValue }: SearchResultsType) {
  const { products } = useProductsContext()
  const productsData: SearchResultCardType[] =
    products?.products?.products?.map((product: ProductType) => ({
      title: product.locales[0].variants[0].title,
      image: product.locales[0].variants[0].images[0].url,
    })) || []

  const brandsData: SearchResultCardType[] =
    products?.products?.merchants?.map((merchant) => {
      return {
        title: merchant.shopName,
        image: merchant.profileImage,
      }
    }) || []
  const sellersData: SearchResultCardType[] =
    products?.products?.users?.map((user) => ({
      title: `${user.firstName} ${user.lastName}`,
      image: user.profileImage,
    })) || []
  if (!searchValue) return null
  return (
    <div className="results-container">
      <SearchResultsContainer title="Products" data={productsData!} />
      <SearchResultsContainer title="Sellers" data={sellersData!} />
      <SearchResultsContainer title="Brands" data={brandsData!} />
    </div>
  )
}

function SearchResultsContainer({ title, data }: SearchResultsContainerType) {
  if (!data.length) return null
  return (
    <section className="section">
      <h4 className="">{title}</h4>
      <div>
        {data.map((item, i) => (
          <SearchResultCard {...item} key={`item ${i}`} />
        ))}
      </div>
    </section>
  )
}
