import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import { Button } from '@mui/material';

type Props = {}

export default function ButtonLogin({}: Props) {
  return (
    <React.Fragment>
    <Button startIcon={<LoginIcon />} >
      Login
    </Button>
    </React.Fragment>

  )
}