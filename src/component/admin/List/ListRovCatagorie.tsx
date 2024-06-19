'use client'
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import CategoryIcon from '@mui/icons-material/Category';
import { useRouter, usePathname } from 'next/navigation';

type Props = {}

export default function ListRovCatagorie({}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <ListItemButton selected={pathname === "/adminseting/catagorie"} onClick={() => router.push("/adminseting/catagorie")} >
        <ListItemIcon>
            <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Catagorie" secondary="ประเภทฮีโร่" />
    </ListItemButton>
  )
}