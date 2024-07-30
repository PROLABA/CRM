import {FC} from "react";
import {ContentHeader} from "@/widgets/ContentHeader";
import {Flex} from "antd";
import {Label} from "@/ui/label";
import {Button} from "@/ui/Button";
import {ReactComponent as Print} from '@/assets/print.svg'
import {useNavigate} from "react-router-dom";
import {PageHoc} from "@/hooks/pageHOK.tsx";
import {TableSortableWidget} from "@/widgets/Table/Sortable";

export const OrdersPage: FC = PageHoc(() => {
    const navigate = useNavigate();
    return (
        <>
            <ContentHeader>
                <Button label="Создать"
                        background="light"
                        onClick={() => navigate("/orders/create")}
                />
                <Flex gap={22}
                      align={'center'}
                      className="content-header-actions"
                >
                    <Button label="Распечатать"
                            background="white"
                            icon={<Print />}
                    />
                    <Label label="В работе"
                           background="light"
                    />
                </Flex>
            </ContentHeader>
            <TableSortableWidget entity_id={2}/>
        </>
    )
})