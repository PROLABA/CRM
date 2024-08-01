import { FC, useEffect } from "react";
import { ContentHeader } from "@/widgets/ContentHeader";
import { Flex } from "antd";
import { Label } from "@/ui/label";
import { Button } from "@/ui/Button";
import { ReactComponent as Print } from '@/assets/print.svg'
import { useNavigate } from "react-router-dom";
import { PageHoc } from "@/hooks/pageHOK.tsx";
import { TableSortableWidget } from "@/widgets/Table/Sortable";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { getOrderList } from "@/store/orders/orderThanks";
import { mokColumns } from "@/mock/columns";
import { mapOrderListToTable } from "@/helpers/orderListMap";

export const OrdersPage: FC = PageHoc(() => {
    const navigate = useNavigate();
    const { orderList, error, status } = useAppSelector(state => state.order)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getOrderList())
    }, [dispatch, getOrderList])

    const formatedOrderList = mapOrderListToTable(orderList);
    console.table(formatedOrderList)


    return (
        <>
            <ContentHeader>
                <Button label="Создать"
                    background="light"
                    onClick={() => navigate("/orders/create")}
                />
                <Flex gap={22}
                    align={'center'}
                    className="content-header-actions"
                >
                    <Button label="Распечатать"
                        background="white"
                        icon={<Print />}
                    />
                    <Label label="В работе"
                        background="light"
                    />
                </Flex>
            </ContentHeader>
            <TableSortableWidget data={formatedOrderList} columns={mokColumns} />
        </>
    )
})