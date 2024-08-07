import {I_Teeth} from "@/types/teeth.ts";
import {mainThank} from "@/store/mainThank.ts";
import {A_GET_LIST, HLBL_ID_Teeth, R_HLBL} from "@/store/constants.ts";
import {I_ListParams} from "@/types/api.ts";

export const getTeethList = mainThank<I_Teeth[], I_ListParams<I_Teeth>>(`${R_HLBL}/${HLBL_ID_Teeth}${A_GET_LIST}`, "POST");