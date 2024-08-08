import {mainThank} from "@/store/mainThank.ts";
import {A_CREATE, A_GET_LIST, A_UPDATE, HLBL_ID_Offers, R_HLBL} from "@/store/constants.ts";
import {I_ListParams} from "@/types/api.ts";
import {I_Offer} from "@/types/orders.ts";

export const getOffersListThank = mainThank<I_Offer[], I_ListParams<I_Offer>>(`${R_HLBL}/${HLBL_ID_Offers}${A_GET_LIST}`, "POST");

export const updateOfferByIDThank = mainThank<I_Offer, Partial<I_Offer>>(`${R_HLBL}/${HLBL_ID_Offers}${A_UPDATE}`, "PUT");
export const createOfferThank = mainThank<I_Offer, Partial<I_Offer>>(`${R_HLBL}/${HLBL_ID_Offers}${A_CREATE}`, "POST");