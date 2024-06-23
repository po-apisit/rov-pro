'use client'
import { IHero } from '@/interface/rov/herogroup/IHero';
import { rovHeroSelector } from '@/store/slice/rov_slice/rov.hero.slice';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Stack, Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import DialogEditHero from './DialogEditHero';

type Props = {}

export default function TableHero({ }: Props) {
    const _rovHeroSelector = useSelector(rovHeroSelector);
    return (
        <React.Fragment>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ชื่อ</TableCell>
                        <TableCell>###</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        _rovHeroSelector.is_loading
                            ? <Typography>Loading...</Typography>
                            : _rovHeroSelector.is_error
                                ? <Typography>{_rovHeroSelector.message_error}</Typography>
                                : (
                                    <React.Fragment>
                                        {
                                            _rovHeroSelector.data.map((_hero: IHero) => (
                                                <TableRow>
                                                    <TableCell>{_hero.name_hero}</TableCell>
                                                    <TableCell>
                                                        <Stack spacing={2} direction={"row"}>
                                                            <DialogEditHero hero={_hero} />
                                                            <Button>
                                                                ลบ
                                                            </Button>
                                                        </Stack> </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </React.Fragment>
                                )

                    }

                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>
                            <Stack spacing={2} direction={"row"}>
                                <Button>
                                    เพิ่ม
                                </Button>
                            </Stack> </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </React.Fragment>
    )
}