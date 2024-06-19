'use client'
import { BottomNavigation, BottomNavigationAction, Divider, Stack } from '@mui/material'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import PageHeroCompoent from '@/component/homepage/PageHeroCompoent';
import PageNewsComponent from '@/component/homepage/PageNewsComponent';

type Props = {}

export default function page({}: Props) {
  const [value, setValue] = useState(0);

  return (
    <Stack >
      <Stack >
      <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="ฮีโร่" value={0} icon={<SmartToyIcon />} />
      <BottomNavigationAction label="ข่าวสาร" value={1} icon={<ArtTrackIcon />} />
    </BottomNavigation>
      </Stack>

    <Divider sx={{mb:2}} />
    {
      value === 0 && <PageHeroCompoent />
    }
    {
      value === 1 && <PageNewsComponent />
    }
    
    </Stack>
  )
}