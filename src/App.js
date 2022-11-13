import React, {useEffect} from 'react';
import './App.css'
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";

const App = () => {
    const {tg, onToggleButton} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div>
            <Header/>
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
};

export default App;