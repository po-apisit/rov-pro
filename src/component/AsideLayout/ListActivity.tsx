import { Divider, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import React from 'react'
import PaymentsIcon from '@mui/icons-material/Payments';

type Props = {}

export default function ListActivity({}: Props) {
  return (
    <React.Fragment>
        <List
        dense
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
                กิจกรรม
            </ListSubheader>
        }
        > 
        <ListItemButton>
            <ListItemIcon>
                <PaymentsIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="คูปองฟรี" />
        </ListItemButton>
        </List>
    </React.Fragment>

  )
}