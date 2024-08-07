import { T_PromiseStatus, I_ResponseError } from "@/types/api.ts";
import { createSlice } from "@reduxjs/toolkit";
import type {I_Task} from "@/types/task.ts";
import {getTasksList} from "@/store/tasks/tasksTanks.ts";

export interface I_TaskState {
    tasksList: I_Task[]
    status: T_PromiseStatus
    error: I_ResponseError | false
}

export const initialTaskState: I_TaskState = {
    tasksList: [],
    status: 'fulfilled',
    error: false
}
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialTaskState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTasksList.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getTasksList.fulfilled, (state, action) => {
            state.tasksList = action.payload.data
            state.status = 'fulfilled'
        })
        builder.addCase(getTasksList.rejected, (state, action) => {
            state.error = action.payload as I_ResponseError
            state.status = 'rejected'
        })

    },
})


export default tasksSlice.reducer