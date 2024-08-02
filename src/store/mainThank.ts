import { AsyncThunk, createAsyncThunk, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import instance from "@/store/instance.ts";
import { I_Payload, I_Response, I_ResponseError, I_ResponseSuccess } from "@/types/api.ts";
import { AxiosRequestConfig } from "axios";
import { notification } from "antd";


export function mainThank<T, T_Data = object>(endpoint: string, method: AxiosRequestConfig['method']): AsyncThunk<
    I_ResponseSuccess<T>,
    I_Payload<T_Data>,
    {
        state?: unknown;
        dispatch?: ThunkDispatch<unknown, unknown, UnknownAction> | undefined;
        extra?: unknown;
        rejectValue?: I_ResponseError;
        serializedErrorType?: unknown;
        pendingMeta?: unknown;
        fulfilledMeta?: unknown;
        rejectedMeta?: unknown;
    }> {
    return createAsyncThunk<I_ResponseSuccess<T>, I_Payload<T_Data>, object>(
        endpoint,
        async ({ ID, data }, { rejectWithValue }) => {
            try {
                const res = await fetchData<T>(`${endpoint}${ID ? `/${ID}` : ''}`, {
                    method,
                    data
                });
                if (res.error) {
                    return rejectWithValue(res)
                }
                return res
            } catch (error: unknown) {
                const res = error as I_ResponseError;
                if (res.error) {
                    if (res.data?.length) {
                        res.data.map((e) => {
                            notification.error({
                                message: res.message,
                                description: e.message,
                                key: e.message
                            })
                        })
                    } else {
                        notification.error({
                            message: res.message,
                            key: res.message
                        })
                    }
                }
                return rejectWithValue(res)
            }
        }
    )
}

export async function fetchData<T>(endpoint: string, options: AxiosRequestConfig): Promise<I_Response<T>> {
    const response = await instance()<I_Response<T>>(endpoint, options);
    if (response.data.error) {
        throw response.data;
    }
    return response.data;
}