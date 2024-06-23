import { Card, CardContent, CardHeader, Divider } from '@mui/material'
import React from 'react'

type Props = {}

export default function ItemContent({}: Props) {
  return (
    <Card>
    <CardHeader 
    subheader={"Item แนะนำ"}
    />
    <Divider />
    <CardContent>
      
    </CardContent>
  </Card>
  )
}