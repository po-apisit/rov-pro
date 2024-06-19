import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useRouter } from 'next/navigation';

type Props = {}

export default function IconButtonDashboard({}: Props) {
  const router = useRouter();
  return (
    <Tooltip title="ตั้งค่าแอดมิน">
        <IconButton onClick={() => router.push("../adminseting/catagorie")} >
            <DashboardIcon />
        </IconButton>
    </Tooltip>

  )
}