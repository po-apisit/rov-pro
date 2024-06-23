import { IHero } from '@/interface/rov/herogroup/IHero';
import { ISkillHero } from '@/interface/rov/herogroup/ISkillHero';
import AvatarImage from '@/util/common/AvatarImage';
import { Button, Dialog, DialogContent, DialogTitle, Divider, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

type Props = {
    hero: IHero
}

export default function DialogEditHero({ hero }: Props) {

    const [open, setOpen] = useState<boolean>(false);
    const [data, setData] = useState<IHero>(hero);
    
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setData({ ...data, file: event.target.files[0] });
        }
    };

    const AddSkill = () => {
        if(data.skills) {
            const newSkill:ISkillHero = {
                _id: uuidv4(),
                name_skill: "ชื่อสกิล",
                description_skill: "รายละเอียด",
                image_skill: "image",
                index_skill: data.skills.length + 1,
                heroId: data._id,
            }
            setData({...data, skills: [...data.skills, newSkill]})
        } else {
            const newSkill:ISkillHero = {
                _id: uuidv4(),
                name_skill: "ชื่อสกิล",
                description_skill: "รายละเอียด",
                image_skill: "image",
                index_skill: 1,
                heroId: data._id,
            }
            setData({...data, skills: [newSkill]})
        }

    }
    
    useEffect(() => {
        
        if(hero){
            setData(hero)
        }
     },[hero])
    return (
        <React.Fragment>
            <Button onClick={() => setOpen(!open)}>
                แก้ไข
            </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                maxWidth="lg"
                fullWidth
            >
                <DialogTitle>
                    <Typography>ฮีโร่</Typography>
                </DialogTitle>
                <DialogContent dividers >
                    <Stack spacing={2} >
                        <Stack direction={"row"} spacing={2} >
                            <TextField
                            fullWidth
                                value={hero.name_hero}
                                label={"ชื่อฮีโร่"}
                            />
                                     <TextField
                        fullWidth
                                value={hero.name_aliases}
                                label={"aliases"}
                            />

                            
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                        <TextField
                                fullWidth
                                multiline

                                value={hero.description_hero}
                                label={"รายละเอียดฮีโร่"}
                            />

                            <TextField
                                fullWidth
                                value={hero.story_hero}
                                label={"สตอรี่"}
                            />
                        </Stack>
                        <Stack spacing={2} justifyContent={"flex-start"} alignItems={"center"} >
                    <AvatarImage src={data.image_hero} file={data.file} />
                    <Button variant="contained" component="label">
                        อัปโหลดรูปภาพ
                        <input type="file" hidden onChange={handleFileChange} />
                        </Button>
                    </Stack >
                    </Stack>

                    <Divider />
                    {
                        data.skills && (
                        <Stack spacing={2} >
                            <Typography>Skill</Typography>
                            {
                                data.skills.map((skill:ISkillHero) => (
                                    <Stack spacing={2} >
                                        <TextField 
                                            value={skill.name_skill}
                                            onChange={e => {
                                                if(data.skills){
                                                    const newSkill: ISkillHero[] = data.skills.map((_skill:ISkillHero) => {
                                                        if(_skill._id === skill._id){
                                                            _skill.name_skill = e.target.value;
                                                        }
                                                        return _skill;
                                                    })
                                                        setData({...data, skills:newSkill})
                                                    
                                                    
                                                }
                                            } }
                                            label={"ชื่อสกิล :" + skill.index_skill}

                                        />
                                         <TextField 
                                            value={skill.description_skill}
                                            onChange={e => {
                                                if(data.skills){
                                                    const newSkill: ISkillHero[] = data.skills.map((_skill:ISkillHero) => {
                                                        if(_skill._id === skill._id){
                                                            _skill.description_skill = e.target.value;
                                                        }
                                                        return _skill;
                                                    })
                                                        setData({...data, skills:newSkill})
                                                    
                                                    
                                                }
                                            } }
                                            label={"รายละเอียดสกิล :" + skill.index_skill}

                                        />
                                    </Stack>
                                ))
                            }
                            <span>
                            {
                                data.skills.length <=3 && (
                                    <Button onClick={AddSkill}>
                                    เพิ่ม
                                </Button>
                                )
                            }
       
                            </span>
       
                        </Stack>
                        )
                    }
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}