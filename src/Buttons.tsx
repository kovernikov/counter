import React from 'react';
import './App.css';

type btnType = {
    inc: () => void
    reset: () => void
    state: number

}

function Btn(props: btnType) {
    return (
        <div className="btns">
            <button disabled={props.state === 5 ? true : false} onClick={props.inc}>inc</button>
            <button disabled={props.state !== 5 ? true : false} onClick={props.reset}>reset</button>
        </div>
    )
}

export default Btn;
