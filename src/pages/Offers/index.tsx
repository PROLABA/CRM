import {ContentHeader} from "@/widgets/ContentHeader";
import {PageHoc} from "@/hooks/pageHOK.tsx";
import {SearchWidget} from "@/widgets/Search";
import {TableOffersWidget} from "@/widgets/Table/Offers";

export const OffersPage = PageHoc(() => {
    return (
        <div>
            <ContentHeader>
                <SearchWidget />
            </ContentHeader>
            <TableOffersWidget />
        </div>
    )
})