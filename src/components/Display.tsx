import React from 'react';
import s from './Display.module.css';

type DisplayType = {
    state: number

}

function DisplayComponent(props: DisplayType) {

    const active = props.state === 5 ? 'active' : ''

    return (
        <div>
            <b><p className={active}>{props.state}</p></b>
        </div>
    )
}

export const Display = React.memo(DisplayComponent);
