'use client'
import { ICatagorie } from '@/interface/rov/herogroup/rone/ICatagorie';
import { rovCatagorieSelector } from '@/store/slice/rov_slice/rov.catagorie.slice';
import { Avatar, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import DialogEditTableCatagorie from './DialogEditTableCatagorie';

type Props = {}

export default function TableCatagorie({}: Props) {
  const _rovCatagorie = useSelector(rovCatagorieSelector);
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
                  <TableCell><DialogEditTableCatagorie catagorie={cat} /></TableCell>
                </TableRow>
              ))
            }
          </React.Fragment>
        )
      }


    </TableBody>
  </Table>
  )
}