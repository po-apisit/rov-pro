'use client'
import { IHero } from '@/interface/rov/herogroup/IHero'
import { rovHeroSelector } from '@/store/slice/rov_slice/rov.hero.slice'
import { CardHeader, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CardHero from './CardHero'

type Props = {}

export default function RootHeroComponent({}: Props) {
  const _rovHeroSelector = useSelector(rovHeroSelector);

  return (
    <Grid item md={12} >
        <Typography>ตัวละคร</Typography>
        {
            _rovHeroSelector.is_loading
            ? <Typography>Loading...</Typography>
            : _rovHeroSelector.is_error
            ? <Typography>{_rovHeroSelector.message_error}</Typography>
            : (
                <Grid container spacing={2} >
                    {
                        _rovHeroSelector.data.map((hero:IHero) => <CardHero key={hero._id} hero={hero} />)
                    }
                </Grid>
            )
        }

    </Grid>
  )
}