'use client'
import { IHero } from '@/interface/rov/herogroup/IHero';
import { rovHeroSelector } from '@/store/slice/rov_slice/rov.hero.slice';
import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import HeaderHero from './component/HeaderHero';
import AsideLayout from '@/layout/AsideLayout';
import NavbarLayout from '@/layout/NavbarLayout';
import SkillContent from './component/content/SkillContent';

type Props = {
  params: {
    hero: string;
  }
}

export default function page({params}: Props) {
  const [hero, setHero] = useState<IHero | null>(null);
  const _rovHeroSelector = useSelector(rovHeroSelector);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>("news");

  useEffect(() => {
    setIsLoading(true)
    const newHero = _rovHeroSelector.data.filter((_hero:IHero) => 
      _hero.name_hero.toLowerCase() === params.hero.toLowerCase().trim());
    if(newHero.length > 0){
      setHero(newHero[0])
    }
    setIsLoading(false)
  },[params.hero, _rovHeroSelector])

  return (
    <Grid container spacing={2}>
      {
        isLoading || _rovHeroSelector.is_loading
        ? <Typography>Loading...</Typography>
        : <React.Fragment>
          <NavbarLayout />
          <AsideLayout />
          {
            hero && (
              <React.Fragment>
    
                <HeaderHero hero={hero} value={value} setValue={setValue} />
           
      

              </React.Fragment>
            )
          }


        </React.Fragment>
      }
    </Grid>
  )
}