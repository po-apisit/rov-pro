import AsideLayout from '@/layout/AsideLayout'
import NavbarLayout from '@/layout/NavbarLayout'
import RightbarLayout from '@/layout/RightbarLayout'
import { Divider, Grid } from '@mui/material'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function LayoutProvider({children}: Props) {
  return (
    <React.Fragment>
        {children}
    </React.Fragment>
    
  )
}