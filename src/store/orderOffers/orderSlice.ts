import {I_ResponseError, T_PromiseStatus} from "@/types/api.ts";
import {createSlice} from "@reduxjs/toolkit";
import {I_OrderOffers} from "@/types/orders";
import {
    createOrderOffersThank,
    getOrderOffersListThank,
    updateOrderOffersByIDThank
} from "./orderThanks";

export interface I_OrderOffersState {
    orderOffersList: I_OrderOffers[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}

export const initialOrderOffersState: I_OrderOffersState = {
    orderOffersList: [],
    status: 'fulfilled',
    error: false
}
export const orderOffersSlice = createSlice({
    name: 'orders',
    initialState: initialOrderOffersState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateOrderOffersByIDThank.pending, (state) => {
            state.status = 'pending'
            console.log('pe')
        })
        builder.addCase(updateOrderOffersByIDThank.fulfilled, (state, action) => {
            if (action.payload.error) {
                state.status = 'rejected'
            } else {
                state.orderOffersList = state.orderOffersList.map(o => {
                    return o.ID === action.payload.data.ID ? action.payload.data : o
                })
                state.status = 'fulfilled'
            }
            console.log('fu')
        })
        builder.addCase(updateOrderOffersByIDThank.rejected, (state, action) => {
            state.orderOffersList = [...state.orderOffersList]
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })


        builder.addCase(getOrderOffersListThank.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getOrderOffersListThank.fulfilled, (state, action) => {
            state.orderOffersList = action.payload.data
            state.status = 'fulfilled'
        })
        builder.addCase(getOrderOffersListThank.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })


        builder.addCase(createOrderOffersThank.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(createOrderOffersThank.fulfilled, (state, action) => {
            state.orderOffersList = [...state.orderOffersList, action.payload.data]
            window.location.replace(`/orders/${action.payload.data.ID}`)
            state.status = 'fulfilled'
        })
        builder.addCase(createOrderOffersThank.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })
    },
})


export default orderOffersSlice.reducer