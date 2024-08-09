import {T_PromiseStatus, I_ResponseError} from "@/types/api.ts";
import {createSlice} from "@reduxjs/toolkit";
import {createPriceTypeThank, deletePriceTypeByIDThank, getPriceTypeList} from "@/store/priceType/priceTypeTanks.ts";

import {I_PriceType} from "@/types/priceType.ts";

export interface I_PriceTypeState {
    priceTypeList: I_PriceType[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}

export const initialPriceTypeState: I_PriceTypeState = {
    priceTypeList: [],
    status: 'fulfilled',
    error: false
}
export const priceTypeSlice = createSlice({
    name: 'priceType',
    initialState: initialPriceTypeState,
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

        builder.addCase(createPriceTypeThank.fulfilled, (state, action) => {
            state.priceTypeList = [...state.priceTypeList, action.payload.data]
            state.status = 'fulfilled'
        })
        builder.addCase(deletePriceTypeByIDThank.fulfilled, (state, action) => {
            state.priceTypeList = state.priceTypeList.filter(p => p.ID != action.payload.data.ID)
            state.status = 'fulfilled'
        })
    },
})


export default priceTypeSlice.reducer