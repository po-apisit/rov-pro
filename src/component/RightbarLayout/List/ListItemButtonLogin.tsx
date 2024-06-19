import { IUser } from '@/interface/user/IUser';
import { Avatar, Dialog, DialogContent, DialogTitle, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'

type Props = {}

export default function ListItemButtonLogin({ }: Props) {
    const [open, setOpen] = useState<boolean>(false);
    
    const [user, setUser] = useState<IUser>({
        role: "user",
        username: "",
        password: "",
    });

    return (
        <React.Fragment>
            <ListItemButton onClick={() => setOpen(!open)} >
                <ListItemIcon>
                    <Avatar></Avatar>
                </ListItemIcon>
                <ListItemText primary="Login" secondary="กรุณาเข้าสู่ระบบ" />
            </ListItemButton>
            <Dialog
            open={open}
            onClose={() => setOpen(!open)}
            maxWidth="sm"
            fullWidth
            >
                <DialogTitle>
                    <Typography>ลงทะเบียนใช้งานเพิ่มเติม</Typography>
                </DialogTitle>
                <DialogContent dividers >

                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}