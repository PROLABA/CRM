import {FC, useEffect} from "react";
import {I_Order} from "@/types/orders.ts";
import {Flex, Typography} from "antd";
import {InputAsync} from "@/ui/InputAsync";
import {useAppDispatch} from "@/hooks/storeHooks.ts";
import {createOrderOffersThank, getOrderOffersListThank} from "@/store/orderOffers/orderThanks.ts";
import {updateOrderByIDThank} from "@/store/orders/orderThanks.ts";
import {OrderOffersTable} from "@/widgets/Table/OrderOffers/Table.tsx";
import {Button} from "@/ui/Button";

export const TableOffersWidget: FC<{ order: I_Order }> = ({order}) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getOrderOffersListThank({
            data: {
                filter: {
                    ORDER_ID: order.ID
                },
                GET_PARENTS: true
            }
        }))
    }, [dispatch, order.ID, order.ORDER_OFFERS_IDS]);
    return (
        <Flex gap={12}
              className={"order-table-offers"}
              align={'start'}
              vertical={true}
        >
            <Flex justify={'space-between'}
                  style={{
                      width: '100%'
                  }}
            >
                <Typography.Text className={'section-title'}>Содержание заказа</Typography.Text>
                <Flex gap={15}
                      className="add-percent"
                      align={'center'}
                >
                    <span>Надбавка / Скидка</span>
                    <InputAsync value={order.BONUS}
                                ID={order.ID + 'BONUS'}
                                onChange={(newVal) => {
                                    dispatch(updateOrderByIDThank({
                                        ID: order.ID,
                                        data: {
                                            BONUS: newVal
                                        }
                                    }))
                                }}
                                config={{
                                    addonBefore: '%',
                                    max: 100,
                                    min: -100
                                }}
                    />
                </Flex>
            </Flex>
            <div className="table-wrap">


                <OrderOffersTable orderID={order.ID} />


                <Flex align={'center'}
                      justify={'space-between'}
                      className="table-bottom"
                >
                    <Button label={'Добавить'}
                            background={'accent'}
                            onClick={() => {
                                dispatch(createOrderOffersThank({
                                    data: {
                                        ORDER_ID: order.ID
                                    }
                                }))
                            }}
                    />
                    <Typography.Text style={{
                        background: '#F8F8FB',
                        borderRadius: '5px',
                        padding: '10px 12px'
                    }}
                    >
                        <span>Итого: </span>
                        <span><b>{order.PRICE ?? 0}</b> р.</span>
                    </Typography.Text>
                </Flex>
            </div>
        </Flex>
    )
}