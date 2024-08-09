import {FC} from "react";
import {I_Order} from "@/types/orders.ts";
import {Flex, Table, Typography} from "antd";
import {Button} from "@/ui/Button";
import {mapOrderListToTable} from "@/helpers/orderListMap.ts";
import {InputAsync} from "@/ui/InputAsync";
import {updateOrderByIDThank} from "@/store/orders/orderThanks.ts";
import {useAppDispatch} from "@/hooks/storeHooks.ts";

export const TableOrderWorksWidget: FC<{ order: I_Order }> = ({order}) => {
    const formattedList: object[] = mapOrderListToTable([]);
    const dispatch = useAppDispatch()
    return (
        <Flex gap={12}
              className={"order-table-works"}
              align={'start'}
              vertical={true}
        >
            <Flex justify={'space-between'}
                  style={{
                      width: '100%'
                  }}
            >
                <Typography.Text className={'section-title'}>Типы работ</Typography.Text>
                <Flex gap={15}
                      className="add-percent"
                      align={'center'}
                >
                    <span>Надбавка / Скидка</span>
                    <InputAsync ID={order.ID + 'EXTRA'}
                                value={order.EXTRA}
                                type={'number'}
                                onChange={(newVal) => {
                                    dispatch(updateOrderByIDThank({
                                        ID: order.ID,
                                        data: {
                                            EXTRA: newVal
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
                           },
                           {
                               title: 'Цена',
                               dataIndex: 'PRICE',
                               key: 'PRICE',
                           },
                           {
                               title: 'Зубы',
                               dataIndex: 'TEETH_IDS',
                               key: 'TEETH_IDS',
                           },
                       ]}
                       dataSource={formattedList}
                />
                <div className="table-bottom">
                    <Button label={'Добавить'}
                            background={'accent'}
                    />
                </div>

            </div>

        </Flex>
    )
}