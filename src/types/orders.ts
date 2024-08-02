import {I_FileBX} from "./types"
import {I_Task} from "@/types/task.ts";
import {I_User} from "@/types/user.ts";

export interface I_Order {
    ID: string
    ORGANIZATION_ID: I_Organization['ID']
    DATE_CREATE: string
    STATUS_ID: number
    DATE_CLOSED: Date
    DATE_TEST: Date
    CREATED_USER_ID: string
    CLIENT_ID: string
    CLIENT_USER_ID: string
    ORDER_OFFERS_IDS: []
    EXTRA: number
    TASK_IDS: I_Task['ID'][]
    BONUS: string
    DESCRIPTION: string
    TEETH_COLORS_CURRENT: string
    TEETH_COLORS_NEEDLE: string
    PATIENT_USER_ID: string
    FILES: I_FileBX[]
    PAYMENT_DATE: Date,
    PRICE: string,
    JOIN?: {
        ORGANIZATION_ID: I_Organization,
        STATUS_ID: I_OrderStatus,
        CREATED_USER_ID: I_User,
        CLIENT_USER_ID: I_User,
        TASK_IDS: I_Task[]
    }
}

export interface I_Organization {
    ID: string
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