import {ComponentType, FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks.ts";
import {fetchTeethList, fetchTeethSectionsList} from "@/store/teeth/teethTanks.ts";

import {I_Teeth, I_TeethSectionsList} from "@/types/teeth.ts";

export function teethHoc<WrappedProps>(
    WrappedComponent: ComponentType<
        { teethSections: I_TeethSectionsList, teethList: I_Teeth[] }
    >
): FC<WrappedProps> {
    const WrapperComponent: FC<WrappedProps> = () => {
        const {status, teethSections, teethList} = useAppSelector(state => state.teeth)
        const dispatch = useAppDispatch()
        useEffect(() => {
            dispatch(fetchTeethList())
            dispatch(fetchTeethSectionsList())
        }, [dispatch, fetchTeethList])

        return status === 'fulfilled' && <WrappedComponent teethSections={teethSections} teethList={teethList}/>
    }
    return WrapperComponent
}
