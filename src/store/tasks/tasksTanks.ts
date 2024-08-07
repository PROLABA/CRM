import {mainThank} from "@/store/mainThank.ts";
import {A_GET_LIST, HLBL_ID_Tasks, R_HLBL} from "@/store/constants.ts";
import {I_Task} from "@/types/task.ts";
import {I_ListParams} from "@/types/api.ts";

export const getTasksList = mainThank<I_Task[], I_ListParams<I_Task>>(`${R_HLBL}/${HLBL_ID_Tasks}${A_GET_LIST}`, "POST");