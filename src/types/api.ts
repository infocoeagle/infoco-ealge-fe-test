interface ImagesType {
  url: string
  index: string
}
interface OptionType {
  key: string
  name: string
  value: string
}
interface VariantType {
  title: string
  description: string
  price: number
  oldPrice: number
  active: boolean
  available: boolean
  images: ImagesType[]
  options: OptionType[]
}

interface BrandType {
  name: string
  count?: number
  merchantBrand?: boolean
}

interface ProductLocaleType {
  country: string
  currency: string
  language: string
  active: boolean
  variants: VariantType[]
}

interface CategoriesType {
  name: string
  index: string
}

interface ProductType {
  id: string
  productId: string
  active: boolean
  badges: string[]
  brand: BrandType
  commissionRate: number
  locales: ProductLocaleType[]
  categories: CategoriesType[]
}
interface UserType {
  id: string
  profileImage: string
  firstName: string
  lastName: string
  backgroundImage: string
  shopName: string
}
interface MerchantType {
  id: string
  profileImage: string
  shopName: string
  productBadges: string[]
}
interface SearchResponseType {
  products: {
    facets: {
      brands: BrandType[]
      categories: CategoriesType[]
    }
    products: ProductType[]
    users: UserType[]
    merchants: MerchantType[]
  }
}

export type {
  ImagesType,
  OptionType,
  VariantType,
  BrandType,
  ProductLocaleType,
  CategoriesType,
  ProductType,
  UserType,
  SearchResponseType,
  MerchantType,
}
