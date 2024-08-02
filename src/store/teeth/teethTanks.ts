import {I_Teeth, I_TeethSection} from "@/types/teeth.ts";
import {mainThank} from "@/store/mainThank.ts";
import {A_GET_LIST, R_TEETH} from "@/store/constants.ts";

export const getTeethSections = mainThank<I_TeethSection[]>(`${R_TEETH}/sections_list`, "get");
export const getTeethList = mainThank<I_Teeth[]>(`${R_TEETH}${A_GET_LIST}`, "get");