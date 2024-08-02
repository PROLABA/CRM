import {I_Order} from "@/types/orders";
import {mainThank} from "@/store/mainThank.ts";
import {A_CREATE, A_GET_LIST, A_UPDATE, R_ORDER} from "@/store/constants.ts";


export const getOrderListThank = mainThank<I_Order[]>(`${R_ORDER}${A_GET_LIST}`, "get");
export const updateOrderByIDThank = mainThank<I_Order, Partial<I_Order>>(`${R_ORDER}${A_UPDATE}`, "put");
export const createOrderThank = mainThank<I_Order, Partial<I_Order>>(`${R_ORDER}${A_CREATE}`, "POST");
