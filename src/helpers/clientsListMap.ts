import {I_Client} from "@/types/clients.ts";

export const mapClientsListToTable = (list: I_Client[]): I_Client[] => {
    return list.map((work) => {
        const {
            ID,
            NAME,
            JOIN,
            ADDRESS,
            PRICE_TYPE_ID
        } = work;
        return {
            ID,
            NAME,
            PRICE_TYPE_ID,
            PRICE_TYPE: JOIN?.PRICE_TYPE_ID.NAME,
            ADDRESS
        };
    });
};