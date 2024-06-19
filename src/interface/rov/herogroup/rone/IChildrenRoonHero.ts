export interface IChildrenRoonHero {
    id_children_roon: string;
    name_children_roon: string;
    damage: number;
    reduce_cooldown: number;
    type_roon: "red" | "purple" |"green";
    physical_armor: number; // เกราะ กายภาพ
    magic_armor: number; // เกราะ เวท
    attack_speed: number; // ความไวโจมตี
    movement_speed: number // ความไวเคลื่อนที่
}