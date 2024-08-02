import {I_OrderStatus} from "@/types/orders";
import {mainThank} from "@/store/mainThank.ts";
import {A_GET_LIST, R_ORDER_STATUS} from "@/store/constants.ts";



export const getOrderStatusListThank = mainThank<I_OrderStatus[]>(`${R_ORDER_STATUS}${A_GET_LIST}`, "get");
