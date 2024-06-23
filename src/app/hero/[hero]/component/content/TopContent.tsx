import { Card, CardContent, CardHeader, Divider } from '@mui/material'
import React from 'react'

type Props = {}

export default function TopContent({}: Props) {
  return (
    <Card>
    <CardHeader 
    subheader={"ตารางติด Top Hero"}
    />
    <Divider />
    <CardContent>
      
    </CardContent>
  </Card>
  )
}