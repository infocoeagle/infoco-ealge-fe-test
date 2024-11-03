import type { Metadata } from 'next'

import '@styles/main.scss'
import 'react-multi-carousel/lib/styles.css'

import Header from '@components/header'
import Footer from '@components/footer'
import BreadCrumb from '@components/bread-crum'
import ProductsContextProvider from './context/products'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'VideoShops Marketplace',
  description: 'VideoShops Marketplace',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsContextProvider>
            <Header />
            <BreadCrumb />
            {children}
            <Footer />
          </ProductsContextProvider>
        </Suspense>
      </body>
    </html>
  )
}
