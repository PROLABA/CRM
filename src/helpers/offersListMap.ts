import {I_Offer} from "@/types/orders.ts";

export const mapOffersListToTable = (list: I_Offer[]): I_Offer[] => {
    return list.map((work) => {
        const {
            ID,
            NAME,
        } = work;
        return {
            ID,
            NAME,
        };
    });
};