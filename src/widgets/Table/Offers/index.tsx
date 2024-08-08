import {FC, useEffect} from "react";
import {Table} from "antd";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks.ts";
import {mapOffersListToTable} from "@/helpers/offersListMap.ts";
import {getOffersListThank} from "@/store/offers/offersTanks.ts";

export const TableOffersWidget: FC = () => {
    const {offersList} = useAppSelector(state => state.offers)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getOffersListThank({}))
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
                }
            ]}
            dataSource={mapOffersListToTable(offersList)}
            rowKey={'ID'}
            pagination={{}}
        />
    )
}