import PageTitle from "@/ui/PageTitle";
import {FC} from "react";
import {Flex, Layout} from 'antd';
import {ProfileButton} from "@/ui/ProfileButton";

const {Header} = Layout;
const HeaderTop: FC<{
    title: string
}> = (props) => {
    return (
        <Header
            style={{padding: '0 16px', background: '#FFFFFF' }}
        >
            <Flex justify={"space-between"} style={{width: "100%"}} align={"center"}>
                <PageTitle title={props.title}/>
                <ProfileButton/>
            </Flex>
        </Header>
    )
}

export default HeaderTop