import {mainThank} from "@/store/mainThank.ts";
import {A_CREATE, A_DELETE, A_GET_LIST, A_UPDATE, HLBL_ID_PriceType, R_HLBL} from "@/store/constants.ts";
import {I_ListParams} from "@/types/api.ts";
import {I_PriceType} from "@/types/priceType.ts";

export const getPriceTypeList = mainThank<I_PriceType[], I_ListParams<I_PriceType>>(`${R_HLBL}/${HLBL_ID_PriceType}${A_GET_LIST}`, "POST");
export const updatePriceTypeByIDThank = mainThank<I_PriceType, Partial<I_PriceType>>(`${R_HLBL}/${HLBL_ID_PriceType}${A_UPDATE}`, "PUT");
export const deletePriceTypeByIDThank = mainThank<I_PriceType>(`${R_HLBL}/${HLBL_ID_PriceType}${A_DELETE}`, "DELETE");
export const createPriceTypeThank = mainThank<I_PriceType, Partial<I_PriceType>>(`${R_HLBL}/${HLBL_ID_PriceType}${A_CREATE}`, "POST");