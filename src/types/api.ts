import { AllFieldsNever } from "./common"

export type T_PromiseStatus = 'pending' | 'fulfilled' | 'rejected'

export interface I_Error {
    message: string,
    code?: string,
    customData?: never
}

export interface I_ListParams<Entity> {
    limit?: number
    filter?: Partial<AllFieldsNever<Entity>>
    GET_CHILDES?: boolean
    GET_PARENTS?: boolean
}
export interface I_ResponseError {
    error: true
    message: string
    data: I_Error[]
}

export interface I_ResponseSuccess<T> {
    error: false
    message: string
    data: T
}

export type I_Response<T> = I_ResponseSuccess<T> | I_ResponseError

export interface I_Payload<T_Data> {
    ID?: number
    data?: Omit<T_Data, 'ID'>
}

export type T_boolBX = "Y" | "N"