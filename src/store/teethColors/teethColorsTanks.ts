import {I_TeethColor} from "@/types/teeth.ts";
import {mainThank} from "@/store/mainThank.ts";
import {A_GET_LIST, HLBL_ID_TeethColors, R_HLBL} from "@/store/constants.ts";
import {I_ListParams} from "@/types/api.ts";

export const getTeethColorsList = mainThank<I_TeethColor[], I_ListParams<I_TeethColor>>(`${R_HLBL}/${HLBL_ID_TeethColors}${A_GET_LIST}`, "POST");