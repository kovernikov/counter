import React from 'react';
import s from './Button.module.css';
import '../App.css';

type btnType = {
    title: string
    callback: () => void
    state: number
    disabled: boolean
}

function ButtonComponent(props: btnType) {
    return (
        <div >
            <button disabled={props.disabled} onClick={props.callback}>{props.title}</button>
        </div>
    )
}

export const Button = React.memo(ButtonComponent);
