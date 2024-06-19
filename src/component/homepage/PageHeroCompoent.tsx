import { Divider, Grid } from '@mui/material'
import React from 'react'
import CatagorieHero from './PageHeroCompoent/CatagorieHero'
import RootHeroComponent from '@/app/home/hero/component/RootHeroComponent'
import TextFieldSearchComponent from './SearchHeroComponent/TextFieldSearchComponent'

type Props = {}

export default function PageHeroCompoent({}: Props) {
  return (
    <Grid container spacing={2} >
        <CatagorieHero />
        <TextFieldSearchComponent />
        <RootHeroComponent />
    </Grid>
  )
}