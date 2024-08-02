import {FC, useEffect} from "react";
import {ContentHeader} from "@/widgets/ContentHeader";
import {Flex} from "antd";
import {Label} from "@/ui/label";
import {Button} from "@/ui/Button";
import {ReactComponent as Print} from '@/assets/print.svg'
import {PageHoc} from "@/hooks/pageHOK.tsx";
import {TableSortableWidget} from "@/widgets/Table/Sortable";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks";
import {createOrderThank, getOrderListThank} from "@/store/orders/orderThanks";
import {mokColumns} from "@/mock/columns";
import {mapOrderListToTable} from "@/helpers/orderListMap";

export const OrdersPage: FC = PageHoc(() => {
    // const navigate = useNavigate();
    const {order: {orderList}, auth: {ID}} = useAppSelector(state => state)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getOrderListThank({}))
    }, [dispatch])

    const formattedOrderList: object[] = mapOrderListToTable(orderList);
    const createOrder = () => {
        dispatch(createOrderThank({
            data: {
                CREATED_USER_ID: ID
            }
        }))
    }

    return (
        <>
            <ContentHeader>
                <Button label="Создать"
                        background={"light"}
                        onClick={createOrder}
                />
                <Flex gap={22}
                      align={'center'}
                      className="content-header-actions"
                >
                    <Button label="Распечатать"
                            background={"white"}
                            icon={<Print />}
                    />
                    <Label label="В работе"
                           background={"light"}
                    />
                </Flex>
            </ContentHeader>
            <TableSortableWidget data={formattedOrderList}
                                 columns={mokColumns}
            />
        </>
    )
})