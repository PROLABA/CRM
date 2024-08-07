import {FC, useEffect} from "react";
import {Table} from "antd";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks.ts";
import {getOrderListThank} from "@/store/orders/orderThanks.ts";
import {mapOrderListToTable} from "@/helpers/orderListMap.ts";
import {mokColumns} from "@/mock/columns.tsx";

export const TableOrderWidget: FC = () => {
    const {orderList} = useAppSelector(state => state.order)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getOrderListThank({}))
    }, [dispatch])

    const formattedOrderList: object[] = mapOrderListToTable(orderList);
    return (
        <Table
            columns={mokColumns}
            dataSource={formattedOrderList}
            rowKey={'ID'}
            pagination={{}}
        />
    )
}