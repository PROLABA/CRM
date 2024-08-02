import {ComponentType, FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks.ts";
import {getTeethList, getTeethSections} from "@/store/teeth/teethTanks.ts";

import {I_Teeth, I_TeethSection, I_TeethSectionsList} from "@/types/teeth.ts";

export function teethHoc<WrappedProps>(
    WrappedComponent: ComponentType<
        { teethSections: I_TeethSectionsList, teethList: I_Teeth[] }
    >
): FC<WrappedProps> {
    const WrapperComponent: FC<WrappedProps> = () => {
        const {status, teethSections, teethList} = useAppSelector(state => state.teeth)
        const dispatch = useAppDispatch()
        const sortTeeth = (section: I_TeethSection | undefined, type: 'ASC' | 'DESC') => {
            if (section && section?.ITEMS && section?.ITEMS?.SECTION.length > 0) {
                return {
                    ...section,
                    SECTION_ITEMS: [...section.ITEMS.SECTION].sort((a, b) => {
                        return ((type === 'ASC' ? 1 : -1) *  Number(a.SECTION_POSITION)) - ((type === 'ASC' ? 1 : -1) * Number(b.SECTION_POSITION))
                    })
                }
            }
        }
        useEffect(() => {
            dispatch(getTeethList({}))
            dispatch(getTeethSections({}))
        }, [dispatch, getTeethList, getTeethSections])

        const teethSectionsByPosition: I_TeethSectionsList = {
            leftBottom: sortTeeth(teethSections.find(ts => ts.AREA_VERTICAL === "LEFT" && ts.AREA_HORIZONTALLY === "BOTTOM"), 'ASC'),
            leftTop: sortTeeth(teethSections.find(ts => ts.AREA_VERTICAL === "LEFT" && ts.AREA_HORIZONTALLY === "TOP"), 'ASC'),
            rightBottom: sortTeeth(teethSections.find(ts => ts.AREA_VERTICAL === "RIGHT" && ts.AREA_HORIZONTALLY === "BOTTOM"), 'DESC'),
            rightTop: sortTeeth(teethSections.find(ts => ts.AREA_VERTICAL === "RIGHT" && ts.AREA_HORIZONTALLY === "TOP"), 'DESC')
        }
        if (status !== 'fulfilled') return null
        return <WrappedComponent
            teethSections={teethSectionsByPosition}
            teethList={teethList}
        />
    }
    return WrapperComponent
}
