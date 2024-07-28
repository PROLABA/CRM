import {FC} from "react";
import {TeethGridItem} from "@/entities/TeethGridItem";
import './style.css'

import {I_Teeth} from "@/types/teeth.ts";
export const TeethSection: FC<{
    teethList: I_Teeth[]
}> = ({teethList}) => {
    return (
        <div className="teeth-section">
            {teethList.map(t => <TeethGridItem teeth={t} key={t.ID}/>)}
        </div>
    )
}