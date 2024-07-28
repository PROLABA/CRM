import {FC, useState} from "react";
import {HeaderCompany} from "@/ui/HeaderCompany";
import {Layout} from 'antd';
import {MenuSidebar} from "@/widgets/Menu";

const {Sider} = Layout;
export const Sidebar: FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme={'light'}
            width={"270px"}
        >
            <div>
                <HeaderCompany collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)}/>
                <MenuSidebar/>
            </div>

        </Sider>
    )
}
