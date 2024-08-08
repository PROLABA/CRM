import { I_FileBX } from "@/types/common";

export interface I_Teeth {
    ID: number,
    NAME: string,
    NUMBER_POSITION: number,
    PICTURE: I_FileBX,
    SECTION: number,
    SECTION_POSITION: number
    JOIN?: {
        SECTION: I_TeethSection
    }
}

export interface I_TeethSection {
    ID: number,
    NAME: string,
    AREA_HORIZONTALLY: "TOP" | "BOTTOM"
    AREA_VERTICAL: "LEFT" | "RIGHT"
    ITEMS?: {
        SECTION: I_Teeth[]
    }
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
export interface I_TeethColor {
    ID: number
    NAME: string
}