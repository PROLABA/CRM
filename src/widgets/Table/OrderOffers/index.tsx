import {FC, useEffect} from "react";
import {I_Order, I_OrderOffers} from "@/types/orders.ts";
import {Flex, Select, Table, Typography} from "antd";
import {Button} from "@/ui/Button";
import {mapOrderOffersListToTable} from "@/helpers/orderOffersListMap.ts";
import {InputAsync} from "@/ui/InputAsync";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks.ts";
import {getOrderOffersListThank, updateOrderOffersByIDThank} from "@/store/orderOffers/orderThanks.ts";
import {updateOrderByIDThank} from "@/store/orders/orderThanks.ts";
import {teethHoc} from "@/hooks/TeethHOK.tsx";

export const TableOffersWidget: FC<{ order: I_Order }> = ({order}) => {
    const dispatch = useAppDispatch()
    const {orderOffersList} = useAppSelector(state => state.orderOffers)
    // const {teethList} = useAppSelector(state => state.teeth)
    useEffect(() => {
        dispatch(getOrderOffersListThank({
            data: {
                filter: {
                    ID: order.ORDER_OFFERS_IDS
                },
                GET_PARENTS: true
            }
        }))
    }, [dispatch, order.ID, order.ORDER_OFFERS_IDS]);
    const formattedList: I_OrderOffers[] = mapOrderOffersListToTable(orderOffersList ?? []);
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
                <Table tableLayout={"fixed"}
                       columns={[
                           {
                               title: 'Операция',
                               dataIndex: 'NAME',
                               key: 'NAME',
                           },
                           {
                               title: 'Кол-во',
                               dataIndex: 'COUNT',
                               key: 'COUNT',
                               render: (val: number, row) => <InputAsync
                                   ID={order.ID + "COUNT"}
                                   value={val}
                                   onChange={(newVal) => {
                                       dispatch(updateOrderOffersByIDThank({
                                           ID: row.ID,
                                           data: {
                                               COUNT: newVal
                                           }
                                       }))
                                   }}
                               />
                           },
                           {
                               title: 'Цена',
                               dataIndex: 'PRICE',
                               key: 'PRICE',
                               render: (val: number, row) => <InputAsync
                                   ID={order.ID + "PRICE"}
                                   value={val}
                                   onChange={(newVal) => {
                                       dispatch(updateOrderOffersByIDThank({
                                           ID: row.ID,
                                           data: {
                                               PRICE: newVal
                                           }
                                       }))
                                   }}
                               />
                           },
                           {
                               title: 'Зубы',
                               dataIndex: 'TEETH_IDS',
                               key: 'TEETH_IDS',
                               render: (val: I_OrderOffers['TEETH_IDS'], row) => () => teethHoc(({teethList})=><Select
                                   mode="multiple"
                                   allowClear
                                   style={{width: '100%'}}
                                   placeholder="Зубы"
                                   defaultValue={val}
                                   onChange={(newVal) => {
                                       dispatch(updateOrderOffersByIDThank({
                                           ID: row.ID,
                                           data: {
                                               TEETH_IDS: newVal
                                           }
                                       }))
                                   }}
                                   options={teethList}
                               />)
                           },
                       ]}
                       pagination={false}
                       dataSource={formattedList}
                />
                <Flex align={'center'}
                      justify={'space-between'}
                      className="table-bottom"
                >
                    <Button label={'Добавить'}
                            background={'accent'}
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