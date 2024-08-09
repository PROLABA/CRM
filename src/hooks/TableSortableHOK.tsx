import { ComponentType, FC } from "react";
import type { ColumnsType } from "antd/es/table";
import { Label } from "@/ui/label";

export function TableOrdersHOK<WrappedProps>(
    WrappedComponent: ComponentType<
        {
            data: object[], columns: ColumnsType
        }
    >
): FC<WrappedProps> {
    const columns: ColumnsType = [
        {
            title: '№',
            dataIndex: 'ID',
            key: 'ID',
        },
        {
            title: 'От',
            dataIndex: 'DATE_CREATE',
            key: 'DATE_CREATE',
            sorter: (a, b) => a.DATE_CREATE.localeCompare(b.DATE_CREATE),
        },
        {
            title: 'Заказчик',
            dataIndex: 'CLIENT_ID',
            key: 'CLIENT_ID',
            sorter: (a, b) => a.CLIENT_ID.localeCompare(b.CLIENT_ID),
        },
        {
            title: 'Врач',
            dataIndex: 'CLIENT_USER_ID',
            key: 'CLIENT_USER_ID',
            sorter: (a, b) => a.CLIENT_USER_ID.localeCompare(b.CLIENT_USER_ID),
        },
        {
            title: 'Пациент',
            dataIndex: 'PATIENT_USER_ID',
            key: 'PATIENT_USER_ID',
            sorter: (a, b) => a.PATIENT_USER_ID.localeCompare(b.PATIENT_USER_ID),
        },
        {
            title: 'Готовность',
            dataIndex: 'DATE_TEST',
            key: 'DATE_TEST',
            render: (text: string) => <Label label={text} background={"accent"} />,
            sorter: (a, b) => a.DATE_TEST.localeCompare(b.DATE_TEST),

        },
        {
            title: 'Закрыт',
            dataIndex: 'DATE_CLOSED',
            key: 'DATE_CLOSED',
            sorter: (a, b) => a.DATE_CLOSED.localeCompare(b.DATE_CLOSED),
        },
        {
            title: 'Оплата',
            dataIndex: 'PAYMENT_DATE',
            key: 'PAYMENT_DATE',
            sorter: (a, b) => a.PAYMENT_DATE.localeCompare(b.PAYMENT_DATE),
        },
        {
            title: 'Стоимость',
            dataIndex: 'PRICE',
            key: 'PRICE',
            sorter: (a, b) => a.PRICE.localeCompare(b.PRICE),
        },
        {
            title: 'Статус',
            dataIndex: 'STATUS_ID',
            key: 'STATUS_ID',
            render: (text: string) => <Label label={text} background={"light"} />
        },
    ]
    const data = [
        {
            ID: 1,
            DATE_CREATE: '2023-06-01',
            CLIENT_ID: 'Иванов И.И.',
            CLIENT_USER_ID: 'Петров П.П.',
            PATIENT_USER_ID: 'Сидоров С.С.',
            DATE_TEST: '2023-06-10',
            DATE_CLOSED: '2023-06-15',
            PAYMENT_DATE: '2023-06-16',
            PRICE: 5000,
            STATUS_ID: 'Завершен',
        },
        {
            ID: 2,
            DATE_CREATE: '2023-06-05',
            CLIENT_ID: 'Смирнова А.А.',
            CLIENT_USER_ID: 'Кузнецов К.К.',
            PATIENT_USER_ID: 'Новикова Н.Н.',
            DATE_TEST: '2023-06-12',
            DATE_CLOSED: null,
            PAYMENT_DATE: null,
            PRICE: 7500,
            STATUS_ID: 'В процессе',
        },
        {
            ID: 3,
            DATE_CREATE: '2023-06-08',
            CLIENT_ID: 'Волков В.В.',
            CLIENT_USER_ID: 'Соколов С.С.',
            PATIENT_USER_ID: 'Морозова М.М.',
            DATE_TEST: '2023-06-18',
            DATE_CLOSED: '2023-06-20',
            PAYMENT_DATE: '2023-06-21',
            PRICE: 6000,
            STATUS_ID: 'Завершен',
        },
    ];
    const WrapperComponent: FC<WrappedProps> = () => {
        return (<WrappedComponent data={data}
            columns={columns}
        />)
    }
    return WrapperComponent
}


