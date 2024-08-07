import {ContentHeader} from "@/widgets/ContentHeader";
import {PageHoc} from "@/hooks/pageHOK.tsx";
import {TableDoctorsWidget} from "@/widgets/Table/Doctors";
import {SearchWidget} from "@/widgets/Search";

export const DoctorsPage = PageHoc(() => {
    return (
        <div>
            <ContentHeader>
                <SearchWidget/>
            </ContentHeader>
            <TableDoctorsWidget/>
        </div>
    )
})