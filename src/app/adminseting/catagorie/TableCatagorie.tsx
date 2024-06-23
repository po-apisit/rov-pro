'use client'
import { ICatagorie } from '@/interface/rov/herogroup/rone/ICatagorie';
import { rovCatagorieSelector } from '@/store/slice/rov_slice/rov.catagorie.slice';
import { Avatar, Button, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import DialogEditTableCatagorie from './DialogEditTableCatagorie';
import DialogAddTableCatagorie from './DialogAddTableCatagorie';
import { useAppDispatch } from '@/store';
import { thunk_catagorie_delete } from '@/store/slice/rov_slice/rov.catagorie.thunk';

type Props = {}

export default function TableCatagorie({}: Props) {
  const _rovCatagorie = useSelector(rovCatagorieSelector);
  const dispatch = useAppDispatch()


  const handleRemove = (id:string) => {
    dispatch(thunk_catagorie_delete(id));
  }

  return (
    <Table>
    <TableHead>
      <TableRow>
        <TableCell>name_catagorie</TableCell>
        <TableCell>image_catagorie</TableCell>
        <TableCell>description_catagorie</TableCell>
        <TableCell>###</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {
        _rovCatagorie.is_loading
        ? <Typography>Loading...</Typography>
        : _rovCatagorie.is_error
        ? <Typography>Error</Typography>
        : (
          <React.Fragment>
            {
              _rovCatagorie.data.map((cat:ICatagorie, index:number) => (
                <TableRow key={index}  >
                  <TableCell>{cat.name_catagorie}</TableCell>
                  <TableCell><Avatar sx={{borderRadius:1}} alt='image' src={"http://localhost:4000"+cat.image_catagorie} /></TableCell>
                  <TableCell>{cat.description_catagorie}</TableCell>
                  <TableCell>
                    <Stack spacing={2} direction={"row"} >
                    <DialogEditTableCatagorie catagorie={cat} />
                    <Button  onClick={() => handleRemove(cat._id)} >
                        ลบ
                    </Button>
                    </Stack>
                   
                    </TableCell>
                </TableRow>
              ))
            }
          </React.Fragment>
        )
      }

      <TableRow>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell><DialogAddTableCatagorie /></TableCell>
      </TableRow>

    </TableBody>
  </Table>
  )
}