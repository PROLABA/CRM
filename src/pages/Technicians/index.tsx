import {ContentHeader} from "@/widgets/ContentHeader";
import {PageHoc} from "@/hooks/pageHOK.tsx";
import {SearchWidget} from "@/widgets/Search";
import {TableTechnicianWidget} from "@/widgets/Table/Technician";

export const TechniciansPage = PageHoc(() => {
    return (
        <div>
            <ContentHeader>
                <SearchWidget/>
            </ContentHeader>
            <TableTechnicianWidget/>
        </div>
    )
})