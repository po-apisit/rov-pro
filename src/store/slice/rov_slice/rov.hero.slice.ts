import { IHero } from "@/interface/rov/herogroup/IHero";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { thunk_hreo_findall } from "./rov.hero.thunk";
import { RootState } from "@/store";
import { ISkillHero } from "@/interface/rov/herogroup/ISkillHero";

interface Hero {
    data: IHero[];
    is_loading: boolean;
    is_error: boolean;
    message_error: string | null;
}

const initialState : Hero = {
    data: [],
    is_loading: false,
    is_error: false,
    message_error: null
}

const rovHeroSlice = createSlice({
    name: "rov-hero-slice",
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(thunk_hreo_findall.pending, (state:Hero) => {
                state.data = [];
                state.is_loading = true;
                state.is_error = false;
                state.message_error = null;
            })
            .addCase(thunk_hreo_findall.fulfilled, (state:Hero, action:PayloadAction<IHero[]>) => {
                if(action.payload){
                    const newHeros:IHero[] = action.payload.map((hero:IHero) => {
                        const newHero:IHero = {
                            _id : hero._id,
                            name_hero: hero.name_hero,
                            name_aliases: hero.name_aliases,
                            image_hero: hero.image_hero,
                            description_hero: hero.description_hero,
                            story_hero: hero.story_hero,
                            __v: hero.__v,
                            file: null,
                        }

                        if(hero.skills){
                            const newSkills = hero.skills.map((skill:ISkillHero) => {
                                const newSkill:ISkillHero = {
                                    ...skill
                                }
                                return newSkill;
                            })
                            newHero.skills = newSkills;
                        }
                        return newHero;
                    })
                    state.data = newHeros;
                }
                state.is_error = false;
                state.message_error = null;
                state.is_loading = false;
            })
            .addCase(thunk_hreo_findall.rejected, (state:Hero) => {
                state.data = [];
                state.is_error = true;
                state.message_error = "server not response";
                state.is_loading = false;
            })
    }
})

export default rovHeroSlice.reducer;
export const rovHeroSelector = (state:RootState) => state.rovHeroSlice;