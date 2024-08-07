import {I_Order} from "@/types/orders";
import {mainThank} from "@/store/mainThank.ts";
import {A_CREATE, A_GET_LIST, A_UPDATE, HLBL_ID_Order, R_HLBL} from "@/store/constants.ts";
import {I_ListParams} from "@/types/api.ts";


export const getOrderListThank = mainThank<I_Order[], I_ListParams<I_Order>>(`${R_HLBL}/${HLBL_ID_Order}${A_GET_LIST}`, "POST");
export const updateOrderByIDThank = mainThank<I_Order, Partial<I_Order>>(`${R_HLBL}/${HLBL_ID_Order}${A_UPDATE}`, "put");
export const createOrderThank = mainThank<I_Order, Partial<I_Order>>(`${R_HLBL}/${HLBL_ID_Order}${A_CREATE}`, "POST");
