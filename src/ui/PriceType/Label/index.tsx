import {FC} from "react";
import {PriceTypeHOK} from "@/hooks/PriceTypeHOK.tsx";

export const PriceTypeLabel: FC<{
    selected_id: number
}> = ({selected_id}) => {
    const OrderStatusComponent = PriceTypeHOK(selected_id, ({selected}) => {
        if (!selected) return null
        return (
            <span className={`label-item`}>{selected.NAME}</span>
        )
    })
    return <OrderStatusComponent />
}