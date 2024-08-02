import {Outlet, useNavigate} from "react-router-dom"
import {ConfigProvider, ThemeConfig} from "antd";
import './style.css'
import {useEffect} from "react";
import {useAppSelector} from "@/hooks/storeHooks.ts";

export const AppLayout = () => {
    const navigate = useNavigate();
    const {token} = useAppSelector(state => state.auth)
    useEffect(() => {
        if (!token) {
            navigate("/auth")
        }
    }, [navigate, token])

    const config: ThemeConfig = {
        token: {
            colorBgContainer: '#FFFFFF',
            colorText: '#000000',
            colorPrimary: "#6D6AFF",
        },
        components: {
            Button: {},
        },
    };

    return (
        <ConfigProvider theme={config}>
            <Outlet />
        </ConfigProvider>
    )
}