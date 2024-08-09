import {FC, useEffect} from "react";
import {Table} from "antd";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks.ts";
import {mapOffersListToTable} from "@/helpers/offersListMap.ts";
import {deleteOfferByIDThank, getOffersListThank, updateOfferByIDThank} from "@/store/offers/offersTanks.ts";
import {DeleteButton} from "@/ui/DeleteButton";
import {InputAsync} from "@/ui/InputAsync";
export const TableOffersWidget: FC = () => {
    const {offersList} = useAppSelector(state => state.offers)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getOffersListThank({
            data:{
                GET_PARENTS: true,
                GET_CHILDES: true,
            }
        }))
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
                            dispatch(updateOfferByIDThank({
                                ID: row.ID,
                                data: {
                                    NAME: newVal
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
                        dispatch(deleteOfferByIDThank({ID}))
                    }}
                    />
                }
            ]}
            dataSource={mapOffersListToTable(offersList)}
            rowKey={'ID'}
            pagination={{}}
        />
    )
}