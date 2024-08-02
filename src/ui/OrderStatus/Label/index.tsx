import {FC} from "react";
import {OrderStatusHOK} from "@/hooks/OrderStatusHOK.tsx";

export const OrderStatusLabel: FC<{
    selected_id: number
}> = ({selected_id}) => {
    const OrderStatusComponent =  OrderStatusHOK(selected_id, ({ selected}) => {
        if(!selected) return null
        return (
            <span style={{background: selected.COLOR}}
                  className={`label-item`}
            >{selected.NAME}</span>
        )
    })
    return <OrderStatusComponent />
}