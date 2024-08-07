import {Outlet} from "react-router-dom"
import HeaderTop from "@/widgets/Header";
import {Sidebar} from "@/widgets/Sidebar";
import {Layout} from "antd";
import './style.css'
import {useAppDispatch} from "@/hooks/storeHooks.ts";
import {useEffect} from "react";
import {getOrderStatusListThank} from "@/store/orderStatus/orderStatusThanks.ts";
import {DashboardHOK} from "@/hooks/DashboardHOK.tsx";
import {getPriceTypeList} from "@/store/priceType/priceTypeTanks.ts";

const {Content} = Layout;
export const DashboardLayout = DashboardHOK(() => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getOrderStatusListThank({}))
        dispatch(getPriceTypeList({}))
    }, [dispatch])
    return (
        <>
            <Layout style={{
                height: '100vh',
                backgroundColor: '#FFFFFF'
            }}
            >
                <Sidebar />
                <Layout>
                    <HeaderTop title={'Заголовок'} />
                    <Content className={'dashboard-content'}>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
    )
})