'use client'
import React, { useEffect, useMemo } from 'react'
import { ThemeProvider as Theme, createTheme, StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useAppDispatch } from '@/store';
import { thunk_catagorie_findall } from '@/store/slice/rov_slice/rov.catagorie.thunk';
import { thunk_hreo_findall } from '@/store/slice/rov_slice/rov.hero.thunk';

type Props = {
    children: React.ReactNode
}

export default function ThemeProvider({children}: Props) {

    const dispatch = useAppDispatch();

   const theme = useMemo(() => {
    return createTheme({
        palette:{
            mode: "light",
            background:{
                default:"#e9e9e9"
            }
        },
        components:{
            MuiButton:{
                defaultProps:{
                    size:"small",
                    color:"primary",
                    variant:"outlined",
                    
                }
            },
            MuiIconButton:{
                defaultProps:{
                    size: "small",
                    color:"inherit"
                }
            }
        }
    });
   },[])


   useEffect(() => {
    dispatch(thunk_catagorie_findall());
    dispatch(thunk_hreo_findall());
   },[])


  return (
    <StyledEngineProvider injectFirst>
        <Theme theme={theme} >
            <CssBaseline />
            {children}
        </Theme>
    </StyledEngineProvider>
  )
}