import {ContentHeader} from "@/widgets/ContentHeader";
import {PageHoc} from "@/hooks/pageHOK.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const MainPage = PageHoc(() => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/orders")
    }, [navigate])

    return (
        <div>
            <ContentHeader>
                MainPage
            </ContentHeader>
        </div>
    )
})