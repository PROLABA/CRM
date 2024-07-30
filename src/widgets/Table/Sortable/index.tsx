import {TableSortableHOK} from "@/hooks/TableSortableHOK.tsx";
import {FC} from "react";
import {Table} from "antd";

export const TableSortableWidget: FC<{
    entity_id: number
}> = TableSortableHOK(({columns, items}) => {
    return (
        <Table columns={columns}
               dataSource={items}
        >

        </Table>
    )
})