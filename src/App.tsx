import React, {useState} from 'react';
import './App.css';
import Btn from './Buttons';
import Display from './Display';


function App() {
    let [state, setState] = useState<number>(0)

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
            <div className="btn">
                < Btn inc={inc} reset={reset} state={state}/>
            </div>
        </div>
    )
}

export default App;
