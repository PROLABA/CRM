import {I_OrderStatus} from "@/types/orders";
import {mainThank} from "@/store/mainThank.ts";
import {A_GET_LIST, HLBL_ID_OrderStatus, R_HLBL} from "@/store/constants.ts";
import {I_ListParams} from "@/types/api.ts";



export const getOrderStatusListThank = mainThank<I_OrderStatus[], I_ListParams<I_OrderStatus>>(`${R_HLBL}/${HLBL_ID_OrderStatus}${A_GET_LIST}`, "post");
