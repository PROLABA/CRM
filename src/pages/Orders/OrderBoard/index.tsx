import {FC, useEffect, useState} from "react";
import {TeethGridWidget} from "@/widgets/Teeth/Grid";
import {ContentHeader} from "@/widgets/ContentHeader";
import {Flex} from "antd";
import {Label} from "@/ui/label";
import {Button} from "@/ui/Button";
import {ReactComponent as ArrowLong} from '@/assets/arrow-long.svg'
import {ReactComponent as Print} from '@/assets/print.svg'
import {useNavigate} from "react-router-dom";
import {PageHoc} from "@/hooks/pageHOK.tsx";

export const OrderBoardPage: FC = PageHoc(() => {
    const [classList, setClassList] =useState<string>("")
    useEffect(()=>{
        setClassList("active")
    }, [setClassList])
    const navigate = useNavigate();
    return (
        <div className={`page-container ${classList}`}>
            <ContentHeader>
                <Button label="Назад"
                        background="light"
                        icon={<ArrowLong />}
                        onClick={()=> navigate("/orders")}
                />
                <Flex gap={22}
                      align={'center'}
                      className="content-header-actions"
                >
                    <Button label="Распечатать"
                            background="white"
                            icon={<Print />}
                            onClick={()=> navigate("/ordesasrs")}
                    />
                    <Label label="В работе"
                           background="light"
                    />
                </Flex>
            </ContentHeader>
            <TeethGridWidget />
        </div>
    )
})