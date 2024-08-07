import {ComponentType, FC} from "react";
import {useAppSelector} from "@/hooks/storeHooks.ts";

export function DashboardHOK<WrappedProps>(WrappedComponent: ComponentType): FC<WrappedProps> {
    const WrapperComponent: FC<WrappedProps> = () => {
        const {token} = useAppSelector(state => state.auth)
        if (!token) return null

        return <WrappedComponent />
    }
    return WrapperComponent
}
