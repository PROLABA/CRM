import { T_PromiseStatus, I_ResponseError } from "@/types/api.ts";
import { createSlice } from "@reduxjs/toolkit";
import { I_TeethSection } from "@/types/teeth.ts";

import {getTeethSectionsList} from "@/store/teethSections/teethTanks.ts";

export interface I_TeethState {
    teethSectionsList: I_TeethSection[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}

export const initialTeethState: I_TeethState = {
    teethSectionsList: [],
    status: 'fulfilled',
    error: false
}
export const teethSectionsSlice = createSlice({
    name: 'teethSections',
    initialState: initialTeethState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTeethSectionsList.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getTeethSectionsList.fulfilled, (state, action) => {
            state.teethSectionsList = action.payload.data
            state.status = 'fulfilled'
        })
        builder.addCase(getTeethSectionsList.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })
    },
})


export default teethSectionsSlice.reducer