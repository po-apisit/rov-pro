'use client'
import { Avatar, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import React from 'react'
import SmartToyIcon from '@mui/icons-material/SmartToy';
import HandymanIcon from '@mui/icons-material/Handyman';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { useRouter, usePathname } from 'next/navigation';

type Props = {}

export default function ListCommunity({}: Props) {

  const router = useRouter();
  const pathname = usePathname();

  const gotoPage = (page:string) => {
    router.push(page)
  }
  return (
    <List
      dense
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          ชุมชน ROV
        </ListSubheader>
      }
    > 

        <ListItemButton selected={pathname === "/home/hero"} onClick={() => gotoPage("/home/hero")} >
        <ListItemIcon>
          <SmartToyIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Hero & news" secondary="ข่าวสารและตัวละคร" />
      </ListItemButton>

      <ListItemButton selected={pathname === "/home/item"} onClick={() => gotoPage("/home/item")}>
        <ListItemIcon>
          <HandymanIcon color="primary" />
        </ListItemIcon> 
        <ListItemText primary="Item" secondary="ไอเทม ทั้งหมด" />
      </ListItemButton>

      
      <ListItemButton selected={pathname === "/home/toprank"} onClick={() => gotoPage("/home/toprank")}>
        <ListItemIcon>
          <MilitaryTechIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Top 100 Rank" secondary="100 อันดับแรงค์" />
      </ListItemButton>
      

    </List>
  )
}