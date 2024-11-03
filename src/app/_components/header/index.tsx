'use client'
import React from 'react'
import Menu from '@assets/svgs/menu.svg'
import ChevronDown from '@assets/svgs/chevron-down.svg'

import Cart from '@assets/svgs/cart.svg'
import Logo from '@assets/svgs/logo.svg'
import SearchInput from '@components/search/input'
import HeartBlack from '@assets/svgs/heart-black.svg'
import Link from 'next/link'
import { MENU } from '@/lib/contants'

export default function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="icon">
          <Link href="/category/menu">
            <Menu />
          </Link>
        </div>
        <div className="icon">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="cart-container">
          <div className="icon">
            <Link href="/category/liked">
              <HeartBlack />
            </Link>
          </div>
          <div className="icon">
            <Link href="/category/cart">
              <Cart />
            </Link>
          </div>
        </div>
      </div>
      <SearchInput />
      <nav className="menu">
        {MENU.map((item, index) => {
          return (
            <Link href={item.link} key={index} className="menu-item">
              <p>{item.title}</p>
              {item.type === 'drop-down' && (
                <span className="menu-dropdown">
                  <ChevronDown />
                </span>
              )}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
