import { T_PromiseStatus, I_ResponseError } from "@/types/api.ts";
import { createSlice } from "@reduxjs/toolkit";
import { I_Order } from "@/types/orders";
import { getOrderList } from "./orderThanks";

export interface I_OrderhState {
    orderList: I_Order[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}

export const initialOrderState: I_OrderhState = {
    orderList: [],
    status: 'fulfilled',
    error: false
}
export const orderSlice = createSlice({
    name: 'orders',
    initialState: initialOrderState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOrderList.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getOrderList.fulfilled, (state, action) => {
            state.orderList = action.payload
            state.status = 'fulfilled'
        })
        builder.addCase(getOrderList.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })

    },
})


export default orderSlice.reducer