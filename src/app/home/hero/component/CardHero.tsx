'use client'
import { IHero } from '@/interface/rov/herogroup/IHero'
import { userSelector } from '@/store/slice/user_slice/user.slice.'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Divider, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useRouter } from 'next/navigation'

type Props = {
    hero:IHero
}

export default function CardHero({hero}: Props) {
 const _userSeletor = useSelector(userSelector);
 const router = useRouter();
  return (
    <Grid item  sm={12} md={6} lg={4} >
        <Card  >
            <CardHeader 
            avatar={<Avatar sx={{width:40, height:40}} >{hero.name_hero}</Avatar>}
            onClick={() => router.push("../hero/" + hero.name_hero.toLowerCase())}
            title={<Typography variant="body1"> {hero.name_hero}</Typography>}
            sx={{cursor:"pointer"}}
            subheader={<Typography variant="caption"> 
            {hero.name_aliases.length > 40 ? hero.name_aliases.substring(0,37) + "..." :hero.name_aliases }
            </Typography>}
            />
            <CardMedia 
            component="img"
            height="194"
            alt="Paella dish"
            onClick={() => router.push("../hero/" + hero.name_hero.toLowerCase())}
            image={hero.image_hero}
            sx={{cursor:"pointer"}}
            />

            <CardContent
            onClick={() => router.push("../hero/" + hero.name_hero.toLowerCase())}
            sx={{cursor:"pointer"}}
            >
            <Typography variant="caption" color="text.secondary">
                {hero.description_hero.length > 80 ? hero.description_hero.substring(0,77) + "..."  : hero.description_hero }
                </Typography>
            </CardContent>
            <Divider />
            <CardActions>
                <Tooltip title={"ถูกใจ"} >
                    <span>
                        <IconButton size="small" disabled={!_userSeletor.is_login} >
                            <FavoriteBorderIcon />
                        </IconButton>
                    </span>
                </Tooltip>
            </CardActions>
        </Card>
    </Grid>
  )
}