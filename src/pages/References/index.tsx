import {FC} from "react";
import {ContentHeader} from "@/widgets/ContentHeader";
import {PageHoc} from "@/hooks/pageHOK.tsx";

export const ReferencesPage:FC = PageHoc(() => {
    return (
        <div>
            <ContentHeader>
                ReferencesPage
            </ContentHeader>
        </div>
    )
})