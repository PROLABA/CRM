import { ColumnsType } from "antd/es/table";
import { Label } from "@/ui/label";
import {OrderStatusLabel} from "@/ui/OrderStatus/Label";
import {Link} from "react-router-dom";
export const mokColumns: ColumnsType = [
    {
        title: '№',
        dataIndex: 'ID',
        key: 'ID',
        render: (ID: string) => <Link to={ID} >{ID}</Link>,
    },
    {
        title: 'От',
        dataIndex: 'DATE_CREATE',
        key: 'DATE_CREATE',
        sorter: (a, b) => (a.DATE_CREATE || '').localeCompare(b.DATE_CREATE || ''),
    },
    {
        title: 'Заказчик',
        dataIndex: 'CLIENT_ID',
        key: 'CLIENT_ID',
        sorter: (a, b) => (a.CLIENT_ID || '').localeCompare(b.CLIENT_ID || ''),
    },
    {
        title: 'Врач',
        dataIndex: 'CLIENT_USER_ID',
        key: 'CLIENT_USER_ID',
        sorter: (a, b) => (a.CLIENT_USER_ID || '').localeCompare(b.CLIENT_USER_ID || ''),
    },
    {
        title: 'Пациент',
        dataIndex: 'PATIENT_USER_ID',
        key: 'PATIENT_USER_ID',
        sorter: (a, b) => (a.PATIENT_USER_ID || '').localeCompare(b.PATIENT_USER_ID || ''),
    },
    {
        title: 'Готовность',
        dataIndex: 'DATE_TEST',
        key: 'DATE_TEST',
        render: (date: string) => <Label label={date} background={"accent"} />,
        sorter: (a, b) => (a.DATE_TEST || '').localeCompare(b.DATE_TEST || ''),
    },
    {
        title: 'Закрыт',
        dataIndex: 'DATE_CLOSED',
        key: 'DATE_CLOSED',
        sorter: (a, b) => (a.DATE_CLOSED || '').localeCompare(b.DATE_CLOSED || ''),
    },
    {
        title: 'Оплата',
        dataIndex: 'PAYMENT_DATE',
        key: 'PAYMENT_DATE',
        sorter: (a, b) => (a.PAYMENT_DATE || '').localeCompare(b.PAYMENT_DATE || ''),
    },
    {
        title: 'Стоимость',
        dataIndex: 'PRICE',
        key: 'PRICE',
        sorter: (a, b) => (a.PRICE || '').localeCompare(b.PRICE || ''),
    },
    {
        title: 'Статус',
        dataIndex: 'STATUS_ID',
        key: 'STATUS_ID',
        render: (selected_id: number) => <OrderStatusLabel selected_id={selected_id} />
    },
]