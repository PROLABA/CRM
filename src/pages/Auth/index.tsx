import {PageHoc} from "@/hooks/pageHOK.tsx";
import './style.scss'
import {AuthFormWidget} from "@/widgets/AuthForm";

export const AuthPage = PageHoc(() => {

    return (
        <div className="main-page">
            <AuthFormWidget/>
        </div>
    )
})