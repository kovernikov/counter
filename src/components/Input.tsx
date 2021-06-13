import React from 'react';
import s from './Input.module.css'

type InputPropsType = {
    value: number
    callback: (value: number) => void
    className: boolean
    label: string
}

const InputComponent: React.FC<InputPropsType> = ({value, callback, className, label}) => {
    console.log('Input Component rerender')
    return (
        <div className={s.number}>
            <label>{label}
                <input type="number"
                       value={value}
                       onChange={(e) => callback(+e.currentTarget.value)}
                       className={className ? `${s.error} ${s.input}` : s.input}
                />
            </label>
        </div>
    )
}

export const Input = React.memo(InputComponent)
