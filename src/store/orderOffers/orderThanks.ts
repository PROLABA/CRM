import { I_OrderOffers} from "@/types/orders";
import {mainThank} from "@/store/mainThank.ts";
import {A_CREATE, A_GET_LIST, A_UPDATE, HLBL_ID_OrderOffers, R_HLBL} from "@/store/constants.ts";
import {I_ListParams} from "@/types/api.ts";


export const getOrderOffersListThank = mainThank<I_OrderOffers[], I_ListParams<I_OrderOffers>>(`${R_HLBL}/${HLBL_ID_OrderOffers}${A_GET_LIST}`, "POST");
export const updateOrderOffersByIDThank = mainThank<I_OrderOffers, Partial<I_OrderOffers>>(`${R_HLBL}/${HLBL_ID_OrderOffers}${A_UPDATE}`, "put");
export const createOrderOffersThank = mainThank<I_OrderOffers, Partial<I_OrderOffers>>(`${R_HLBL}/${HLBL_ID_OrderOffers}${A_CREATE}`, "POST");
