import {ComponentType, FC} from "react";
import {useAppSelector} from "@/hooks/storeHooks.ts";
import {I_OrderStatus} from "@/types/orders.ts";

export function OrderStatusHOK<WrappedProps>(
    selected: number,
    WrappedComponent: ComponentType<{ orderStatusList: I_OrderStatus[], selected: I_OrderStatus }>
): FC<WrappedProps> {
    const WrapperComponent: FC<WrappedProps> = () => {
        const {orderStatusList, status} = useAppSelector(state => state.orderStatus)
        const selectedStatus = orderStatusList.find(item => item.ID === selected) ?? orderStatusList[0]
        if (status !== 'fulfilled' || !selected || !orderStatusList) return null
        return <WrappedComponent orderStatusList={orderStatusList}
                                 selected={selectedStatus}
        />
    }
    return WrapperComponent
}
