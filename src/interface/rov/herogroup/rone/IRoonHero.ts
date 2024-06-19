import { IChildrenRoonHero } from "./IChildrenRoonHero";

export interface IRoonHero {
    id_roon: string;
    name_roon: string;
    id_user?: string;
    type_roon: "custom" | "system";
    id_children_roon: string[];
    children_roons: IChildrenRoonHero[];
    created_at?: Date;
    updated_at?: Date;
}