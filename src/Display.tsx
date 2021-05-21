import React from 'react';

type DisplayType = {
    state: number
    maxState: number

}

function Display(props: DisplayType) {

    let act = props.state === 5 ? 'active' : ''


    return (
        <div>
            <b><p className={act}>{props.state}</p></b>
        </div>
    )
}

export default Display;
