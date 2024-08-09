import {I_PriceType} from "@/types/priceType.ts";

export interface I_Client {
    ID: number
    NAME: string
    ADDRESS: string
    PRICE_TYPE_ID: number
    JOIN?: {
        PRICE_TYPE_ID: I_PriceType
    }
}

