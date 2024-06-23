import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';

type Props = {}

export default function IconButtonNotify({}: Props) {
  return (
    <Tooltip title="การแจ้งเตือน">
        <IconButton>
            <NotificationsIcon  />
        </IconButton>
    </Tooltip>

  )
}