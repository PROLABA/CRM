import {FC} from "react";
import {Select} from "antd";
import {useAppDispatch} from "@/hooks/storeHooks.ts";
import {PriceTypeHOK} from "@/hooks/PriceTypeHOK.tsx";
import {updateClientByIDThank} from "@/store/clients/clientsTanks.ts";

export const PriceTypeSelect: FC<{
    client_id: number
    selected_id: number
}> = ({client_id, selected_id}) => {
    const dispatch = useAppDispatch()
    const OrderStatusComponent = PriceTypeHOK(selected_id, ({priceTypeList, selected}) => {
        if (!selected || !priceTypeList) return null
        return (
            <Select
                onSelect={(PRICE_TYPE_ID) => {
                    dispatch(updateClientByIDThank({
                            ID: client_id,
                            data: {
                                PRICE_TYPE_ID
                            }
                        })
                    )
                }}
                value={selected.ID}
                options={priceTypeList.map(o => ({
                    title: o.NAME,
                    label: o.NAME,
                    value: o.ID
                }))}
            />
        )
    })

    return <OrderStatusComponent />
}