import {FC, useState} from "react";
import {Input, InputNumber, InputProps} from "antd";
import {useDebounce, useDebouncedCallback} from "use-debounce";
import {InputNumberProps} from "antd/es/input-number";

export const InputAsync: FC<{
    ID: number | string,
    value: number,
    type?: 'number',
    onChange: (newVal: number) => void
    config?: InputNumberProps
} | {
    ID: number | string,
    value: string,
    type: 'string',
    onChange: (newVal: string) => void
    config?: InputProps
}> = ({
          ID,
          value,
          onChange,
          config,
          type = 'number'
      }) => {
    const [text, setText] = useState<number | string>(value)
    const [newText] = useDebounce(text, 2000);
    const debounced = useDebouncedCallback(onChange, 2000);
    if (type === 'string') {
        return <Input
            style={{
                width: '100px'
            }}
            key={ID}
            status={newText !== text ? 'warning' : ''}
            value={text}
            onChange={(v) => {
                setText(v.target.value)
                debounced(v.target.value)
            }}
            {...config}
        />
    }
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