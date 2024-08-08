import {FC, useState} from "react";
import {InputNumber} from "antd";
import {useDebounce, useDebouncedCallback} from "use-debounce";
import {InputNumberProps} from "antd/es/input-number";

export const InputAsync: FC<{
    ID: number | string,
    value: number,
    onChange: (newVal: number) => void
    config?: InputNumberProps
}> = ({
          ID,
          value,
          onChange,
          config
      }) => {
    const [text, setText] = useState<number>(Number(value))
    const [newText] = useDebounce(text, 2000);
    const debounced = useDebouncedCallback(onChange, 2000);
    return <InputNumber
        style={{
            width: '100px'
        }}
        key={ID}
        status={newText !== text ? 'warning' : ''}
        value={text}
        onChange={(v) => {
            setText(Number(v))
            debounced(Number(v))
        }}
        {...config}
    />
}