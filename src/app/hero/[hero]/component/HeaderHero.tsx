import { IHero } from '@/interface/rov/herogroup/IHero'
import { Avatar, BottomNavigation, BottomNavigationAction, Card, CardActions, CardContent, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import HandymanIcon from '@mui/icons-material/Handyman';
import BentoIcon from '@mui/icons-material/Bento';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PatternIcon from '@mui/icons-material/Pattern';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import Groups2Icon from '@mui/icons-material/Groups2';
import SkillContent from './content/SkillContent';
import NewsContent from './content/NewsContent';
import ItemContent from './content/ItemContent';
import TopContent from './content/TopContent';
import TableContent from './content/TableContent';
import PatchContent from './content/PatchContent';
import CommunityContent from './content/CommunityContent';

type Props = {
    hero:IHero;
    value: string;
    setValue: (state:string) => void;
}

export default function HeaderHero({hero, value, setValue}: Props) {
  return (
    <Grid item md={10} >
        <Stack spacing={2}>

   
        <Card>
            <CardContent>
                <Stack height={200}  >
                    <Stack spacing={2} direction={"row"}>
                    <Avatar>H</Avatar>
                        <Stack>
                        <Typography>{hero.name_hero}</Typography>
                        <Typography>{hero.name_aliases}</Typography>
                        </Stack>
                    </Stack>

      
                </Stack>
          
            </CardContent>
            <Divider />
            <CardActions>
            <BottomNavigation
                showLabels
                
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{width:"100%"}}
                >
                     <BottomNavigationAction  icon={<ArtTrackIcon />} label="ข่าว" value={"news"} />
                     <BottomNavigationAction  icon={<BentoIcon />} label="สกิล" value={"skill"} />
                     <BottomNavigationAction  icon={<HandymanIcon />} label="เซตไอเทม" value={"item"} />
                     <BottomNavigationAction  icon={<MilitaryTechIcon />} label="บุคคลติด Top" value={"top"} />
                     <BottomNavigationAction  icon={<PatternIcon />} label="ตาราง" value={"table"} />
                     <BottomNavigationAction  icon={<AutoAwesomeMotionIcon />} label="อัฟเดทแพทช์" value={"update"} />
                     <BottomNavigationAction  icon={<Groups2Icon />} label="ชมชน" value={"room"} />
                </BottomNavigation>
            </CardActions>
        </Card>
        
        {
            (hero && value === "news" ) && <NewsContent />
        }

        {
            (hero && value === "skill" ) && <SkillContent skill={hero.skills} />
        }
        {
            (hero && value === "item" ) && <ItemContent />
        }
        {
            (hero && value === "top" ) && <TopContent />
        }
        {
            (hero && value === "table" ) && <TableContent />
        }
        {
            (hero && value === "update" ) && <PatchContent />
        }
        {
            (hero && value === "room" ) && <CommunityContent />
        }

</Stack>
    </Grid>
  )
}