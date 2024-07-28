import {createContext, FC, ReactElement} from "react";
import {notification} from "antd";
import {NotificationInstance} from "antd/es/notification/interface";

export const AlertsContext = createContext<NotificationInstance>({
    open: () => {
    },
    error: () => {
    },
    info: () => {
    },
    success: () => {
    },
    warning: () => {
    },
    destroy: () => {
    }
});
export const NotificationProvider: FC<{
    children: ReactElement
}> = ({children}) => {
    const [notificationHandler, contextHolder] = notification.useNotification();
    return (
        <AlertsContext.Provider value={notificationHandler}>
            {contextHolder}
            {children}
        </AlertsContext.Provider>
    );
};