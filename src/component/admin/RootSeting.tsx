import { Grid, List, ListSubheader } from '@mui/material'
import React from 'react'
import ListRovCatagorie from './List/ListRovCatagorie'
import ListRovHero from './List/ListRovHero'

type Props = {
    children: React.ReactNode
}

export default function RootSeting({children}: Props) {
  return (
    <React.Fragment>
        <Grid item md={3} >
            <List 
            dense
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                admin dashboard
              </ListSubheader>
            }>
                <ListRovCatagorie />
                <ListRovHero />
            </List>
        </Grid>
        <Grid item md={9} >
            {children}
        </Grid>
    </React.Fragment>
  )
}