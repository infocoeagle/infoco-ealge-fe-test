'use server'

import { SearchResponseType } from '@/types/api'

export async function fetchSearchData(
  query: string,
  limit: number,
  offset: number,
  categories: string,
  brands: string
): Promise<SearchResponseType> {
  let url = `${process.env.APP_URL}/api/search?query=${query}`
  if (offset) {
    url += `&offset=${offset}`
  }
  if (limit) {
    url += `&limit=${limit}`
  }
  if (categories && categories.trim().length > 0) {
    url += `&category=${categories}`
  }
  if (brands && brands.trim().length > 0) {
    url += `&brand=${brands}`
  }

  const apiResponse = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-cache',
  })

  const data = await apiResponse.json()
  if (!apiResponse.ok) {
    throw new Error(data.error)
  }
  return data
}
