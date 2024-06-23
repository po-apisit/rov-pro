import { Card, CardContent, CardHeader, Divider } from '@mui/material'
import React from 'react'

type Props = {}

export default function PatchContent({}: Props) {
  return (
    <Card>
    <CardHeader 
    subheader={"Patch ที่มีการอัฟเดท Hero"}
    />
    <Divider />
    <CardContent>
      
    </CardContent>
  </Card>
  )
}