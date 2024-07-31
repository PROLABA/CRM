
import { mainThank } from "../teeth/teethTanks";
import { I_Order } from "@/types/orders";



export const getOrderList = mainThank<I_Order[]>('/orders/list');
