import ListProfile from '@/component/RightbarLayout/ListProfile'
import { Grid } from '@mui/material'
import React from 'react'

type Props = {}

export default function RightbarLayout({}: Props) {
  return (
    <Grid item md={2} >
      <ListProfile />
    </Grid>
  )
}