import {createSlice} from "@reduxjs/toolkit";
import {I_Auth} from "@/types/user.ts";
import {AuthToken, AuthUserID} from "@/store/instance.ts";
import {T_PromiseStatus} from "@/types/api.ts";
import {userLoginThank} from "@/store/auth/authTanks.ts";
import {notification} from "antd";

export interface I_AuthState extends I_Auth {
    status: T_PromiseStatus
}

export const initialAuthState: I_AuthState = {
    ID: AuthUserID(),
    token: AuthToken(),
    user: null,
    status: 'fulfilled'
}
export const authSlice = createSlice({
    name: 'teeth',
    initialState: initialAuthState,
    reducers: {
        logout: (state) => {
            state.token = null
            state.user = null
            state.ID = "0"
            AuthToken('del')
            AuthUserID('del')
        }
    },
    extraReducers: builder => {
        builder.addCase(userLoginThank.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(userLoginThank.fulfilled, (state, action) => {
            if (action.payload.error || !action.payload.data.token || !action.payload.data.ID) {
                console.log(action.payload)
            } else {
                notification.success({
                    message: `Добро пожаловать ${action.payload.data.user?.NAME} ${action.payload.data.user?.LAST_NAME ?? ''}`,
                    key: 'Добро пожаловать'
                })
                state.token = action.payload.data.token
                state.ID = action.payload.data.ID
                state.user = action.payload.data.user
                AuthToken(action.payload.data.token)
                AuthUserID(action.payload.data.ID)
            }
        })
        builder.addCase(userLoginThank.rejected, (state, action) => {
            console.log(action.payload)
            state.status = 'rejected'
        })
    }
})

export const {logout} = authSlice.actions


export default authSlice.reducer