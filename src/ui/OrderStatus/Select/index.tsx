import {FC} from "react";
import {OrderStatusHOK} from "@/hooks/OrderStatusHOK.tsx";
import {Select} from "antd";
import {useAppDispatch} from "@/hooks/storeHooks.ts";
import {updateOrderByIDThank} from "@/store/orders/orderThanks.ts";

export const OrderStatusSelect: FC<{
    order_id: number
    selected_id: number
}> = ({order_id, selected_id}) => {
    const dispatch = useAppDispatch()
    const OrderStatusComponent = OrderStatusHOK(selected_id, ({orderStatusList, selected}) => {
        if (!selected || !orderStatusList) return null
        return (
            <Select
                onSelect={(STATUS_ID) => {
                    dispatch(updateOrderByIDThank({
                            ID: order_id,
                            data: {
                                STATUS_ID
                            }
                        })
                    )
                }}
                value={selected.ID}
                options={orderStatusList.map(o => ({
                    title: o.NAME,
                    label: o.NAME,
                    value: o.ID
                }))}
            />
        )
    })

    return <OrderStatusComponent />
}