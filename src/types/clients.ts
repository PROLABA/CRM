export interface I_Client {
    ID: number
    NAME: string
    ADDRESS: string
    PRICE_TYPE_ID: string
    JOIN?: {
        PRICE_TYPE_ID: I_PriceType
    }
}

export interface I_PriceType {
    ID: string
    NAME: string
}