import {FC} from "react";
import {ContentHeader} from "@/widgets/ContentHeader";
import {Flex} from "antd";
import {Label} from "@/ui/label";
import {Button} from "@/ui/Button";
import {ReactComponent as Print} from '@/assets/print.svg'
import {PageHoc} from "@/hooks/pageHOK.tsx";
import {TableSortableWidget} from "@/widgets/Table/Orders";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks";
import {createOrderThank} from "@/store/orders/orderThanks";
export const OrdersPage: FC = PageHoc(() => {
    // const navigate = useNavigate();
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
            <TableSortableWidget />
        </>
    )
})