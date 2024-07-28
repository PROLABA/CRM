import {ComponentType, FC, useEffect, useState} from "react";

export function PageHoc<WrappedProps>(
    WrappedComponent: ComponentType
): FC<WrappedProps> {
    const WrapperComponent: FC<WrappedProps> = () => {
        const [classList, setClassList] = useState<string>("")
        useEffect(() => {
            setClassList("active")
        }, [setClassList])
        return (
            <div className={`page-container ${classList}`}>
                <WrappedComponent />
            </div>
        )
    }
    return WrapperComponent
}
