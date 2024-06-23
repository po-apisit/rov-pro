import { ISkillHero } from '@/interface/rov/herogroup/ISkillHero'
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import React from 'react'

type Props = {
    skill: ISkillHero[]
}

export default function SkillContent({skill}: Props) {
  return (
    <Card>
        <CardHeader 
        subheader="Skill"
        />
        <Divider />
      
        <CardContent >
            {
                skill
                ? <Typography>มีสกิล</Typography>
                : <Typography>ไม่มีสกิล</Typography>
            }
        </CardContent>
    </Card>
  )
}