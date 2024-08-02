import {Outlet} from "react-router-dom"
import {ConfigProvider, ThemeConfig} from "antd";
import './style.css'
import {useAppSelector} from "@/hooks/storeHooks.ts";
import {AuthPage} from "@/pages/Auth";

export const AppLayout = () => {
    const {token} = useAppSelector(state => state.auth)


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
            {token ? <Outlet /> : <AuthPage />}
        </ConfigProvider>
    )
}