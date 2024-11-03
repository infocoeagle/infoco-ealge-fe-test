import React from 'react'

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}
