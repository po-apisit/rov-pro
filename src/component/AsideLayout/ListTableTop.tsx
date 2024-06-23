'use client'
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import React from 'react'
import PatternIcon from '@mui/icons-material/Pattern';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import { useRouter, usePathname } from 'next/navigation';

type Props = {}

export default function ListTableTop({}: Props) {
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
            ตารางลำดับ
        </ListSubheader>
      }
    > 

        <ListItemButton selected={pathname === "/home/herorating"} onClick={() => gotoPage("/home/herorating")}>
        <ListItemIcon>
          <PatternIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="ตัวละคร Top" />
      </ListItemButton>

      <ListItemButton selected={pathname === "/home/weakness"} onClick={() => gotoPage("/home/weakness")}>
        <ListItemIcon>
          <AutoModeIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="ตัวละครแก้ทาง" />
      </ListItemButton>
      

    </List>
  )
}