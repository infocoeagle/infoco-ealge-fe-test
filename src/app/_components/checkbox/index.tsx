'use client'

import { useEffect, useId } from 'react'

import { CheckboxType } from '@/types/props'
import Checked from '@assets/svgs/checked.svg'
import Unchecked from '@assets/svgs/unchecked.svg'
import { useProductsContext } from '@/app/context/products'

export default function Checkbox({ label, type }: CheckboxType) {
  const id = useId()

  const { categories, setCategories, brands, setBrands } = useProductsContext()
  const isCategories = type === 'Category'

  const isSelected = isCategories
    ? categories.includes(label)
    : brands.includes(label)

  const filter = (c: string[]) => {
    if (c.includes(label)) {
      return c.filter((item: string) => item !== label)
    } else {
      return [...c, label]
    }
  }

  function handleChange() {
    isCategories ? setCategories(filter) : setBrands(filter)
  }
  useEffect(() => {
    return () => {
      setCategories([])
      setBrands([])
    }
  }, [])

  return (
    <div className="checkbox-container">
      <label htmlFor={id}>
        {isSelected && <Checked />}
        {!isSelected && <Unchecked />}
      </label>
      <div className="label">
        <input
          type="checkbox"
          hidden
          id={id}
          onChange={handleChange}
          checked={isSelected}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  )
}
