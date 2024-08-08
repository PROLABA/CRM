import {ContentHeader} from "@/widgets/ContentHeader";
import {PageHoc} from "@/hooks/pageHOK.tsx";
import {SearchWidget} from "@/widgets/Search";
import {TableTasksWidget} from "@/widgets/Table/Tasks";

export const TasksPage = PageHoc(() => {
    return (
        <div>
            <ContentHeader>
                <SearchWidget />
            </ContentHeader>
            <TableTasksWidget />
        </div>
    )
})