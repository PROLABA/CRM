import './style.css'
import {Flex} from "antd";
import {FC} from "react";
import {T_Children} from "@/types/common";

export const ContentHeader: FC<{
    children: T_Children
}> = ({children}) => {
    return (
        <Flex justify={'space-between'}
              className="content-header"
              gap={"15px"}
        >
            {children}
        </Flex>
    )
}