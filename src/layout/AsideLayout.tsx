import ListCommunity from '@/component/AsideLayout/ListCommunity'
import ListProfile from '@/component/RightbarLayout/ListProfile'
import ListTableTop from '@/component/AsideLayout/ListTableTop'
import { Divider, Grid } from '@mui/material'
import React from 'react'
import ListActivity from '@/component/AsideLayout/ListActivity'

type Props = {}

export default function AsideLayout({}: Props) {
  return (
    <Grid item md={2} >
      <ListCommunity />
      <Divider />
      <ListTableTop />
      <Divider />
      <ListActivity />
    </Grid>
  )
}