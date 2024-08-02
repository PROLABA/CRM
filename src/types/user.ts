import {T_boolBX} from "@/types/api.ts";

export interface I_Auth {
    ID: string | null
    token: string | null
    user: I_User | null
}
export interface I_User {
    ID: number
    LOGIN: string
    NAME: string
    LAST_NAME: string
    EMAIL: string
    ACTIVE: T_boolBX
}

export type AuthFieldType = {
    LOGIN: string;
    PASSWORD: string;
};