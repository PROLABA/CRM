import {mainThank} from "@/store/mainThank.ts";
import {A_GET_LIST, HLBL_ID_OffersPrice, R_HLBL} from "@/store/constants.ts";
import {I_ListParams} from "@/types/api.ts";
import {I_OffersPrice} from "@/types/priceType.ts";

export const getOfferPriceListThank = mainThank<I_OffersPrice[], I_ListParams<I_OffersPrice>>(`${R_HLBL}/${HLBL_ID_OffersPrice}${A_GET_LIST}`, "POST");