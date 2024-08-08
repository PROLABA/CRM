import {DatePicker, Flex, Form, Select} from "antd";

import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks.ts";
import {updateOrderByIDThank} from "@/store/orders/orderThanks.ts";
import {FC, useEffect} from "react";
import {I_Order} from "@/types/orders.ts";
import {getClientsList} from "@/store/clients/clientsTanks.ts";
import {getDoctorsList} from "@/store/doctors/userTanks.ts";
import dayjs from 'dayjs';

export const OrderFormWidget: FC<{ order: I_Order }> = ({order}) => {
    const dispatch = useAppDispatch()
    const {clientsList} = useAppSelector(state => state.client)
    const {doctorsList} = useAppSelector(state => state.doctors)
    const {teethColorsList} = useAppSelector(state => state.teethColors)
    useEffect(() => {
        dispatch(getClientsList({}))
        dispatch(getDoctorsList())
    }, [dispatch])

    function updateOrder(fields: Partial<I_Order>) {
        dispatch(updateOrderByIDThank({
            ID: order.ID,
            data: fields
        }))
    }

    return (
        <div className={"order-form"}>
            <Form
                name="auth"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                initialValues={{remember: true}}
                autoComplete="off"
            >
                <Flex gap={15}
                      vertical={true}
                >
                    <Form.Item<I_Order>
                        name={'CLIENT_ID'}
                        label={'Клиент'}
                        layout={"vertical"}
                        key={'CLIENT_ID'}
                        initialValue={order.CLIENT_ID}
                    >
                        <Select
                            onSelect={(CLIENT_ID) => updateOrder({CLIENT_ID})}
                            options={clientsList.map(o => ({
                                title: o.NAME,
                                label: o.NAME,
                                value: o.ID
                            }))}
                        />
                    </Form.Item>
                    <Form.Item<I_Order>
                        name={'CLIENT_USER_ID'}
                        label={'Врач'}
                        layout={"vertical"}
                        key={'CLIENT_USER_ID'}
                        initialValue={order.CLIENT_USER_ID}
                    >
                        <Select
                            onSelect={(CLIENT_USER_ID) => updateOrder({CLIENT_USER_ID})}
                            options={doctorsList.map(o => ({
                                title: o.NAME,
                                label: o.NAME,
                                value: o.ID,
                            }))}
                        />
                    </Form.Item>
                    <hr />
                    <Form.Item<I_Order>
                        name={'DATE_TEST'}
                        label={'Дата и время сдачи работы'}
                        layout={"vertical"}
                        key={'DATE_TEST'}
                        initialValue={order.DATE_TEST ? dayjs(order.DATE_TEST, 'YYYY-MM-DDT00:00:00+03:00') : ''}
                    >
                        <DatePicker format={"DD.MM.YYYY"}
                                    onChange={(date) => updateOrder({DATE_TEST: date.format('YYYY-MM-DDT00:00:00+03:00')})}
                        />
                    </Form.Item>
                    <Form.Item<I_Order>
                        name={'DATE_CLOSED'}
                        label={'Дата и время приемки работы'}
                        layout={"vertical"}
                        key={'DATE_CLOSED'}
                        initialValue={order.DATE_CLOSED ? dayjs(order.DATE_CLOSED ?? '', 'YYYY-MM-DDT00:00:00+03:00') : ''}
                    >
                        <DatePicker format={"DD.MM.YYYY"}
                                    onChange={(date) => updateOrder({DATE_TEST: date.format('YYYY-MM-DDT00:00:00+03:00')})}
                        />
                    </Form.Item>
                    <Form.Item<I_Order>
                        name={'TEETH_COLORS_CURRENT'}
                        label={'Исходный цвет зуба'}
                        layout={"vertical"}
                        key={'TEETH_COLORS_CURRENT'}
                        initialValue={order.TEETH_COLORS_CURRENT}
                    >
                        <Select
                            onSelect={(TEETH_COLORS_CURRENT) => updateOrder({TEETH_COLORS_CURRENT})}
                            options={teethColorsList.map(o => ({
                                title: o.NAME,
                                label: o.NAME,
                                value: o.ID
                            }))}
                        />
                    </Form.Item>

                    <Form.Item<I_Order>
                        name={'TEETH_COLORS_NEEDLE'}
                        label={'Требуемый цвет зуба'}
                        layout={"vertical"}
                        key={'TEETH_COLORS_NEEDLE'}
                        initialValue={order.TEETH_COLORS_NEEDLE}
                    >
                        <Select
                            onSelect={(TEETH_COLORS_NEEDLE) => updateOrder({TEETH_COLORS_NEEDLE})}
                            options={teethColorsList.map(o => ({
                                title: o.NAME,
                                label: o.NAME,
                                value: o.ID
                            }))}
                        />
                    </Form.Item>
                </Flex>
            </Form>
        </div>
    )
}