import {mainThank} from "@/store/mainThank.ts";
import {A_GET_LIST, HLBL_ID_PriceType, R_HLBL} from "@/store/constants.ts";
import {I_PriceType} from "@/types/clients.ts";
import {I_ListParams} from "@/types/api.ts";

export const getPriceTypeList = mainThank<I_PriceType[], I_ListParams<I_PriceType>>(`${R_HLBL}/${HLBL_ID_PriceType}${A_GET_LIST}`, "POST");