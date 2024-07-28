import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/store";
import {I_User} from "@/types/user.ts";
import {userLogin} from "@/store/auth/authTanks.ts";
import {fetchTeethList, fetchTeethSectionsList} from "@/store/teeth/teethTanks.ts";

export interface I_AuthState {
    ID: number
    token: string | null
    user: I_User | false
}

export const initialAuthState: I_AuthState = {
    ID: 0,
    token: '',
    user: false
}
export const authSlice = createSlice({
    name: 'teeth',
    initialState: initialAuthState,
    reducers: {
        login: (state, action: PayloadAction<{
            login: string,
            password: string
        }>) => {
            console.log(action)
            const loginRes = userLogin({login: action.payload.login, password: action.payload.password})
            console.log(loginRes)
            if (
                (action.payload.login === 'admin')
                && (action.payload.password === '0000')
            ) {
                const token = '111'
                state.token = token
                window.localStorage.setItem('auth_token', token)
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(userLogin.pending, (state) => {
                // state. = 'pending'
            })
            .addCase(userLogin.rejected, (state, action) => {
                // state.status = 'rejected'
                // state.error = action.payload
                console.log(action.payload)
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                console.log(action.payload.data)
                state.token = action.payload.data.token
                state.ID = action.payload.data.ID
                state.user = action.payload.data.user
            })
    }
})

export const {login} = authSlice.actions

export const selectTeethList = (state: RootState) => {
    return state.teeth.teethList
}

export default authSlice.reducer