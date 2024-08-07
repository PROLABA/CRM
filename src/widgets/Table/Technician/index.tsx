import {FC, useEffect} from "react";
import {Table} from "antd";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks.ts";
import {mapDoctorsListToTable} from "@/helpers/doctorsListMap.ts";
import {getTechnicianList} from "@/store/technician/userTanks.ts";

export const TableTechnicianWidget: FC = () => {
    const {doctorsList} = useAppSelector(state => state.doctors)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTechnicianList())
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
                    title: 'Имя'
                },
                {
                    key: 'LAST_NAME',
                    dataIndex: 'LAST_NAME',
                    title: 'Фамилия'
                },
                {
                    key: 'EMAIL',
                    dataIndex: 'EMAIL',
                    title: 'E-mail'
                }
            ]}
            dataSource={mapDoctorsListToTable(doctorsList)}
            rowKey={'ID'}
            pagination={{}}
        />
    )
}