import { I_Teeth, I_TeethSection } from "@/types/teeth.ts";
import { AsyncThunk, createAsyncThunk, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import instance from "@/store/instance.ts";
import { I_Response } from "@/types/api.ts";

export function mainThank<T>(endpoint: string): AsyncThunk<T, void, {
    state?: unknown;
    dispatch?: ThunkDispatch<unknown, unknown, UnknownAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}> {
    return createAsyncThunk<T, void, object>(
        endpoint,
        async (_, { rejectWithValue }) => {
            try {
                return await fetchData<T>(endpoint);
            } catch (error) {
                return rejectWithValue(error);
            }
        }
    )
}

async function fetchData<T>(endpoint: string): Promise<T> {
    const response = await instance().get<I_Response<T>>(endpoint);
    if (response.data.error) {
        throw response.data;
    }
    return response.data.data;
}

export const getTeethSections = mainThank<I_TeethSection[]>('/teeth/sections_list');
export const getTeethList = mainThank<I_Teeth[]>('/teeth/list');