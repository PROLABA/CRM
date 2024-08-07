import {FC} from "react";
import {ContentHeader} from "@/widgets/ContentHeader";
import {Button} from "@/ui/Button";
import {PageHoc} from "@/hooks/pageHOK.tsx";
import {TableOrderWidget} from "@/widgets/Table/Orders";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks";
import {createOrderThank} from "@/store/orders/orderThanks";
import {SearchWidget} from "@/widgets/Search";
export const OrdersPage: FC = PageHoc(() => {
    const {ID} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch();

    const createOrder = () => {
        dispatch(createOrderThank({
            data: {
                CREATED_USER_ID: ID ?? ''
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
                <SearchWidget/>
            </ContentHeader>
            <TableOrderWidget />
        </>
    )
})