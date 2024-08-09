import {T_PromiseStatus, I_ResponseError} from "@/types/api.ts";
import {createSlice} from "@reduxjs/toolkit";
import {getOfferPriceListThank} from "@/store/offersPrice/offersPriceTanks.ts";
import {I_OffersPrice} from "@/types/priceType.ts";
export interface I_OffersPriceState {
    offersPriceList: I_OffersPrice[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}
export const initialOffersPriceState: I_OffersPriceState = {
    offersPriceList: [],
    status: 'fulfilled',
    error: false
}
export const offersPriceSlice = createSlice({
    name: 'offersPrice',
    initialState: initialOffersPriceState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOfferPriceListThank.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getOfferPriceListThank.fulfilled, (state, action) => {
            state.offersPriceList = action.payload.data
            state.status = 'fulfilled'
        })
        builder.addCase(getOfferPriceListThank.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })
    },
})


export default offersPriceSlice.reducer