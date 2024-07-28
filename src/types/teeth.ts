import {I_FileBX} from "@/types/types.ts";

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
    label: string,
    items: I_Teeth[]
}

export interface I_TeethSectionsList {
    rightTop: I_TeethSection,
    leftTop: I_TeethSection,
    rightBottom: I_TeethSection,
    leftBottom: I_TeethSection,
}
export interface I_TeethState {
    TYPE: I_TeethStateType['LABEL']
    COLOR: string
}
export interface I_TeethStateType {
    NAME: string
    LABEL: 'none' | 'stump' | 'default' | 'implant'
}
