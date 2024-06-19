export interface ISkillHero {
    id_skill_hero: string;
    id_hero: string;
    description: string;
    _index: number;
    use_nama: number | null;
    use_energe_skill: boolean;
    created_at?: Date;
    updated_at?: Date;
}