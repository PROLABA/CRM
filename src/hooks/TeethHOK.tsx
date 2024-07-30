import {ComponentType, FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks.ts";
import {getTeethList, getTeethSections} from "@/store/teeth/teethTanks.ts";

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
            dispatch(getTeethList())
            dispatch(getTeethSections())
        }, [dispatch, getTeethList, getTeethSections])
        const teethSectionsByPosition: I_TeethSectionsList = {
            leftBottom: teethSections.find(ts => ts.AREA_VERTICAL === "LEFT" && ts.AREA_HORIZONTALLY === "BOTTOM"),
            leftTop: teethSections.find(ts => ts.AREA_VERTICAL === "LEFT" && ts.AREA_HORIZONTALLY === "TOP"),
            rightBottom: teethSections.find(ts => ts.AREA_VERTICAL === "RIGHT" && ts.AREA_HORIZONTALLY === "BOTTOM"),
            rightTop: teethSections.find(ts => ts.AREA_VERTICAL === "RIGHT" && ts.AREA_HORIZONTALLY === "TOP")
        }
        return status === 'fulfilled' && <WrappedComponent
						teethSections={teethSectionsByPosition}
						teethList={teethList}
				/>
    }
    return WrapperComponent
}
