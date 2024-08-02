import { FC } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

export const TableSortableWidget: FC<{
    columns?: ColumnsType,
    data?: object[],
}> = (props) => {
    const { columns, data } = props;
    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey={'ID'}
            pagination={{
            }}

        >

        </Table >
    )
}