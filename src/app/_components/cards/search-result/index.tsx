'use client'
import Image from 'next/image'
import { SearchResultCardType } from '@/types/props'
import { useProductsContext } from '@/app/context/products'
import { useRouter } from 'next/navigation'

export default function SearchResultCard({
  image,
  title,
}: SearchResultCardType) {
  const { setQuery } = useProductsContext()
  const router = useRouter()
  return (
    <div
      className="search-result-item-card"
      onClick={() => {
        setQuery(title)
        router.push(`/search?query=${title}`)
      }}
    >
      <Image
        src={
          image ||
          'https://s3-alpha-sig.figma.com/img/d47d/0ca5/98340d9bf722e3c8c5ff729d24d37211?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bC9t6R-w-n8W0rOWRpC7jkNZ--EHpRyF5GVMKTJSWyX3cT7GXFWxzOgTPej1AycSUOCJuSlkbquo7YB2wNrSIy5yHqxYAoa7bEec0seEIPNPZ34xVgLaUGP4HubNTzkfrzMee5DFOd454rArJxVnTCkOPNEMctbzB9degwCSgVFh~A41LcW0STfu1vwACZpj6DZIeX4s-8akqt-n4fATN6nuFAp1~1gz-lVAA6KeNss0t5qrhPtvR-LpHqwPs0qHcxeQEcYx~9ET7ykSqC38nv~4Kf0vJGir10aAPfbswqkdePHp2t448DXcK2jliTfXTnV6KaU-fP7FE04IFulXuw__'
        }
        alt={title}
        width={35}
        height={35}
      />
      <div>{title}</div>
    </div>
  )
}
