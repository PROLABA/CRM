import {FC} from "react";
import {ContentHeader} from "@/widgets/ContentHeader";
import {PageHoc} from "@/hooks/pageHOK.tsx";
import {useAppSelector} from "@/hooks/storeHooks.ts";

export const ProfilePage:FC = PageHoc(() => {
    const {user} = useAppSelector(state => state.auth)
    if(!user){
        return (
            <div>
                <ContentHeader>
                    <h3>ProfilePage</h3>
                </ContentHeader>
            </div>
        )
    }
    return (
        <div>
            <ContentHeader>
                <h3>Профиль: {user.NAME}</h3>
            </ContentHeader>
        </div>
    )
})