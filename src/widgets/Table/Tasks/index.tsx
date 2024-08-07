import {FC, useEffect} from "react";
import {Table} from "antd";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks.ts";
import {mapTasksListToTable} from "@/helpers/worksListMap.ts";
import {getTasksList} from "@/store/tasks/tasksTanks.ts";

export const TableWorksWidget: FC = () => {
    const {tasksList} = useAppSelector(state => state.tasks)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTasksList({}))
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
            dataSource={mapTasksListToTable(tasksList)}
            rowKey={'ID'}
            pagination={{}}
        />
    )
}