import { IRoonHero } from "./IRoonHero";

export interface ISetRoonHero {
    id_set_roon: string;
    id_user?: string;
    type_roon: "custom" | "system";
    id_roon: string[];
    roons: IRoonHero[];
    created_at: Date;
    updated_at: Date;
}