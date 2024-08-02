import { I_Order } from "@/types/orders";
import { getNormalizeDateDMY } from "./normalizeDate";

export const mapOrderListToTable = (orderList: I_Order[]): object[] => {
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
        const normalizeDateCreate = getNormalizeDateDMY(DATE_CREATE);
        const normalizeDateTest = getNormalizeDateDMY(DATE_TEST);
        const normalizeDateClosed = getNormalizeDateDMY(DATE_CLOSED);

        return {
            ID,
            DATE_CREATE: normalizeDateCreate,
            STATUS_ID,
            DATE_CLOSED: normalizeDateClosed,
            PAYMENT_DATE,
            PRICE,
            DATE_TEST: normalizeDateTest,
            CLIENT_ID,
            CLIENT_USER_ID,
            PATIENT_USER_ID,
        };
    });
};