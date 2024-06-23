import { Card, CardContent, CardHeader, Divider } from '@mui/material'
import React from 'react'

type Props = {}

export default function TableContent({}: Props) {
  return (
    <Card>
    <CardHeader 
    subheader={"ตาราง Hero"}
    />
    <Divider />
    <CardContent>
      
    </CardContent>
  </Card>
  )
}