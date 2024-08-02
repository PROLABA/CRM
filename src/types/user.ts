export interface I_Auth {
    ID: string
    token: string | null
    user: I_User | null
}
export interface I_User {
    ID: number
    LOGIN: string
    NAME: string
    LAST_NAME: string
    EMAIL: string
}

export type AuthFieldType = {
    LOGIN: string;
    PASSWORD: string;
};