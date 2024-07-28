import {T_PromiseStatus, I_ResponseError} from "@/types/api.ts";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/store";
import {fetchTeethList, fetchTeethSectionsList} from "@/store/teeth/teethTanks.ts";
import {I_Teeth, I_TeethSectionsList} from "@/types/teeth.ts";

export interface I_TeethState {
    teethList: I_Teeth[]
    teethSections: I_TeethSectionsList
    status: T_PromiseStatus
    error: I_ResponseError | false
}

export const initialTeethState: I_TeethState = {
    teethList: [],
    teethSections: {
        rightTop: {
            ID: 1,
            label: "Верхние правые",
            items: []
        },
        leftTop: {
            ID: 2,
            label: "Верхние левые",
            items: []
        },
        rightBottom: {
            ID: 3,
            label: "Нижние правые",
            items: []
        },
        leftBottom: {
            ID: 4,
            label: "Верхние правые",
            items: []
        },
    },
    status: 'fulfilled',
    error: false
}
export const teethSlice = createSlice({
    name: 'teeth',
    initialState: initialTeethState,
    reducers: {
        log: (state) => console.log(state.teethList)
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTeethList.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchTeethList.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
            .addCase(fetchTeethList.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.teethList = action.payload.data
            })
            .addCase(fetchTeethSectionsList.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchTeethSectionsList.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
            .addCase(fetchTeethSectionsList.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.teethSections = action.payload.data
            })
    }
})

export const {log} = teethSlice.actions

export const selectTeethList = (state: RootState) => {
    return state.teeth.teethList
}

export default teethSlice.reducer