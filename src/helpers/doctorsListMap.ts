import {I_User} from "@/types/user.ts";

export const mapDoctorsListToTable = (list: I_User[]): object[] => {
    return list.map(
        ({
             ID,
             NAME,
             LAST_NAME,
             EMAIL
         }
        ) => {
            return {
                ID,
                NAME,
                LAST_NAME,
                EMAIL
            };
        });
};