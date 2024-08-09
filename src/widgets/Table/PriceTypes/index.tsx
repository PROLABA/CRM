import {FC, useEffect} from "react";
import {Table} from "antd";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks.ts";
import {
    deletePriceTypeByIDThank,
    getPriceTypeList,
    updatePriceTypeByIDThank
} from "@/store/priceType/priceTypeTanks.ts";
import {InputAsync} from "@/ui/InputAsync";
import {DeleteButton} from "@/ui/DeleteButton";

export const PriceTypesWidget: FC = () => {
    const {priceTypeList} = useAppSelector(state => state.priceType)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPriceTypeList({}))
    }, [dispatch])
    return (
        <Table
            columns={[
                {
                    key: 'ID',
                    dataIndex: 'ID',
                    title: 'ID',
                },
                {
                    key: 'NAME',
                    dataIndex: 'NAME',
                    title: 'Наименование',
                    render: (val: string, row) => <InputAsync
                        ID={row.ID}
                        type={'string'}
                        value={val}
                        onChange={(newVal) => {
                            dispatch(updatePriceTypeByIDThank({
                                ID: row.ID,
                                data: {
                                    NAME: String(newVal)
                                }
                            }))
                        }}
                    />
                },
                {
                    key: 'LABEL',
                    dataIndex: 'LABEL',
                    title: 'Короткое имя',
                    render: (val: string, row) => <InputAsync
                        ID={row.ID}
                        type={'string'}
                        value={val}
                        onChange={(newVal) => {
                            dispatch(updatePriceTypeByIDThank({
                                ID: row.ID,
                                data: {
                                    LABEL: newVal
                                }
                            }))
                        }}
                    />
                },
                {
                    key: 'DEL',
                    dataIndex: 'ID',
                    title: '',
                    render: (ID: number) => <DeleteButton onDelete={() => {
                        dispatch(deletePriceTypeByIDThank({ID}))
                    }}
                    />
                }
            ]}
            dataSource={priceTypeList}
            rowKey={'ID'}
            pagination={false}
        />
    )
}