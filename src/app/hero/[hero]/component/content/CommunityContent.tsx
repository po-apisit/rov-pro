import { Card, CardContent, CardHeader, Divider } from '@mui/material'
import React from 'react'

type Props = {}

export default function CommunityContent({}: Props) {
  return (
    <Card>
    <CardHeader 
    subheader={"Comment แนะนำ"}
    />
    <Divider />
    <CardContent>
      
    </CardContent>
  </Card>
  )
}