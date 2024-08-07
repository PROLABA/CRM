import {FC, useEffect} from "react";
import {Table} from "antd";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks.ts";
import {mapClientsListToTable} from "@/helpers/clientsListMap.ts";
import {getClientsList} from "@/store/clients/clientsTanks.ts";
import {PriceTypeSelect} from "@/ui/PriceType/Select";

export const TableClientsWidget: FC = () => {
    const {clientsList} = useAppSelector(state => state.client)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getClientsList({}))
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
                    title: 'Наименование'
                },
                {
                    key: 'ADDRESS',
                    dataIndex: 'ADDRESS',
                    title: 'Адрес'
                },
                {
                    key: 'PRICE_TYPE',
                    dataIndex: 'PRICE_TYPE_ID',
                    title: 'Тип цены',
                    render: (selected_id: number, record) => <PriceTypeSelect client_id={record.ID} selected_id={selected_id} />,
                }
            ]}
            dataSource={mapClientsListToTable(clientsList)}
            rowKey={'ID'}
            pagination={{}}
        />
    )
}