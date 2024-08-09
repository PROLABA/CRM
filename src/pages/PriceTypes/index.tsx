import {FC} from "react";
import {PageHoc} from "@/hooks/pageHOK.tsx";
import {PriceTypesWidget} from "@/widgets/Table/PriceTypes";
import {ContentHeader} from "@/widgets/ContentHeader";
import {Button} from "@/ui/Button";
import {createPriceTypeThank} from "@/store/priceType/priceTypeTanks.ts";
import {useAppDispatch} from "@/hooks/storeHooks.ts";
import {SearchWidget} from "@/widgets/Search";

export const PriceTypesPage: FC = PageHoc(() => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <ContentHeader>

                <Button label={'Добавить'}
                        background={'light'}
                        onClick={() => dispatch(createPriceTypeThank({}))}
                />
                <SearchWidget/>
            </ContentHeader>
            <PriceTypesWidget />
            <br />
        </div>
    )
})