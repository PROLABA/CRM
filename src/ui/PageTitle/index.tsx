import {FC} from "react";

const PageTitle: FC<{
    title: string
}> = ({title}) => {
    return (
        <h1>{title}</h1>
    )
}
export default PageTitle