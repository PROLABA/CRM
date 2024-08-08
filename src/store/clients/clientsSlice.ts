import {T_PromiseStatus, I_ResponseError} from "@/types/api.ts";
import {createSlice} from "@reduxjs/toolkit";
import {getClientsList, updateClientByIDThank} from "@/store/clients/clientsTanks.ts";
import type {I_Client} from "@/types/clients.ts";

export interface I_ClientsState {
    clientsList: I_Client[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}

export const initialClientsState: I_ClientsState = {
    clientsList: [],
    status: 'fulfilled',
    error: false
}
export const clientsSlice = createSlice({
    name: 'clients',
    initialState: initialClientsState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getClientsList.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getClientsList.fulfilled, (state, action) => {
            state.clientsList = action.payload.data
            state.status = 'fulfilled'
        })
        builder.addCase(getClientsList.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })
        builder.addCase(updateClientByIDThank.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(updateClientByIDThank.fulfilled, (state, action) => {
            if (action.payload.error) {
                state.status = 'rejected'
            } else {
                state.clientsList = state.clientsList.map(o => {
                    return o.ID === action.payload.data.ID ? action.payload.data : o
                })
                state.status = 'fulfilled'
            }

        })
        builder.addCase(updateClientByIDThank.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })
    },
})


export default clientsSlice.reducer