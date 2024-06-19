import { IITemHero } from "./IITemHero";

export interface ISetItemHero {
    id_set_item : string;
    id_user?: string;
    type_set_item: "custom" | "system";
    id_item: string[];
    items: IITemHero[];
    created_at?: Date;
    updated_at?: Date;
}