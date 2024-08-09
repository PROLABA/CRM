import {InputAsync} from "@/ui/InputAsync";
import {updateOrderOffersByIDThank} from "@/store/orderOffers/orderThanks.ts";
import {I_Order, I_OrderOffers} from "@/types/orders.ts";
import {TeethSelect} from "@/entities/TeethSelect";
import {Select, Table} from "antd";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks.ts";
import {mapOrderOffersListToTable} from "@/helpers/orderOffersListMap.ts";
import {FC} from "react";


export const OrderOffersTable: FC<{
    orderID: I_Order['ID']
}> = ({orderID}) => {
    const dispatch = useAppDispatch()
    const {orderOffersList} = useAppSelector(state => state.orderOffers)
    const {offersList} = useAppSelector(state => state.offers)
    const formattedList: I_OrderOffers[] = mapOrderOffersListToTable(orderOffersList ?? []);
    return (
        <Table tableLayout={"fixed"}
               columns={[
                   {
                       title: 'Операция',
                       dataIndex: 'NAME',
                       key: 'NAME',
                       render: (_, row) => <Select
                           allowClear
                           style={{width: '100%'}}
                           placeholder="Операция"
                           labelRender={(o)=>o.label}
                           defaultValue={row.ENTITY_ID}
                           onChange={(newVal) => {
                               dispatch(updateOrderOffersByIDThank({
                                   ID: row.ID,
                                   data: {
                                       ENTITY_ID: newVal
                                   }
                               }))
                           }}
                           options={offersList.map(t => ({
                               value: t.ID,
                               label: t.NAME,
                               title: t.NAME
                           }))}
                       />
                   },
                   {
                       title: 'Кол-во',
                       dataIndex: 'COUNT',
                       key: 'COUNT',
                       render: (val: number, row) => <InputAsync
                           ID={orderID + "COUNT"}
                           value={val}
                           onChange={(newVal) => {
                               dispatch(updateOrderOffersByIDThank({
                                   ID: row.ID,
                                   data: {
                                       COUNT: newVal
                                   }
                               }))
                           }}
                       />
                   },
                   {
                       title: 'Цена',
                       dataIndex: 'PRICE',
                       key: 'PRICE',
                       render: (val: number, row) => <InputAsync
                           ID={orderID + "PRICE"}
                           value={val}
                           onChange={(newVal) => {
                               dispatch(updateOrderOffersByIDThank({
                                   ID: row.ID,
                                   data: {
                                       PRICE: newVal
                                   }
                               }))
                           }}
                       />
                   },
                   {
                       title: 'Зубы',
                       dataIndex: 'TEETH_IDS',
                       key: 'TEETH_IDS',
                       render: (val: I_OrderOffers['TEETH_IDS'], row) =>
                           <TeethSelect value={val}
                                        onChange={(newVal) => {
                                            dispatch(updateOrderOffersByIDThank({
                                                ID: row.ID,
                                                data: {
                                                    TEETH_IDS: newVal
                                                }
                                            }))
                                        }}
                           />
                   }
               ]}
               pagination={false}
               dataSource={formattedList}
        />
    )
}