import {
    createBrowserRouter,
} from "react-router-dom";
import {OrdersPage} from "@/pages/Orders";
import {DashboardLayout} from "@/layouts/DashboardLayout";
import {TasksPage} from "../pages/Tasks";
import {ClientsPage} from "@/pages/Clients";
import {DoctorsPage} from "@/pages/Doctors";
import {SettingsPage} from "@/pages/Settings";
import {TechniciansPage} from "@/pages/Technicians";
import {OrderBoardPage} from "@/pages/Orders/OrderBoard";
import {ErrorPage} from "@/pages/Error";
import {MainPage} from "@/pages/Main";
import {AppLayout} from "@/layouts/AppLayout";
import {ProfilePage} from "@/pages/Profile";

export const RouterContext = createBrowserRouter([
    {
        element: (<AppLayout />),
        children: [
            {
                element: (<DashboardLayout />),
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
                        element: (<OrdersPage />)
                    },
                    {
                        path: "orders/:id",

                        element: <OrderBoardPage />,
                    },
                    {
                        path: "references",
                        children: [
                            {
                                path: "work-types",
                                element: (<TasksPage />),
                            },
                            {
                                path: "technicians",
                                element: <TechniciansPage />,
                            },
                            {
                                path: "clients",
                                element: <ClientsPage />,
                            },
                            {
                                path: "doctors",
                                element: <DoctorsPage />,
                            },
                        ]
                    },
                    {
                        path: "settings",
                        children: [
                            {
                                path: "system",
                                element: (<SettingsPage />),
                            },
                            {
                                path: "profile",
                                element: <ProfilePage />,
                            },
                        ]
                    },
                ]
            }
        ]
    },
]);
