import {mainThank} from "@/store/mainThank.ts";
import {A_LOGIN, R_USER} from "@/store/constants.ts";
import {I_Auth} from "@/types/user.ts";

export const userLoginThank = mainThank<I_Auth, {
    LOGIN: string,
    PASSWORD: string
}>(`${R_USER}${A_LOGIN}`, "post")  ;