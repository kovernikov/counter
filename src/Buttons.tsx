import React from 'react';
import './App.css';

type btnType = {
    sum: () => void
    reset: () => void
    maxState: number
    state: number

}

function Btn(props: btnType) {
    return (
        <div className="btns">
            <button disabled={props.state === 5 ? true : false} onClick={props.sum}>ins</button>
            <button disabled={props.state !== 5 ? true : false} onClick={props.reset}>reset</button>
        </div>
    )
}

export default Btn;
