import { I_Order } from "@/types/orders";
import { getNormalaizeDateDMY } from "./normalizeDate";

export const mapOrderListToTable = (orderList: I_Order[]) => {
    return orderList.map((order) => {
        const {
            ID,
            DATE_CREATE,
            CLIENT_ID,
            CLIENT_USER_ID,
            PATIENT_USER_ID,
            DATE_TEST,
            DATE_CLOSED,
            PAYMENT_DATE,
            PRICE,
            STATUS_ID
        } = order;
        const normalizeDateCreate = getNormalaizeDateDMY(DATE_CREATE);
        const normolizeDateTest = getNormalaizeDateDMY(DATE_TEST);
        const normolizeDateClosed = getNormalaizeDateDMY(DATE_CLOSED);

        return {
            ID,
            DATE_CREATE: normalizeDateCreate,
            STATUS_ID,
            DATE_CLOSED: normolizeDateClosed,
            PAYMENT_DATE,
            PRICE,
            DATE_TEST: normolizeDateTest,
            CLIENT_ID,
            CLIENT_USER_ID,
            PATIENT_USER_ID,
        };
    });
};