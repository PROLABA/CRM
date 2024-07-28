import {FC} from "react";
import {Avatar} from "antd";
import {ReactComponent as Logo} from '@/assets/Logo.svg';
export const ProfileButton:FC =  () =>{
    return (
        <div>
            <Avatar size={45} icon={<Logo />} />
        </div>
    )
}