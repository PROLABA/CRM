import { I_FileBX } from "./types"

export interface I_Order {
    ID: string
    ORGANIZATION_ID: string
    DATE_CREATE: string
    STATUS_ID: string
    DATE_CLOSED: any
    DATE_TEST: any
    CREATED_USER_ID: string
    CLIENT_ID: string
    CLIENT_USER_ID: any
    ORDER_OFFERS_IDS: any[]
    EXTRA: any
    TASK_IDS: any[]
    BONUS: string
    DESCRIPTION: string
    TEETH_COLORS_CURRENT: string
    TEETH_COLORS_NEEDLE: string
    PATIENT_USER_ID: any
    FILES: any[]
    FILES_PHOTO: any[]
    ORGANIZATION_ID_PARENT: OrganizationIdParent,
    PAYMENT_DATE: string,
    PRICE: string,
}

export interface OrganizationIdParent {
    ID: string
    NAME: string
    INN: string
    KPP: string
    RS: string
    KS: string
    BANK_BIK: any
    BANK_ID: string
    FACSIMILES: number[];
    LOGO: boolean
    FACSIMILES_PHOTO: I_FileBX[]
}