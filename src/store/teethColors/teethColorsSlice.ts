import { T_PromiseStatus, I_ResponseError } from "@/types/api.ts";
import { createSlice } from "@reduxjs/toolkit";
import { I_TeethColor} from "@/types/teeth.ts";

import {getTeethColorsList} from "@/store/teethColors/teethColorsTanks.ts";

export interface I_TeethColorsState {
    teethColorsList: I_TeethColor[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}

export const initialTeethColorsState: I_TeethColorsState = {
    teethColorsList: [],
    status: 'fulfilled',
    error: false
}
export const teethColorsSlice = createSlice({
    name: 'teethColors',
    initialState: initialTeethColorsState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTeethColorsList.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getTeethColorsList.fulfilled, (state, action) => {
            state.teethColorsList = action.payload.data
            state.status = 'fulfilled'
        })
        builder.addCase(getTeethColorsList.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })
    },
})


export default teethColorsSlice.reducer