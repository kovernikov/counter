import {SettingsDisplay} from './SettingDisplay';
import React from 'react';
import '../App.css';
import {Button} from './Buttons';

function CounterSettingsComponent() {
    return (
        <div className="App">
            <SettingsDisplay maxNum={1} minNum={2} helpMessage={true} changeMaxValue={()=>{}} changeMinValue={()=>{}}/>
            <div className="btns">
                < Button title={'set'} disabled={false} callback={()=>{}} state={5}/>
            </div>
        </div>
    )
}
export const CounterSettings = React.memo(CounterSettingsComponent);
