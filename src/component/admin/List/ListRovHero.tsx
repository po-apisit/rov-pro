'use client'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import FaceIcon from '@mui/icons-material/Face';
import { usePathname, useRouter } from 'next/navigation';

type Props = {}

export default function ListRovHero({}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <ListItemButton selected={pathname === "/adminseting/hero"} onClick={() => router.push("/adminseting/hero")} >
    <ListItemIcon>
        <FaceIcon />
    </ListItemIcon>
    <ListItemText primary="Hero" secondary="ตัวละครทั้งหมด" />
</ListItemButton>
  )
}