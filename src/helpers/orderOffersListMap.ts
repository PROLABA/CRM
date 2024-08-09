import {I_OrderOffers} from "@/types/orders";

export const mapOrderOffersListToTable = (orderList: I_OrderOffers[]): I_OrderOffers[] => {

    return orderList.map(({
                              ID,
                              PRICE,
                              ENTITY_ID,
                              TEETH_IDS,
                              COUNT,
                              ORDER_ID,
                              JOIN
                          }) => {
        return {
            ID,
            PRICE,
            ENTITY_ID,
            TEETH_IDS,
            ORDER_ID,
            NAME: JOIN?.ENTITY_ID?.NAME,
            COUNT
        };
    });
};