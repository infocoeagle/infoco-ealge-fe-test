'use client'
import React, { useEffect, useState } from 'react'
import HeroSeller from '../hero-seller'
import data from './data'

export default function Hero() {
  const [columns, setColumns] = useState(1) // Default to 1 item

  useEffect(() => {
    // Function to update the column count based on the screen width
    const updateColumns = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setColumns(3) // Large screens
      } else if (width >= 640) {
        setColumns(2) // Medium screens
      } else {
        setColumns(1) // Small screens
      }
    }

    updateColumns() // Call initially to set correct columns on mount

    // Add event listener to update on resize
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])
  return (
    <div className="home-sellers-container">
      {data.slice(0, columns).map((item, index) => {
        return <HeroSeller key={index} {...item} />
      })}
    </div>
  )
}
