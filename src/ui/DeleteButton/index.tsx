import {FC, useState} from "react";
import {ReactComponent as Close} from '@/assets/close.svg';
import {ReactComponent as Confirm} from '@/assets/confirm.svg';
import './style.css'

export const DeleteButton: FC<{
    onDelete: () => void
}> = ({onDelete}) => {
    const [openConfirm, setOpenConfirm] = useState<boolean>(false)
    return openConfirm ?
        <Confirm cursor={"pointer"} onMouseLeave={() => setOpenConfirm(false)} onClick={onDelete} height={20} width={20} />
        : <Close cursor={"pointer"} onClick={() => setOpenConfirm(true)} height={20} width={20} />
}