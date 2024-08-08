import {Outlet} from "react-router-dom"
import {ConfigProvider, ThemeConfig} from "antd";
import './style.css'
import {useAppSelector} from "@/hooks/storeHooks.ts";
import {AuthPage} from "@/pages/Auth";
import dayjs from 'dayjs';
import locale from 'antd/locale/ru_RU';
import 'dayjs/locale/ru';
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

    dayjs.locale('ru');
    return (
        <ConfigProvider theme={config} locale={locale}>
            {token ? <Outlet /> : <AuthPage />}
        </ConfigProvider>
    )
}