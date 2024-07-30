import { I_FileBX } from "@/types/types.ts";

export interface I_Teeth {
    ID: number,
    NAME: string,
    NUMBER_POSITION: number,
    PICTURE: I_FileBX,
    SECTION: number,
    SECTION_POSITION: number
}

export interface I_TeethSection {
    ID: number,
    NAME: string,
    AREA_HORIZONTALLY: "TOP" | "BOTTOM"
    AREA_VERTICAL: "LEFT" | "RIGHT"
    SECTION_ITEMS: I_Teeth[]
}

export interface I_TeethSectionsList {
    rightTop: I_TeethSection | undefined,
    leftTop: I_TeethSection | undefined,
    rightBottom: I_TeethSection | undefined,
    leftBottom: I_TeethSection | undefined,
}
export interface I_TeethState {
    TYPE: I_TeethStateType['LABEL']
    COLOR: string
}
export interface I_TeethStateType {
    NAME: string
    LABEL: 'none' | 'stump' | 'default' | 'implant'
}
