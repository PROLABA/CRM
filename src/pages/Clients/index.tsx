import {ContentHeader} from "@/widgets/ContentHeader";
import {PageHoc} from "@/hooks/pageHOK.tsx";
import {SearchWidget} from "@/widgets/Search";
import {TableClientsWidget} from "@/widgets/Table/Clients";

export const ClientsPage = PageHoc(() => {
    return (
        <div>
            <ContentHeader>
                <SearchWidget />
            </ContentHeader>
            <TableClientsWidget/>
        </div>
    )
})