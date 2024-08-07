import {mainThank} from "@/store/mainThank.ts";
import {A_GET_LIST, A_UPDATE, HLBL_ID_Clients, R_HLBL} from "@/store/constants.ts";
import {I_Client} from "@/types/clients.ts";
import {I_ListParams} from "@/types/api.ts";

export const getClientsList = mainThank<I_Client[], I_ListParams<I_Client>>(`${R_HLBL}/${HLBL_ID_Clients}${A_GET_LIST}`, "post");
export const updateClientByIDThank = mainThank<I_Client, Partial<I_Client>>(`${R_HLBL}/${HLBL_ID_Clients}${A_UPDATE}`, "put");
