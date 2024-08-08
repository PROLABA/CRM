import {FC} from "react";
import {I_Order} from "@/types/orders.ts";
import './style.css'
import {FileItem} from "@/ui/FileItem";
import {Button} from "@/ui/Button";

export const FilesWidget: FC<{ order: I_Order }> = ({order}) => {
    return (
        <div className={"order-files"}>
            <div className={"order-files-content"}>
                <div className="section-title">
                    Файлы
                </div>
                <div className="order-files-list">
                    {order.FILES.map(f => <FileItem file={f}
                                                    key={f.ID}
                    />)}
                </div>
            </div>
            <div className="order-files-bottom">
                <Button label={'Добавить'} onClick={()=>console.log('')} background={"accent"}/>
            </div>
        </div>
    )
}