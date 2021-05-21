import React from 'react';

type DisplayType = {
    state: number

}

function Display(props: DisplayType) {

    const active = props.state === 5 ? 'active' : ''

    return (
        <div>
            <b><p className={active}>{props.state}</p></b>
        </div>
    )
}

export default Display;
