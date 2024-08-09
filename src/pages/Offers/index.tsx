import {ContentHeader} from "@/widgets/ContentHeader";
import {PageHoc} from "@/hooks/pageHOK.tsx";
import {SearchWidget} from "@/widgets/Search";
import {TableOffersWidget} from "@/widgets/Table/Offers";
import {Button} from "@/ui/Button";
import {useAppDispatch} from "@/hooks/storeHooks.ts";
import {createOfferThank} from "@/store/offers/offersTanks.ts";

export const OffersPage = PageHoc(() => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <ContentHeader>
                <Button label={'Добавить'}
                        background={'light'}
                        onClick={() => dispatch(createOfferThank({}))}
                />
                <SearchWidget />
            </ContentHeader>
            <TableOffersWidget />
        </div>
    )
})