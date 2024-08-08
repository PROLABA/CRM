import { I_FileBX } from "./common"
import { I_Task } from "@/types/task.ts";
import { I_User } from "@/types/user.ts";
import { I_Teeth } from "@/types/teeth.ts";

export interface I_Order {
    ID: number
    ORGANIZATION_ID: I_Organization['ID']
    DATE_CREATE: string
    STATUS_ID: I_OrderStatus['ID']
    DATE_CLOSED: string
    DATE_TEST: string
    CREATED_USER_ID: string
    CLIENT_ID: string
    CLIENT_USER_ID: string
    ORDER_OFFERS_IDS: []
    EXTRA: number
    TASK_IDS: I_Task['ID'][]
    BONUS: number
    DESCRIPTION: string
    TEETH_COLORS_CURRENT: string
    TEETH_COLORS_NEEDLE: string
    PATIENT_USER_ID: string
    FILES: I_FileBX[]
    PAYMENT_DATE: string,
    PRICE: string,
    JOIN?: {
        ORDER_OFFERS_IDS: I_OrderOffers[]
        ORGANIZATION_ID: I_Organization,
        STATUS_ID: I_OrderStatus,
        CREATED_USER_ID: I_User,
        CLIENT_USER_ID: I_User,
        TASK_IDS: I_Task[]
    }
}

export interface I_OrderOffers {
    ID: number
    ENTITY_ID: I_Order['ID']
    PRICE: number
    COUNT: number
    TEETH_IDS: I_Teeth['ID'][]
    JOIN?: {
        ENTITY_ID: I_Teeth
        TEETH_ID: I_Teeth[]
    }
}

export interface I_Offer {
    ID: number
    NAME: string
}

export interface I_Organization {
    ID: number
    NAME: string
    INN: string
    KPP: string
    RS: string
    KS: string
    BANK_BIK: string
    BANK_ID: string
    FACSIMILES: string[];
    LOGO: boolean
    FACSIMILES_PHOTO: I_FileBX[]
}

export interface I_OrderStatus {
    ID: number
    COLOR: string
    NAME: string
}