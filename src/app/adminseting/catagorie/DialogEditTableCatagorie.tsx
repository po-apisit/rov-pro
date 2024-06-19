'use client'
import { ICatagorie } from '@/interface/rov/herogroup/rone/ICatagorie'
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import AvatarImage from '@/util/common/AvatarImage';
import { useAppDispatch } from '@/store';
import { thunk_catagorie_update } from '@/store/slice/rov_slice/rov.catagorie.thunk';

type Props = {
    catagorie: ICatagorie
}

export default function DialogEditTableCatagorie({catagorie}: Props) {
  const [open, setOpen] = useState<boolean>(false)
  const [data, setData] = useState<ICatagorie>(catagorie)
  const dispatch = useAppDispatch();


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setData({ ...data, file: event.target.files[0] });
    }
  };

  const handleSave = () => {
    dispatch(thunk_catagorie_update(data));
  }


  useEffect(() => {
    if(catagorie){
        setData(catagorie)
    }
  },[catagorie])


  return (
    <React.Fragment>
        <Tooltip title="แก้ไข" >
            <IconButton size="small" onClick={() => setOpen(!open) } >
                <EditIcon />
            </IconButton>
        </Tooltip>
        <Dialog
            open={open}
            onClose={() => setOpen(false) }
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>
                <Typography>การแก้ไข</Typography>
            </DialogTitle>
            <DialogContent dividers>
                <Stack spacing={2} >
                    <TextField
                        value={data.name_catagorie} 
                        label="ชื่อประเภท"
                        variant="outlined"
                        size='small'
                        onChange={e => setData({...data, name_catagorie: e.target.value}) }
                        fullWidth
                    />
                    <TextField
                        value={data.description_catagorie} 
                        label="รายละเอียด"
                        variant="outlined"
                        multiline
                        minRows={2}
                        size='small'
                        onChange={e => setData({...data, name_catagorie: e.target.value}) }
                        fullWidth
                    />

                    <Stack spacing={2} justifyContent={"flex-start"} alignItems={"center"} >
                    <AvatarImage src={data.image_catagorie} file={data.file} />
                    <Button variant="contained" component="label">
                        อัปโหลดรูปภาพ
                        <input type="file" hidden onChange={handleFileChange} />
                        </Button>
                    </Stack >
                    
                    
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" size="small" onClick={handleSave}  >
                    บันทึก
                </Button>
            </DialogActions>
        </Dialog>
    </React.Fragment>

  )
}