import { Avatar } from '@mui/material';
import React from 'react'

type Props = {
    src:string;
    file: File | null;
}

export default function AvatarImage({src, file}: Props) {
  const url:string = "http://localhost:4000";
  return (
    <React.Fragment>
        {
            file === null
            ? <Avatar sx={{ borderRadius:1, width:"40%", height:"40%" }} alt='image' src={url+src} />
            : <Avatar sx={{ borderRadius:1, width:"40%", height:"40%" }} alt='image' src={URL.createObjectURL(file)} />
        }
    </React.Fragment>
  )
  
}