import { T_PromiseStatus, I_ResponseError } from "@/types/api.ts";
import { createSlice } from "@reduxjs/toolkit";
import { I_Teeth, I_TeethSection } from "@/types/teeth.ts";

import { getTeethList, getTeethSections } from "@/store/teeth/teethTanks.ts";

export interface I_TeethState {
    teethList: I_Teeth[]
    teethSections: I_TeethSection[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}

export const initialTeethState: I_TeethState = {
    teethList: [],
    teethSections: [],
    status: 'fulfilled',
    error: false
}
export const teethSlice = createSlice({
    name: 'teeth',
    initialState: initialTeethState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTeethSections.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getTeethSections.fulfilled, (state, action) => {
            state.teethSections = action.payload.data
            state.status = 'fulfilled'
        })
        builder.addCase(getTeethSections.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })
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