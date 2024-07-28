import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "@/store/instance.ts";
import { I_Response, I_ResponseError } from "@/types/api.ts";

import {I_Teeth, I_TeethSectionsList} from "@/types/teeth.ts";

export const fetchTeethList: AsyncThunk<
    I_Response<I_Teeth[]>,
    void,
    {
        rejectValue: I_ResponseError | unknown
    }
> =
    createAsyncThunk(
        'teeth/fetchList',
        async (_, { rejectWithValue, fulfillWithValue }) => {

            try {
                const response = await
                    instance()
                        .get<I_Response<I_Teeth[]>>('/teeth/list')
                        .catch((e: I_ResponseError) => {
                            throw new Error(e.message)
                        })

                if (response.status !== 200) {
                    throw new Error("Server Error!");
                }
                if (response.data.error) {
                    return rejectWithValue(response.data)
                }
                return fulfillWithValue(response.data)
            } catch (err) {
                return rejectWithValue(err)
            }
        }
    )


export const fetchTeethSectionsList: AsyncThunk<
    I_Response<I_TeethSectionsList>,
    void,
    {
        rejectValue: I_ResponseError | unknown
    }
> =
    createAsyncThunk(
        'teeth/fetchListSections',
        async (_, { rejectWithValue, fulfillWithValue }) => {

            try {
                const response = await
                    instance()
                        .get<I_Response<I_TeethSectionsList>>('/teeth/sections_list')
                        .catch((e: I_ResponseError) => {
                            throw new Error(e.message)
                        })

                if (response.status !== 200) {
                    throw new Error("Server Error!");
                }
                if (response.data.error) {
                    return rejectWithValue(response.data)
                }
                return fulfillWithValue(response.data)
            } catch (err) {
                return rejectWithValue(err)
            }
        }
    )