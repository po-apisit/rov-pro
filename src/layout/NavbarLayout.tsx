'use client'
import { AppBar, Button, Divider, Grid, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ButtonLogin from '@/component/NavbarLayout/ButtonLogin';
import IconButtonNotify from '@/component/NavbarLayout/IconButtonNotify';
import IconButtonContect from '@/component/NavbarLayout/IconButtonContect';
import { useRouter } from 'next/navigation';
import IconButtonDashboard from '@/component/NavbarLayout/IconButtonDashboard';

type Props = {}

export default function NavbarLayout({}: Props) {
  const router = useRouter(); 
  
  const gotoHomePage = () => {
    router.push("/home/hero");
  }

  return (
    <Grid item md={12} >
      <AppBar position="static" >
      <Toolbar >
        <Stack sx={{ flexGrow:1 }} >
          <Typography sx={{ cursor:"pointer" }} onClick={gotoHomePage} variant="body1" >ROV-PRO.COM</Typography>
        </Stack>
        <Stack spacing={4} direction={"row"} justifyContent={"space-between"} alignItems={"center"}  >
          <IconButtonNotify />
          <IconButtonDashboard />
          <IconButtonContect />
        </Stack>

      </Toolbar>
      </AppBar>

    </Grid>
  )
}