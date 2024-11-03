import Hero from '@components/hero'
import Banner from '@components/banner'
import ShopAndSell from '@components/shop-and-sell'
import TrendingProducts from '@components/trending-products'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrendingProducts />
      <Banner />
      <ShopAndSell />
    </main>
  )
}
