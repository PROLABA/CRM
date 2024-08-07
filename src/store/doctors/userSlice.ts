import {T_PromiseStatus, I_ResponseError} from "@/types/api.ts";
import {createSlice} from "@reduxjs/toolkit";
import {I_User} from "@/types/user.ts";
import {getDoctorsListThank} from "@/store/doctors/userTanks.ts";

export interface I_DoctorState {
    doctorsList: I_User[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}

export const initialDoctorState: I_DoctorState = {
    doctorsList: [],
    status: 'fulfilled',
    error: false
}
export const doctorsSlice = createSlice({
    name: 'doctor',
    initialState: initialDoctorState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDoctorsListThank.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getDoctorsListThank.fulfilled, (state, action) => {
            state.doctorsList = action.payload.data
            state.status = 'fulfilled'
        })
        builder.addCase(getDoctorsListThank.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })

    },
})


export default doctorsSlice.reducer