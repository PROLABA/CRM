import {combineReducers, configureStore} from '@reduxjs/toolkit'
import teethSlice from "@/store/teeth/teethSlice.ts";
import authSlice from "@/store/auth/authSlice.ts";
import orderSlice from '@/store/orders/orderSlice';
import orderStatusSlice from "@/store/orderStatus/orderStatusSlice.ts";
import teethSectionsSlice from "@/store/teethSections/teethSectionsSlice.ts";
import tasksSlice from "@/store/tasks/tasksSlice.ts";
import clientsSlice from "@/store/clients/clientsSlice.ts";
import priceTypeSlice from "@/store/priceType/priceTypeSlice.ts";
import doctorsSlice from "@/store/doctors/userSlice.ts";
import technicianSlice from "@/store/technician/userSlice.ts";

const rootReducer = combineReducers(
    {
        teeth: teethSlice,
        teethSections: teethSectionsSlice,
        auth: authSlice,
        order: orderSlice,
        orderStatus: orderStatusSlice,
        tasks: tasksSlice,
        client: clientsSlice,
        priceType: priceTypeSlice,
        doctors: doctorsSlice,
        technician: technicianSlice
    }
);

export const store = configureStore({
    reducer: rootReducer,
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']