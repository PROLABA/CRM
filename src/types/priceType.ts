import {I_Offer} from "@/types/orders.ts";

export interface I_PriceType {
    ID: number
    NAME: string
    LABEL: string
}
export interface I_OffersPrice {
    ID: number
    NAME: string
    DATE_CREATE: string
    ACTIVE: 0 | 1
    VALUE: number
    PRICE_TYPE_ID: I_PriceType['ID']
    OFFER_ID: I_Offer['ID']
}
