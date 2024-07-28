import {FC} from "react";
import {ReactComponent as ArrowEmpty} from '@/assets/arrow-empty.svg';
import {ReactComponent as Logo} from '@/assets/Logo.svg';
import './style.css'
import {Flex} from "antd";

export const HeaderCompany: FC<{
    setCollapsed: () => void
    collapsed: boolean
}> = (props) => {
    return (
        <Flex gap={"26px"}  align={"center"} className={'header-company'}>
            <Flex gap={"8px"} className={'header-company-info'} align={'center'} justify={'center'}>
                <Logo className={"header-company-logo"} onClick={props.setCollapsed}/>
                <Flex vertical={true} className={"header-company-titles "+(props.collapsed ? "collapsed-text" : "")}>
                    <span className="clip text-gray">Рабочее пространство</span>
                    <span className="clip">Название компании компании компании</span>
                </Flex>

            </Flex>

            <div
                style={props.collapsed ? {display: "none"} : {}}
                className="collapseTriggerArrow button"
                onClick={props.setCollapsed}
            >
                <ArrowEmpty/>
            </div>
        </Flex>


    )
}
