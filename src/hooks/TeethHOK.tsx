import {ComponentType, FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks.ts";
import {getTeethList} from "@/store/teeth/teethTanks.ts";

import {I_Teeth, I_TeethSection, I_TeethSectionsList} from "@/types/teeth.ts";
import {getTeethSectionsList} from "@/store/teethSections/teethTanks.ts";

export function teethHoc<WrappedProps>(
    WrappedComponent: ComponentType<
        { teethSections: I_TeethSectionsList, teethList: I_Teeth[] }
    >
): FC<WrappedProps> {
    const WrapperComponent: FC<WrappedProps> = () => {
        const {status, teethSectionsList} = useAppSelector(state => state.teethSections)
        const {teethList} = useAppSelector(state => state.teeth)
        const dispatch = useAppDispatch()
        const sortTeeth = (section: I_TeethSection | undefined, type: 'ASC' | 'DESC'): I_TeethSection | undefined => {
            if (section && section?.ITEMS && section?.ITEMS?.SECTION.length > 0) {
                return {
                    ...section,
                    ITEMS: {
                        SECTION: [...section.ITEMS.SECTION].sort((a, b) => {
                            return ((type === 'ASC' ? 1 : -1) * Number(a.SECTION_POSITION)) - ((type === 'ASC' ? 1 : -1) * Number(b.SECTION_POSITION))
                        })
                    }
                }
            }
            return section
        }
        useEffect(() => {
            dispatch(getTeethList({}))
            dispatch(getTeethSectionsList({
                data: {
                    GET_CHILDES: true
                }
            }))
        }, [dispatch])

        const teethSectionsByPosition: I_TeethSectionsList = {
            leftBottom: sortTeeth(teethSectionsList.find(ts => ts.AREA_VERTICAL === "LEFT" && ts.AREA_HORIZONTALLY === "BOTTOM"), 'ASC'),
            leftTop: sortTeeth(teethSectionsList.find(ts => ts.AREA_VERTICAL === "LEFT" && ts.AREA_HORIZONTALLY === "TOP"), 'ASC'),
            rightBottom: sortTeeth(teethSectionsList.find(ts => ts.AREA_VERTICAL === "RIGHT" && ts.AREA_HORIZONTALLY === "BOTTOM"), 'DESC'),
            rightTop: sortTeeth(teethSectionsList.find(ts => ts.AREA_VERTICAL === "RIGHT" && ts.AREA_HORIZONTALLY === "TOP"), 'DESC')
        }
        if (status !== 'fulfilled') return null
        return <WrappedComponent
            teethSections={teethSectionsByPosition}
            teethList={teethList}
        />
    }
    return WrapperComponent
}
