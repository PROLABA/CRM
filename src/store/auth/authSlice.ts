import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/store";
import {I_User} from "@/types/user.ts";
import {userLogin} from "@/store/auth/authTanks.ts";
import {AuthToken} from "@/store/instance.ts";
import {T_PromiseStatus} from "@/types/api.ts";
export interface I_Auth {
    ID: number
    token: string | null
    user: I_User | false
}
export interface I_AuthState extends I_Auth {
    status: T_PromiseStatus
}

export const initialAuthState: I_AuthState = {
    ID: 0,
    token: AuthToken(),
    user: false,
    status: 'fulfilled'
}
export const authSlice = createSlice({
    name: 'teeth',
    initialState: initialAuthState,
    reducers: {
        logout: (state)=>{
            console.log('logout')
            state.token = null
            state.user = false
            state.ID = 0
            AuthToken('del')
        }
    },
    extraReducers: builder => {
        builder.addCase(userLogin.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
            if(action.payload.token){
                state.token = action.payload.token
                state.ID = action.payload.ID
                state.user = action.payload.user
                AuthToken(action.payload.token)
            }else{
                console.log(action.payload)
            }
        })
        builder.addCase(userLogin.rejected, (state, action) => {
            console.log(action.payload)
            state.status = 'rejected'
        })
    }
})

export const {logout} = authSlice.actions
export const selectTeethList = (state: RootState) => {
    return state.teeth.teethList
}

export default authSlice.reducer