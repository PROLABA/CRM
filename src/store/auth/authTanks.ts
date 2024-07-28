import {AsyncThunk, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "@/store/instance.ts";
import {I_Response, I_ResponseError} from "@/types/api.ts";
import {I_AuthState} from "@/store/auth/authSlice.ts";

export const userLogin: AsyncThunk<
    I_Response<I_AuthState>,
    {
        login: string,
        password: string
    },
    {
        rejectValue: I_ResponseError | unknown
    }
> =
    createAsyncThunk(
        'user/login',
        async ({login, password}, {rejectWithValue, fulfillWithValue}) => {

            try {
                const response = await
                    instance()
                        .get<I_Response<I_AuthState[]>>('/user/login', {
                            data: {
                                LOGIN: login,
                                PASSWORD: password
                            }
                        })
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

