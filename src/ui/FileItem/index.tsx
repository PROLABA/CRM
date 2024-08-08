import './style.css'
import {FC} from "react";
import {I_FileBX} from "@/types/common";
import {Flex, Image, Typography} from "antd";

export const FileItem: FC<{ file: I_FileBX }> = ({file}) => {
    return (
        <Flex gap={13}>
            <Image fallback={"/src/assets/picture.svg"}
                   style={{maxHeight: "50px", maxWidth: "50px", borderRadius: '3px'}}
                   src={file.SRC}
                   title={file.FILE_NAME}
            />
            <Typography.Text
                ellipsis={{tooltip: file.FILE_NAME}}
                style={{width: 200}}
            >
                {file.FILE_NAME}
            </Typography.Text>
        </Flex>

    )
}