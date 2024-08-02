import {FC} from "react";
import {TeethGridWidget} from "@/widgets/Teeth/Grid";
import {ContentHeader} from "@/widgets/ContentHeader";
import {Flex} from "antd";
import {Label} from "@/ui/label";
import {Button} from "@/ui/Button";
import {ReactComponent as ArrowLong} from '@/assets/arrow-long.svg'
import {ReactComponent as Print} from '@/assets/print.svg'
import {useNavigate} from "react-router-dom";
import {PageHoc} from "@/hooks/pageHOK.tsx";
import './style.scss'
import {FilesWidget} from "@/widgets/Files";
import {TableWorksWidget} from "@/widgets/Table/Works";
import {TableOffersWidget} from "@/widgets/Table/OrderOffers";
import {TextWidget} from "@/widgets/Text";
import {OrderWidget} from "@/widgets/OrderForm";

export const OrderBoardPage: FC = PageHoc(() => {
    const navigate = useNavigate();
    return (
        <>
            <ContentHeader>
                <Button label="Назад"
                        background={"light"}
                        icon={<ArrowLong />}
                        onClick={() => navigate("/orders")}
                />
                <Flex gap={22}
                      align={'center'}
                      className="content-header-actions"
                >
                    <Button label="Распечатать"
                            background={"white"}
                            icon={<Print />}
                            onClick={() => navigate("/print")}
                    />
                    <Label label="В работе"
                           background={"light"}
                    />
                </Flex>
            </ContentHeader>
            <div className={"order-board"}>
                <OrderWidget/>
                <TeethGridWidget />
                <FilesWidget />
                <TableWorksWidget />
                <TableOffersWidget />
                <TextWidget />
            </div>
        </>
    )
})