import {Menu} from "antd";
import {useLocation, useNavigate} from "react-router-dom";

import {ReactComponent as Logo} from '@/assets/menu-icon.svg';


import type {MenuProps} from 'antd';

export const MenuSidebar = () => {
    type MenuItem = Required<MenuProps>['items'][number];
    const navigate = useNavigate();
    const location  = useLocation();
    const items: MenuItem[] = [
        {
            label: 'Заказ Наряды',
            type: 'item',
            key: '/orders',
            icon: <Logo/>,
            onClick: () => navigate('/orders')
        },
        {
            label: 'Справочники',
            type: 'submenu',
            key: '/references',
            icon: <Logo/>,
            children: [
                {
                    label: 'Виды работ',
                    type: 'item',
                    key: '/references/work-types',
                    onClick: () => navigate('/references/work-types')
                },
                {
                    label: 'Техники',
                    type: 'item',
                    key: '/references/technicians',
                    onClick: () => navigate('/references/technicians')
                },
                {
                    label: 'Клиники',
                    type: 'item',
                    key: '/references/clients',
                    onClick: () => navigate('/references/clients')
                },
                {
                    label: 'Врачи',
                    type: 'item',
                    key: '/references/doctors',
                    onClick: () => navigate('/references/doctors')
                }
            ]
        },
        {
            label: 'Настройки',
            type: 'submenu',
            key: '/settings',
            icon: <Logo/>,
            children: [
                {
                    label: 'Системные',
                    type: 'item',
                    key: '/settings/system',
                    onClick: () => navigate('/settings/system')
                },
                {
                    label: 'Профиль',
                    type: 'item',
                    key: '/settings/profile',
                    onClick: () => navigate('/settings/profile')
                }
            ]
        }
    ];
    const selectedSubItem = "/"+location.pathname.split('/')[1]
    return (
        <Menu
            theme={'light'}
            defaultSelectedKeys={[location.pathname]}
            defaultOpenKeys={[selectedSubItem]}
            mode="inline"
            items={items}
            inlineIndent={10}
        />
    )
}