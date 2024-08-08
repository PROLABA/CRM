import {FC} from "react";
import './style.scss'
import {Flex, Image} from "antd";
import {I_Teeth} from "@/types/teeth.ts";

export const TeethGridItem: FC<{
    teeth: I_Teeth
}> = (props) => {
    const picture = props.teeth.PICTURE.SRC
    return (
        <Flex gap={5} vertical={true} align={'center'} className="teeth-grid-item">
            <div className="teeth-picture-wrap noselect">
                <Image preview={false}
                       fallback={"/src/assets/teeth-transparent.svg"}
                       style={{maxHeight: "35px", maxWidth: "35px"}}
                       src={picture}
                       className="teeth-picture-img"
                />
            </div>
            <div className="teeth-number-position noselect">{props.teeth.NUMBER_POSITION}</div>
        </Flex>
    )
}