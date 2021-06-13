import React, {useState} from 'react';
import {Display} from './Display';
import {Button} from './Buttons';
import '../App.css';

function DisplayCounterComponent() {
    const [state, setState] = useState<number>(0)

    const inc = () => {
        setState(state + 1);
    }

    const reset = () => {
        setState(0)
    }

    return (
        <div className="App">
            <div className="display">
                <Display state={state}/>
            </div>
            <div className="btns">
                < Button title={'inc'} disabled={state === 5 ? true : false} callback={inc} state={state}/>
                < Button title={'reset'} disabled={state === 0 ? true : false} callback={reset} state={state}/>
            </div>
        </div>
    )
}

export const DisplayCounter = React.memo(DisplayCounterComponent);
