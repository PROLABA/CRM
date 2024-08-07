import {T_PromiseStatus, I_ResponseError} from "@/types/api.ts";
import {createSlice} from "@reduxjs/toolkit";
import {getPriceTypeList} from "@/store/priceType/priceTypeTanks.ts";
import {I_PriceType} from "@/types/clients.ts";
export interface I_TeethState {
    priceTypeList: I_PriceType[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}
export const initialTeethState: I_TeethState = {
    priceTypeList: [],
    status: 'fulfilled',
    error: false
}
export const priceTypeSlice = createSlice({
    name: 'priceType',
    initialState: initialTeethState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPriceTypeList.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getPriceTypeList.fulfilled, (state, action) => {
            state.priceTypeList = action.payload.data
            state.status = 'fulfilled'
        })
        builder.addCase(getPriceTypeList.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })
    },
})


export default priceTypeSlice.reducer