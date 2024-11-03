import { MenuType } from '@/types/props'

const MENU: MenuType[] = [
  {
    title: 'Marketplace',
    link: '/category/marketplace',
    type: 'drop-down',
    subMenu: [
      {
        title: 'VideoShops',
        link: '/video-shops',
        type: 'link',
      },
      {
        title: 'VideoShops',
        link: '/video-shops',
        type: 'link',
      },
    ],
  },
  {
    title: 'Brand A-Z',
    link: '/category/products',
    type: 'link',
  },
  {
    title: 'Makeup',
    link: '/category/makeup',
    type: 'link',
  },
  {
    title: 'Hair',
    link: '/category/hair',
    type: 'link',
  },
  {
    title: 'Nails',
    link: '/category/nails',
    type: 'link',
  },
  {
    title: 'Tools & Brushes',
    link: '/category/tools',
    type: 'link',
  },
  {
    title: 'Fragrance',
    link: '/category/fragrance',
    type: 'link',
  },
  {
    title: 'Body',
    link: '/category/body',
    type: 'link',
  },
]

export { MENU }
