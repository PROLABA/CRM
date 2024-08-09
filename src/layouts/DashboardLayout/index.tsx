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
import {getTeethColorsList} from "@/store/teethColors/teethColorsTanks.ts";
import {getOffersListThank} from "@/store/offers/offersTanks.ts";
import {getTeethList} from "@/store/teeth/teethTanks.ts";
import {getTeethSectionsList} from "@/store/teethSections/teethTanks.ts";

const {Content} = Layout;
export const DashboardLayout = DashboardHOK(() => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getOrderStatusListThank({}))
        dispatch(getPriceTypeList({}))
        dispatch(getTeethColorsList({}))
        dispatch(getOffersListThank({}))
        dispatch(getTeethList({}))
        dispatch(getTeethSectionsList({
            data: {
                GET_CHILDES: true
            }
        }))
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