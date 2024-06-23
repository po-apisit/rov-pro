import { Card, CardContent, CardHeader, Divider } from '@mui/material'
import React from 'react'

type Props = {}

export default function NewsContent({}: Props) {
  return (
    <Card>
      <CardHeader 
      subheader={"ข่าวสาร"}
      />
      <Divider />
      <CardContent>
        
      </CardContent>
    </Card>
  )
}