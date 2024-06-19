import AsideLayout from '@/layout/AsideLayout'
import RightbarLayout from '@/layout/RightbarLayout'
import { Grid } from '@mui/material'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <React.Fragment>
        <AsideLayout />
        <Grid item md={8}>
            {children}
        </Grid>
        <RightbarLayout />
    </React.Fragment>
  )
}