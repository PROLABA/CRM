import {I_ResponseError, T_PromiseStatus} from "@/types/api.ts";
import {createSlice} from "@reduxjs/toolkit";
import {I_Order} from "@/types/orders";
import {createOrderThank, deleteOrderByIDThank, getOrderListThank, updateOrderByIDThank} from "./orderThanks";

export interface I_OrderState {
    orderList: I_Order[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}

export const initialOrderState: I_OrderState = {
    orderList: [],
    status: 'fulfilled',
    error: false
}
export const orderSlice = createSlice({
    name: 'orders',
    initialState: initialOrderState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateOrderByIDThank.pending, (state) => {
            state.status = 'pending'
            console.log('pe')
        })
        builder.addCase(updateOrderByIDThank.fulfilled, (state, action) => {
            if (action.payload.error) {
                state.status = 'rejected'
            } else {
                state.orderList = state.orderList.map(o => {
                    return o.ID === action.payload.data.ID ? action.payload.data : o
                })
                state.status = 'fulfilled'
            }
            console.log('fu')
        })
        builder.addCase(updateOrderByIDThank.rejected, (state, action) => {
            state.orderList = [...state.orderList]
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })


        builder.addCase(getOrderListThank.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getOrderListThank.fulfilled, (state, action) => {
            state.orderList = action.payload.data
            state.status = 'fulfilled'
        })
        builder.addCase(getOrderListThank.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })


        builder.addCase(createOrderThank.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(createOrderThank.fulfilled, (state, action) => {
            state.orderList = [...state.orderList, action.payload.data]
            window.location.replace(`/orders/${action.payload.data.ID}`)
            state.status = 'fulfilled'
        })
        builder.addCase(createOrderThank.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })

        builder.addCase(deleteOrderByIDThank.fulfilled, (state, action) => {
            window.location.replace(`/orders`)
            state.orderList = state.orderList.filter(p => p.ID != action.payload.data.ID)
            state.status = 'fulfilled'
        })
    },
})


export default orderSlice.reducer