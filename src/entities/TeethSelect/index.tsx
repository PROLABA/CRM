import {teethHoc} from "@/hooks/TeethHOK.tsx";
import {Select} from "antd";
import {FC} from "react";
import {I_Teeth} from "@/types/teeth.ts";

export const TeethSelect: FC<{
    value: I_Teeth['ID'][],
    onChange: (value: I_Teeth['ID'][]) => void
}> = ({value, onChange}) => {

    return teethHoc(({teethList}) => <Select
        mode="multiple"
        allowClear
        style={{width: '100%'}}
        placeholder="Зубы"
        defaultValue={value}
        onChange={onChange}
        options={teethList.map(t=>({
            value: t.ID,
            label: t.NUMBER_POSITION,
            title: t.NAME
        }))}
    />)({} )
}