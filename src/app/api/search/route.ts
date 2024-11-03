import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  if (!process.env.API_KEY || !process.env.API_URL) {
    return NextResponse.json(
      {
        error:
          'API_KEY or API_URL not found, Please create a .env file and define thse values',
      },
      { status: 500 }
    )
  }

  const requestHeaders: HeadersInit = new Headers()
  requestHeaders.set('Authorization', `Basic ${process.env.API_KEY}`)
  requestHeaders.set('Content-Type', 'application/json')

  const query = request.nextUrl.searchParams.get('query') || 'cosmetics' // Default to 'cosmetics' if not provided
  const limit = request.nextUrl.searchParams.get('limit') || 6 // Default to 6 if not provided
  const offset = request.nextUrl.searchParams.get('offset') || 0 // Default to 0 if not provided
  const sortBy = request.nextUrl.searchParams.get('sortby') || 'lowPrice' // Default to 'lowPrice' if not provided
  const categories = request.nextUrl.searchParams.getAll('category') || []
  const brands = request.nextUrl.searchParams.getAll('brand') || []

  try {
    const body = JSON.stringify({
      query: query,
      sortBy,
      offset: +offset,
      limit: +limit,
      categories,
      brands,
    })
    const request = {
      method: 'POST',
      headers: requestHeaders,
      body,
    }
    const response = await fetch(`${process.env.API_URL}/test/search`, request)
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch signed URL' },
        { status: response.status }
      )
    }

    const responseJson = await response.json()
    return NextResponse.json({ status: 200, products: responseJson })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
