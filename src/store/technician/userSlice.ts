import {T_PromiseStatus, I_ResponseError} from "@/types/api.ts";
import {createSlice} from "@reduxjs/toolkit";
import {I_User} from "@/types/user.ts";
import {getTechnicianListThank} from "@/store/technician/userTanks.ts";

export interface I_TechnicianState {
    technicianList: I_User[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}

export const initialTechnicianState: I_TechnicianState = {
    technicianList: [],
    status: 'fulfilled',
    error: false
}
export const technicianSlice = createSlice({
    name: 'technician',
    initialState: initialTechnicianState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTechnicianListThank.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getTechnicianListThank.fulfilled, (state, action) => {
            state.technicianList = action.payload.data
            state.status = 'fulfilled'
        })
        builder.addCase(getTechnicianListThank.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })

    },
})


export default technicianSlice.reducer