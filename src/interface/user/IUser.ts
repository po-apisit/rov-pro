import { IStoryUser } from "./IStoryUser";

export interface IUser {
    id_user?: string;
    id_name?: string;
    phone?: string;
    username?: string;
    password?: string;
    id_socket?: string;
    role: "user"| "official" | "admin";
    // Story
    id_story?: string[];
    storys?: IStoryUser[];
}