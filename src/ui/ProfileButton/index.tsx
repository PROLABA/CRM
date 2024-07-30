import {FC} from "react";
import {Avatar} from "antd";
import {ReactComponent as Logo} from '@/assets/Logo.svg';
import {logout} from "@/store/auth/authSlice.ts";
import {useAppDispatch} from "@/hooks/storeHooks.ts";
export const ProfileButton:FC =  () =>{
    const dispatch = useAppDispatch()
    return (
        <div onClick={()=>dispatch(logout())}>
            <Avatar size={45} icon={<Logo />} />
        </div>
    )
}