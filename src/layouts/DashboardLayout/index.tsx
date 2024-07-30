import {Outlet} from "react-router-dom"
import HeaderTop from "@/widgets/Header";
import {Sidebar} from "@/widgets/Sidebar";
import {Layout} from "antd";
import './style.css'
import {useAppSelector} from "@/hooks/storeHooks.ts";

const {Content} = Layout;
export const DashboardLayout = () => {
    const {token} = useAppSelector(state => state.auth)
    if (!token) return null
    return (
        <>
            <Layout style={{
                minHeight: '100vh',
                backgroundColor: '#FFFFFF'
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
        </>
    )
}