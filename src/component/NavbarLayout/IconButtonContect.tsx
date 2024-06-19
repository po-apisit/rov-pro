import React from 'react'
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import { IconButton, Tooltip } from '@mui/material';

type Props = {}

export default function IconButtonContect({}: Props) {
  return (
    <Tooltip title="ติดต่อ">
    <IconButton>
        <MarkChatUnreadIcon />
    </IconButton>
    </Tooltip>

  )
}