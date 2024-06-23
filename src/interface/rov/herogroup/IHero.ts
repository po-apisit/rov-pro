import { ISkillHero } from "./ISkillHero";
import { ISetItemHero } from "./item/ISetItemHero";
import { ISetRoonHero } from "./rone/ISetRoonHero";

export interface IHero {
    _id: string;
    name_hero: string;
    name_aliases: string;
    image_hero: string;
    description_hero: string;
    story_hero: string;
    __v: number;
    file: File | null;
    skills: ISkillHero[]
}