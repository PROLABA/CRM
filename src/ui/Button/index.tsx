import {FC, ReactElement} from "react";
import './style.scss'
import {T_Background} from "@/types/theme.ts";

export const Button: FC<{
    label: string
    background: T_Background
    icon?: ReactElement
    onClick?: () => void
    type?: "button" | "submit" | "reset"
}> = (props) => {
    return (
        <button type={props.type}
                className={`button bg--${props.background}`}
                onClick={props.onClick}
        >
            {props.icon && <span className="icon">{props.icon}</span>}
            <span className="label">{props.label}</span>
        </button>
    )
}