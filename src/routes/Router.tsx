import {
    createBrowserRouter,
} from "react-router-dom";
import {OrdersPage} from "@/pages/Orders";
import {LayoutMain} from "@/layouts/MainLayout";
import {TechniciansPage} from "@/pages/WorksTypes";
import {ClientsPage} from "@/pages/Clients";
import {DoctorsPage} from "@/pages/Doctors";
import {SettingsPage} from "@/pages/Settings";
import {WorkTypesPage} from "@/pages/Technicians";
import {OrderBoardPage} from "@/pages/Orders/OrderBoard";
import {ErrorPage} from "@/pages/Error";
import {MainPage} from "@/pages/Main";
import {AuthPage} from "@/pages/Auth";

export const RouterContext = createBrowserRouter([
    {
        path: "auth",
        element: <AuthPage />
    },
    {
        element: (<LayoutMain/>),
        children: [
            {
                path: "*",
                element: <ErrorPage />
            },
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "orders",
                element: (<OrdersPage/>)
            },
            {
                path: "orders/create",
                element: (<OrderBoardPage/>),
            },
            {
                path: "orders/:id",
                element: <OrderBoardPage/>,
            },
            {
                path: "references",
                children: [
                    {
                        path: "work-types",
                        element: (<WorkTypesPage/>),
                    },
                    {
                        path: "technicians",
                        element: <TechniciansPage/>,
                    },
                    {
                        path: "clients",
                        element: <ClientsPage/>,
                    },
                    {
                        path: "doctors",
                        element: <DoctorsPage/>,
                    },
                ]
            },
            {
                path: "settings",
                children: [
                    {
                        path: "system",
                        element: (<SettingsPage/>),
                    },
                    {
                        path: "profile",
                        element: <SettingsPage/>,
                    },
                ]
            },
        ]
    },
]);
