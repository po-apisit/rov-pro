'use client'
import { userSelector } from '@/store/slice/user_slice/user.slice.';
import { Avatar, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import ListItemButtonLogin from './List/ListItemButtonLogin';

type Props = {}

export default function ListProfile({}: Props) {
  const _userSelector = useSelector(userSelector);

  return (
    <List
      dense
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          บัญชีผู้ใช้งาน
        </ListSubheader>
      }
    > 
    {
      _userSelector.is_login 
      ? (
        <ListItemButton>
        <ListItemIcon>
          <Avatar>User</Avatar>
        </ListItemIcon>
        <ListItemText primary="First Alone" secondary="คนเจ้าชู้" />
      </ListItemButton>
      ) : <ListItemButtonLogin />
    }

    </List>
  )
}