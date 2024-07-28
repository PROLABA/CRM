import {combineReducers, configureStore} from '@reduxjs/toolkit'
import teethSlice from "@/store/teeth/teethSlice.ts";
import {authSlice} from "@/store/auth/authSlice.ts";
const rootReducer = combineReducers(
    {
        teeth: teethSlice,
        auth: authSlice
    });
export const store = configureStore({
    reducer: rootReducer,

})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']