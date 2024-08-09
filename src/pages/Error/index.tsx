import {ContentHeader} from "@/widgets/ContentHeader";
import {Button} from "@/ui/Button";
import {ReactComponent as ArrowLong} from '@/assets/arrow-long.svg'
import {useNavigate} from "react-router-dom";
import {PageHoc} from "@/hooks/pageHOK.tsx";

export const ErrorPage = PageHoc(() => {
    const navigate = useNavigate();
    return (
        <div>
            <ContentHeader>
                <Button label="На главную"
                        background={"light"}
                        icon={<ArrowLong />}
                        onClick={()=> navigate("/")}
                />
            </ContentHeader>
            <h2>Страница не найдена</h2>
        </div>
    )
})