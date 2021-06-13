import React, {useState} from 'react';
import './App.css';
import {Display} from './components/Display';
import { Button } from './components/Buttons';
import {SettingsDisplay} from './components/SettingDisplay';
import {DisplayCounter} from './components/DisplayCounter';
import {CounterSettings} from './components/CounterSettings';


function App() {
    return (
        <div className={'Approot'}>
            <CounterSettings />
            <DisplayCounter />
        </div>
    )
}

export default App;
