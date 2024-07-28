
export type T_PromiseStatus = 'pending' | 'fulfilled' | 'rejected'

export type I_Error = {
    message: string,
    code: string,
    customData: never
}
export type I_Response<T> = {
    error: boolean
    message: string,
    data: T
}
export type I_ResponseError = {
    error: boolean
    message: string
    data: I_Error[]
}