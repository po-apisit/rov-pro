import { Grid, Stack } from '@mui/material'
import React from 'react'
import TableHero from './TableHero'

type Props = {}

export default function page({}: Props) {
  return (
    <Stack p={2} ><TableHero /></Stack>
  )
}