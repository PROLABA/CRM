import { FC } from "react";
import { Button, Flex, Table } from "antd";
import { ColumnsType } from "antd/es/table";

export const TableSortableWidget: FC<{
    columns?: ColumnsType,
    data?: any[],
}> = (props) => {
    const { columns, data } = props;
    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey={'ID'}
            pagination={{
            }}
            expandable={
                {
                    expandedRowRender: (record) => <Flex gap={10} justify={"center"} >
                        <Button type="primary" >Редактировать</Button>
                        <Button type="default" >Удалить</Button >
                    </Flex>,
                }
            }
        >

        </Table >
    )
}