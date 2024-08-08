import {FC, useEffect, useState} from "react";
import {I_Order} from "@/types/orders.ts";
import TextArea from "antd/es/input/TextArea";
import './style.css'
import {updateOrderByIDThank} from "@/store/orders/orderThanks.ts";
import {useAppDispatch} from "@/hooks/storeHooks.ts";
import { useDebounce } from 'use-debounce';
export const TextWidget:FC<{ order: I_Order }> = ({order}) => {
    const dispatch = useAppDispatch()
    const [text, setText] = useState<string>(order.DESCRIPTION)
    const [newText] = useDebounce(text, 2000);

    useEffect(() => {
        dispatch(updateOrderByIDThank({
            ID: order.ID,
            data: {
                DESCRIPTION: newText
            }
        }))
    }, [dispatch, order.ID, newText]);

    return (
        <div className={"order-desc"}>
            <div className={"order-desc-content"}>
                <div className="section-title">
                    Дополнительный комментарий
                </div>
                <TextArea status={newText !== text ? 'warning' : ''} value={text} onChange={(v)=> setText(v.target.value)} placeholder={"Введите комментарий"}/>
            </div>
        </div>
    )
}