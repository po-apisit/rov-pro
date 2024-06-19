import { Grid, InputAdornment, InputAdornmentProps, TextField, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

type Props = {}

export default function TextFieldSearchComponent({}: Props) {
  return (
    <Grid item md={12} >
        <Typography>ค้นหา</Typography>
        <TextField 
        placeholder='Search Hero'
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        sx={{ borderRadius:10 }}
        size="small"
         />
    </Grid>
  )
}