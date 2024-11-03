'use client'
import Checkbox from '@components/checkbox'
import Button from '../button'
import { useState } from 'react'

export default function Filters({
  names,
  title = 'Category',
}: {
  names: string[]
  title?: string
}) {
  const [limit, setLimit] = useState<number>(6)
  if (!names || names.length === 0) return null

  return (
    <article className="filters-container">
      {/* {searchQuery && <h3 className="query">&ldquo {searchQuery}&rdquo </h3>} */}
      <hr />
      <section>
        <div className="filters">
          <p className="heading">{title}</p>
          {names.map(
            (filter, i) =>
              i < limit && (
                <Checkbox label={filter} key={filter + i} type={title} />
              )
          )}
          <div className="load-more">
            <Button
              type="bordered"
              onClick={() => {
                setLimit(limit === names.length ? 6 : names.length)
              }}
            >
              <span>{limit === names.length ? 'Show Less' : 'Show More'}</span>
            </Button>
          </div>
        </div>
      </section>
    </article>
  )
}
