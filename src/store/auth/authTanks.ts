import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "@/store/instance.ts";
import { I_Response } from "@/types/api.ts";
import { I_Auth } from "@/store/auth/authSlice.ts";
import { notification } from "antd";

export const userLogin: AsyncThunk<
    I_Auth,
    {
        login: string,
        password: string
    },
    object> = createAsyncThunk(
        'user/login',
        async ({ login, password }, { rejectWithValue }) => {
            try {
                const { data } = await instance().post<I_Response<I_Auth>>('/user/login', {
                    LOGIN: login,
                    PASSWORD: password
                })
                if (data.error) {
                    if (data.data?.length) {
                        data.data.map((e) => {
                            notification.error({
                                message: data.message,
                                description: e.message,
                                key: e.message
                            })
                        })
                    } else {
                        notification.error({
                            message: data.message,
                            key: data.message
                        })
                    }
                    return rejectWithValue(data)
                }
                notification.success({
                    message: 'Добро пожаловать ' + (data.data.user ? data.data.user.NAME : '')
                })
                return data.data
            } catch (error) {
                return rejectWithValue(error)
            }
        }
    )