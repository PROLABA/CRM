import {FC, ReactElement} from "react";
import './style.css'
import {T_Background} from "@/types/theme.ts";

export const Label: FC<{
    label: string
    background: T_Background
    icon?: ReactElement
}> = (props) => {
    return (
        <span className={`label-item bg--${props.background}`}>{props.label}</span>
    )
}