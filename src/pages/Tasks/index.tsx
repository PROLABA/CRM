import {ContentHeader} from "@/widgets/ContentHeader";
import {PageHoc} from "@/hooks/pageHOK.tsx";
import {TableWorksWidget} from "@/widgets/Table/Tasks";
import {SearchWidget} from "@/widgets/Search";

export const TasksPage = PageHoc(() => {
    return (
        <div>
            <ContentHeader>
                <SearchWidget />
            </ContentHeader>
            <TableWorksWidget />
        </div>
    )
})