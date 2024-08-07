import {FC, useEffect, useState} from "react";
import {TeethGridWidget} from "@/widgets/Teeth/Grid";
import {ContentHeader} from "@/widgets/ContentHeader";
import {Flex} from "antd";
import {Label} from "@/ui/label";
import {Button} from "@/ui/Button";
import {ReactComponent as ArrowLong} from '@/assets/arrow-long.svg'
import {ReactComponent as Print} from '@/assets/print.svg'
import {useNavigate, useParams} from "react-router-dom";
import {PageHoc} from "@/hooks/pageHOK.tsx";
import './style.scss'
import {FilesWidget} from "@/widgets/Files";
import {TableOrderWorksWidget} from "@/widgets/Table/OrderWorks";
import {TableOffersWidget} from "@/widgets/Table/OrderOffers";
import {TextWidget} from "@/widgets/Text";
import {OrderWidget} from "@/widgets/OrderForm";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks.ts";
import {getOrderListThank} from "@/store/orders/orderThanks.ts";
import {I_Order} from "@/types/orders.ts";

export const OrderBoardPage: FC = PageHoc(() => {
    const navigate = useNavigate();
    const {orderList} = useAppSelector(state => state.order)
    const dispatch = useAppDispatch();
    const {id} = useParams();

    const [order, setOrder] = useState<I_Order | undefined>()
    useEffect(() => {
        if (orderList.length === 0) {
            dispatch(getOrderListThank({}))
        }
        if (id) {
            setOrder(orderList.find(o => o.ID === Number(id)))
        }
    }, [dispatch, orderList, id])
    if (!id || !order) return null
    return (
        <>
            <ContentHeader>
                <Button label="Назад"
                        background={"light"}
                        icon={<ArrowLong />}
                        onClick={() => navigate("/orders")}
                />
                <Flex gap={22}
                      align={'center'}
                      className="content-header-actions"
                >
                    <Button label="Распечатать"
                            background={"white"}
                            icon={<Print />}
                            onClick={() => navigate(`/print/${id}`)}
                    />
                    <Label label="В работе"
                           background={"light"}
                    />
                </Flex>
            </ContentHeader>
            <pre>{order?.ID}</pre>
            <pre>{order?.DATE_CREATE}</pre>
            <div className={"order-board"}>
                <OrderWidget />
                <TeethGridWidget />
                <FilesWidget />
                <TableOrderWorksWidget />
                <TableOffersWidget />
                <TextWidget />
            </div>
        </>
    )
})