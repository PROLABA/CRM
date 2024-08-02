import {T_PromiseStatus, I_ResponseError} from "@/types/api.ts";
import {createSlice} from "@reduxjs/toolkit";
import {I_OrderStatus} from "@/types/orders";
import {getOrderStatusListThank} from "@/store/orderStatus/orderStatusThanks.ts";

export interface I_OrderStatusState {
    orderStatusList: I_OrderStatus[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}

export const initialOrderState: I_OrderStatusState = {
    orderStatusList: [],
    status: 'fulfilled',
    error: false
}
export const orderStatusSlice = createSlice({
    name: 'orders',
    initialState: initialOrderState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOrderStatusListThank.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getOrderStatusListThank.fulfilled, (state, action) => {
            state.orderStatusList = action.payload.data
            state.status = 'fulfilled'
        })
        builder.addCase(getOrderStatusListThank.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })

    },
})


export default orderStatusSlice.reducer