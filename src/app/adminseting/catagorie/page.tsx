
import { Stack } from '@mui/material';
import React from 'react'
import TableCatagorie from './TableCatagorie';
import ToolbarCatagorie from './ToolbarCatagorie';

type Props = {}

export default function page({}: Props) {
  return (
    <Stack p={2} >
      <ToolbarCatagorie />
      <TableCatagorie />
    </Stack>
  )
}