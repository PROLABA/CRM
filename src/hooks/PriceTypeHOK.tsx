import {ComponentType, FC} from "react";
import {useAppSelector} from "@/hooks/storeHooks.ts";

import {I_PriceType} from "@/types/priceType.ts";

export function PriceTypeHOK<WrappedProps>(
    selected: number,
    WrappedComponent: ComponentType<{ priceTypeList: I_PriceType[], selected: I_PriceType }>
): FC<WrappedProps> {
    const WrapperComponent: FC<WrappedProps> = () => {
        const {priceTypeList, status} = useAppSelector(state => state.priceType)
        const selectedItem = priceTypeList.find(item => Number(item.ID) === Number(selected)) ?? priceTypeList[0]
        if (status !== 'fulfilled' || !selected || !priceTypeList) return null
        return <WrappedComponent priceTypeList={priceTypeList}
                                 selected={selectedItem}
        />
    }
    return WrapperComponent
}
