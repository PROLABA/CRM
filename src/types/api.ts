export type T_PromiseStatus = 'pending' | 'fulfilled' | 'rejected'

export interface I_Error {
    message: string,
    code?: string,
    customData?: never
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
    data?: T_Data
}