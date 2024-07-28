import {Outlet, redirect, useNavigate} from "react-router-dom"
import HeaderTop from "@/widgets/Header";
import {Sidebar} from "@/widgets/Sidebar";
import {ConfigProvider, Layout, ThemeConfig} from "antd";
import './style.css'
import {useEffect} from "react";

const {Content} = Layout;
export const LayoutMain = () => {
    const navigate = useNavigate();
    const auth = false
    useEffect(() => {
        if (auth) {
            navigate("/orders")
        } else {
            navigate("/auth")
        }
    }, [redirect])

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
            <Layout style={{
                minHeight: '100vh',
                backgroundColor: config.token?.colorBgContainer
            }}
            >
                <Sidebar />
                <Layout style={{height: "100%", "minHeight": "100vh"}}>
                    <HeaderTop title={'Заголовок'} />
                    <Content style={{padding: '0 20px', height: "100%", width: "100%"}}>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    )
}