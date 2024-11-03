'use client'

import { usePathname } from 'next/navigation'

export default function BreadCrumb() {
  const currentPath = usePathname()
  // eslint-disable-next-line no-unsafe-optional-chaining
  const routes = ['My Shop', ...currentPath?.split('/')?.filter((path) => path)]

  return (
    <div className="breadcrumbs">
      {routes.map((route, index) => {
        return (
          <span
            key={index}
            className={`breadcrumbs-${
              index === routes.length - 1 ? 'active' : 'inactive'
            }`}
          >
            {`${route} ${index === routes.length - 1 ? '' : ' /'}`}
          </span>
        )
      })}
    </div>
  )
}
