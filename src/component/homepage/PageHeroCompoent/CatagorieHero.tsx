import { ICatagorie } from '@/interface/rov/herogroup/rone/ICatagorie';
import { rovCatagorieSelector } from '@/store/slice/rov_slice/rov.catagorie.slice';
import { Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

type Props = {}

export default function CatagorieHero({}: Props) {
  const _rovCatagorieSelector = useSelector(rovCatagorieSelector);
  return (
    <Grid item md={12}>
        <Typography>ประเภทฮีโร่</Typography>
        <Grid container spacing={2} >
        {
            _rovCatagorieSelector.is_loading
            ? <Typography>Loading..</Typography>
            : <React.Fragment>
                {
                   _rovCatagorieSelector.data.map((cat:ICatagorie, index:number) => (
                                <Grid item md={2} key={index} >
                
                                <Paper sx={{p:1, cursor:"pointer", borderRadius:8}} >
                                    <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} >
                                        <Typography variant="caption" >{cat.name_catagorie}</Typography>
                                    </Stack>
                                    
                                </Paper>
                                </Grid>
                            ))
                }
            </React.Fragment>
 
        }
        </Grid>
        <Divider sx={{my:2}} />
    </Grid>
  )
}