import {ContentHeader} from "@/widgets/ContentHeader";
import {PageHoc} from "@/hooks/pageHOK.tsx";
import {redirect, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const MainPage = PageHoc(() => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/orders")
    }, [redirect])

    return (
        <div>
            <ContentHeader>
                MainPage
            </ContentHeader>
        </div>
    )
})