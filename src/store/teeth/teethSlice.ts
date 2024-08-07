import { T_PromiseStatus, I_ResponseError } from "@/types/api.ts";
import { createSlice } from "@reduxjs/toolkit";
import { I_Teeth } from "@/types/teeth.ts";

import { getTeethList } from "@/store/teeth/teethTanks.ts";

export interface I_TeethState {
    teethList: I_Teeth[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}

export const initialTeethState: I_TeethState = {
    teethList: [],
    status: 'fulfilled',
    error: false
}
export const teethSlice = createSlice({
    name: 'teeth',
    initialState: initialTeethState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTeethList.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getTeethList.fulfilled, (state, action) => {
            state.teethList = action.payload.data
            state.status = 'fulfilled'
        })
        builder.addCase(getTeethList.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })
    },
})


export default teethSlice.reducer