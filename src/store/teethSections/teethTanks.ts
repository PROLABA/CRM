import {I_TeethSection} from "@/types/teeth.ts";
import {mainThank} from "@/store/mainThank.ts";
import {A_GET_LIST, HLBL_ID_TeethSections, R_HLBL} from "@/store/constants.ts";
import {I_ListParams} from "@/types/api.ts";

export const getTeethSectionsList = mainThank<I_TeethSection[], I_ListParams<I_TeethSection>>(`${R_HLBL}/${HLBL_ID_TeethSections}${A_GET_LIST}`, "POST");
