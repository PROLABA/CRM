import {createRoot} from "react-dom/client";
import {
    RouterProvider,
} from "react-router-dom";
import {RouterContext} from "./routes/Router.tsx";
import './index.scss'
import {store} from "@/store";
import {Provider} from "react-redux";
import {NotificationProvider} from "@/widgets/Notification";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <NotificationProvider>
            <RouterProvider router={RouterContext}/>
        </NotificationProvider>
    </Provider>
)