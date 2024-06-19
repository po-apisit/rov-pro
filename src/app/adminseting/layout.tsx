import RootSeting from '@/component/admin/RootSeting'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <RootSeting>{children}</RootSeting>
  )
}