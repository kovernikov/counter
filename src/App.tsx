import React, {useState} from 'react';
import './App.css';
import Btn from './Buttons';
import Display from './Display';


function App() {
    let [state, setState] = useState<number>(0)

    const maxState = 5
    const ins = () => {
        setState(state + 1);
    }

    const reset = () => {
        setState(0)
    }


    return (
        <div className="App">
            <div className="disp">
                <Display maxState={maxState} state={state}/>
            </div>
            <div className="btn">
                < Btn sum={ins} reset={reset} maxState={maxState} state={state}/>
            </div>
        </div>
    )
}

export default App;
