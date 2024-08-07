import {T_boolBX} from "@/types/api.ts";

export interface I_Auth {
    ID: string | null
    token: string | null
    user: I_User | null
}
export interface I_User {
    ID: string
    LOGIN: string
    NAME: string
    LAST_NAME: string
    EMAIL: string
    ACTIVE: T_boolBX
    PERSONAL_PROFESSION?: 'Врач' | 'Техник'
}

export type AuthFieldType = {
    LOGIN: string;
    PASSWORD: string;
};