import { PropsWithChildren } from 'react'

import { ButtonType } from '@/types/props'

export default function Button({
  children,
  type = 'primary',
  ...btnProps
}: PropsWithChildren<ButtonType> & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="btn" {...btnProps}>
      <div className={type + ' badge'}>{children}</div>
    </button>
  )
}
