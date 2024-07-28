import {ReactElement} from "react";

export interface I_FileBX {
    ID: number
    TIMESTAMP_X?: string
    MODULE_ID?: string
    HEIGHT?: string
    WIDTH?: string
    FILE_SIZE?: string
    CONTENT_TYPE?: string
    SUBDIR?: string
    FILE_NAME?: string
    ORIGINAL_NAME?: string
    DESCRIPTION?: string
    HANDLER_ID?: never
    EXTERNAL_ID?: string
    VERSION_ORIGINAL_ID?: string
    META?: string
    SRC: string
}

export type T_Children = ReactElement | ReactElement[] | string