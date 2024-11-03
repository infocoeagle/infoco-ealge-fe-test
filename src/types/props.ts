import { StaticImageData } from 'next/image'

interface HeroSellerType {
  source: string
  overlay: StaticImageData
}

interface ProductCardType {
  product: {
    brandImage: string
    brandName: string
    name: string
    price: number
    options: number
    productImage: string
  }
  header?: {
    startContent?: React.ReactNode
    endContent?: React.ReactNode
  }
  footer?: {
    startContent?: React.ReactNode
    endContent?: React.ReactNode
  }
}

interface ButtonType {
  type?: 'primary' | 'bordered'
}

interface SellerCardType {
  name: string
  avatar?: string
}

interface BrandCardType {
  name: string
  image?: string
  isDeliverSameDay?: boolean
}

interface SearchResultsType {
  searchValue: string
}

interface SearchResultCardType {
  title: string
  image?: string
}

interface SearchResultsContainerType {
  title: string
  data: Array<SearchResultCardType>
}

interface CheckboxType {
  label: string
  isChecked?: boolean
  type: string
}
interface MenuType {
  title: string
  link: string
  type: string
  subMenu?: Array<MenuType>
}

export type {
  HeroSellerType,
  ProductCardType,
  ButtonType,
  SellerCardType,
  BrandCardType,
  SearchResultsType,
  SearchResultCardType,
  SearchResultsContainerType,
  CheckboxType,
  MenuType,
}
