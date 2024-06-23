'use client'
import AsideLayout from '@/layout/AsideLayout'
import NavbarLayout from '@/layout/NavbarLayout'
import RightbarLayout from '@/layout/RightbarLayout'
import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  const screen = useMediaQuery('(min-width:800px)');

  return (
    <html lang="en">
    <body>
    <Grid container spacing={2} >
             <NavbarLayout />
      {
        screen && <AsideLayout />
      }
        
        <Grid item md={screen ? 8 : 12} sx={{width:"100%"}}>
            {children}
        </Grid>
        {
          screen &&  <RightbarLayout />
        }
       
    </Grid>
    </body>
  </html>
  
  )
}