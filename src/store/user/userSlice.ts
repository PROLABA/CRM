import {T_PromiseStatus, I_ResponseError} from "@/types/api.ts";
import {createSlice} from "@reduxjs/toolkit";
import {I_User} from "@/types/user.ts";
import {getUserList} from "@/store/user/userTanks.ts";

export interface I_UserState {
    userList: I_User[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}

export const initialUserState: I_UserState = {
    userList: [],
    status: 'fulfilled',
    error: false
}
export const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserList.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getUserList.fulfilled, (state, action) => {
            state.userList = action.payload.data
            state.status = 'fulfilled'
        })
        builder.addCase(getUserList.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })

    },
})


export default userSlice.reducer