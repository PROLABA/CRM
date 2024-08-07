import {I_Task} from "@/types/task.ts";

export const mapTasksListToTable = (list: I_Task[]): object[] => {
    return list.map((work) => {
        const {
            ID,
            NAME,
            USER_IDS
        } = work;
        return {
            ID,
            NAME,
            USER_IDS,
        };
    });
};