import {useContext} from "react";
import {AlertsContext} from "@/widgets/Notification";
import {I_ResponseError} from "@/types/api.ts";

export const useNotification = () => {
    const notificationInstance = useContext(AlertsContext);

    const addError = (error: I_ResponseError) => {
        if (error.data.length) {
            error.data.forEach(e => {
                notificationInstance.error({
                    message: error.message,
                    description: e.message,
                    key: e.message
                });
            })
        } else {
            notificationInstance.error({
                message: error.message
            });
        }
    }

    const clearAlerts = () => {

    }
    return {addError, clearAlerts};
}
