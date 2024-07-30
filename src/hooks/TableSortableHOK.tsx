import {ComponentType, FC} from "react";
import type {ColumnsType} from "antd/es/table";

export function TableSortableHOK<WrappedProps>(
    WrappedComponent: ComponentType<
        {
            items: [], columns: ColumnsType
        }
    >
): FC<WrappedProps> {
    const columns:ColumnsType = [
        {
            title: '№',
            key: 'ID'
        },
        {
            title: 'От',
            key: 'DATE_CREATE'
        },
        {
            title: 'Заказчик',
            key: 'CLIENT_ID'
        },
        {
            title: 'Врач',
            key: 'CLIENT_USER_ID'
        },
        {
            title: 'Пациент',
            key: 'PATIENT_USER_ID'
        },
        {
            title: 'Готовность',
            key: 'DATE_TEST'
        },
        {
            title: 'Закрыт',
            key: 'DATE_CLOSED'
        },
        {
            title: 'Оплата',
            key: 'PAYMENT_DATE' // not exist
        },
        {
            title: 'Стоимость',
            key: 'PRICE'
        },
        {
            title: 'Статус',
            key: 'STATUS_ID'
        }
    ]
    const WrapperComponent: FC<WrappedProps> = () => {
        return (<WrappedComponent items={[]}
                                  columns={columns}
        />)
    }
    return WrapperComponent
}
