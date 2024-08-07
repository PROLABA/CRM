import {mainThank} from "@/store/mainThank.ts";
import {A_GET_LIST, R_USER} from "@/store/constants.ts";
import {I_User} from "@/types/user.ts";
import {I_ListParams} from "@/types/api.ts";

export const getUserList = mainThank<I_User[], I_ListParams<I_User>>(`${R_USER}${A_GET_LIST}`, "POST");
