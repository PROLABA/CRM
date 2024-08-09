import {T_PromiseStatus, I_ResponseError} from "@/types/api.ts";
import {createSlice} from "@reduxjs/toolkit";
import {
    createOfferThank,
    deleteOfferByIDThank,
    getOffersListThank,
    updateOfferByIDThank
} from "@/store/offers/offersTanks.ts";
import {I_Offer} from "@/types/orders.ts";

export interface I_OfferState {
    offersList: I_Offer[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}

export const initialOffersState: I_OfferState = {
    offersList: [],
    status: 'fulfilled',
    error: false
}
export const offersSlice = createSlice({
    name: 'offers',
    initialState: initialOffersState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOffersListThank.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getOffersListThank.fulfilled, (state, action) => {
            state.offersList = action.payload.data
            state.status = 'fulfilled'
        })
        builder.addCase(getOffersListThank.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })

        builder.addCase(createOfferThank.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(createOfferThank.fulfilled, (state, action) => {
            state.offersList = [...state.offersList, action.payload.data]
            state.status = 'fulfilled'
        })
        builder.addCase(createOfferThank.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })

        builder.addCase(updateOfferByIDThank.pending, (state) => {
            state.status = 'pending'
            console.log('pe')
        })
        builder.addCase(updateOfferByIDThank.fulfilled, (state, action) => {
            if (action.payload.error) {
                state.status = 'rejected'
            } else {
                state.offersList = state.offersList.map(o => {
                    return o.ID === action.payload.data.ID ? action.payload.data : o
                })
                state.status = 'fulfilled'
            }
            console.log('fu')
        })
        builder.addCase(updateOfferByIDThank.rejected, (state, action) => {
            state.offersList = [...state.offersList]
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })

        builder.addCase(deleteOfferByIDThank.fulfilled, (state, action) => {
            state.offersList = state.offersList.filter(p => p.ID != action.payload.data.ID)
            state.status = 'fulfilled'
        })
    },
})


export default offersSlice.reducer